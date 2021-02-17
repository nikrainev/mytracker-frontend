import {profileAPI, profileActionsAPI} from '../api/profile-api'
import store from "../redux/redux-store";
let initialState = {
    name: '',
    soName: '',
    company: '',
    description: '',
    pageSize: 2,
    totalProfiles: undefined,
    proposals: [],
    profilesList: [],
    friendsList: [],
    totalFriends: undefined


}



const profileReducer = (state = initialState, action) =>{
    switch(action.type){
        case 'SET-PROFILE-INFO':
            return {
                ...state, ...action.data
            }
        case 'SET-PROFILES-LIST':
            return {
                ...state,
                profilesList: action.data
            }
        case 'SET-TOTAL-PROFILES':
            return {
                ...state,
                totalProfiles: action.count

            }
        case 'SET-PROPOSALS':
            return {
                ...state,
                proposals: action.proposals
            }
        case 'SET-FRIENDS-LIST':
            return {
                ...state,
                friendsList: action.friends,
                totalFriends: action.totalDocs
            }
        case 'ADD-FRIENDS-LIST':
            return {
                ...state,
                friendsList: [...state.friendsList, ...action.friends],
                totalFriends: action.totalDocs
            }
        default:
                return state


    }
}

export const saveInfoActionCreator = () =>({type: 'SAVE-INFO'})
export const reloadTextareaActionCreator = (value, inputName) =>({
    type: 'RELOAD-TEXTAREA',
    value: value,
    inputName: inputName
})

export const setProfileInfo = (data) =>({
    type: 'SET-PROFILE-INFO',
    data: data
})

export const setProfilesList = (data) =>({
    type: 'SET-PROFILES-LIST',
    data: data
})

export const setTotalProfiles = (count) =>({
    type: 'SET-TOTAL-PROFILES',
    count: count
})

export const setProposals = (proposals) => ({
    type: 'SET-PROPOSALS',
    proposals: proposals
})

export const setFriendsList = (friends, totalDocs) =>({
    type: 'SET-FRIENDS-LIST',
    friends: friends,
    totalDocs: totalDocs
})
export const addToFriendsList = (friends, totalDocs) =>({
    type: 'ADD-FRIENDS-LIST',
    friends: friends,
    totalDocs: totalDocs
})





export const getProposals = () => (dispatch)=>{
    profileAPI.getProposals().then(response=>{
            dispatch(setProposals(response))
    })
}

export const getProfileInfo = () => (dispatch) =>{
        profileAPI.getProfileInfo()
                .then(response =>{
                    dispatch(setProfileInfo(response))
                })

}

export const getProfilesList = (page,limit) => (dispatch) =>{
    profileAPI.getProfilesList(page,limit).then(response =>{
        dispatch(setProfilesList(response.items))
        dispatch(setTotalProfiles(response.totalPages))
    })
}

export const postProposal = (userId, currentPage) => (dispatch) =>{
    profileActionsAPI.postProposal(userId).then(response =>{
        if(response.message === 'proposal sended'){
           dispatch(getProfilesList(currentPage,store.getState().profilePage.pageSize))
        }


    })
}

export const deleteProposal = (userId, currentPage) => (dispatch) =>{
    profileActionsAPI.deleteProposal(userId).then(response =>{
        if(response.message === "proposal deleted"){
            dispatch(getProfilesList(currentPage,store.getState().profilePage.pageSize))
        }

    })
}

export const acceptProposal = (userId) => (dispatch) =>{
    profileActionsAPI.acceptProposal(userId).then(response =>{
        if(response.message === "Friend added"){
            dispatch(getProposals())
            dispatch(getFriendsList())
        }
    })
}

export const denyProposal = (userId) => (dispatch) => {
    profileActionsAPI.denyProposal(userId).then(response => {
        if (response.message === "Proposal denied") {
            dispatch(getProposals())
        }
    })
}

export const putProfileInfo = (data) =>{
    return (dispatch) =>{
        profileAPI.putProfileInfo(data)
                .then(response =>{
                    dispatch(setProfileInfo(response.newInfo))
                })
    }
}

export const getFriendsList = (page,limit) => (dispatch) =>{
    profileAPI.getFriendsList(page,limit).then(response =>{
      dispatch(setFriendsList(response.friendsPage, response.totalDocs))
    })
}

export const addFriendsList = (page, limit) => (dispatch) =>{

    profileAPI.getFriendsList(page, limit).then(response=>{
        console.log(response)
        dispatch(addToFriendsList(response.friendsPage, response.totalDocs))
    })
}

export const deleteFriend = (userId) => (dispatch) =>{
    profileActionsAPI.deleteFriend(userId).then(response=>{
        if(response.message === "friend deleted"){
            dispatch(getFriendsList())

        }

    })
}

export default profileReducer