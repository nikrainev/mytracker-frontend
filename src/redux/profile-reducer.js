import {profileAPI, profileActionsAPI} from '../api/profile-api'
import store from "../redux/redux-store";
let initialState = {
    name: '',
    soName: '',
    company: '',
    description: '',
    avatar: '',
    pageSize: 5,
    totalProfiles: undefined,
    proposals: [],
    profilesList: [],
    friendsList: [],
    totalFriends: undefined,
    deletedFriend: undefined
}



const profileReducer = (state = initialState, action) =>{
    switch(action.type){
        case 'profile/SET-PROFILE-INFO':

            return {
                ...state,
                name: action.data.name ? action.data.name : state.name,
                soName: action.data.soName ? action.data.soName : state.soName,
                company: action.data.company ? action.data.company : state.company,
                description: action.data.description ? action.data.description : state.description
            }
        case 'profile/SET-PROFILES-LIST':
            return {
                ...state,
                profilesList: action.data
            }
        case 'profile/SET-TOTAL-PROFILES':
            return {
                ...state,
                totalProfiles: action.count

            }
        case 'profile/SET-PROPOSALS':
            return {
                ...state,
                proposals: action.proposals
            }
        case 'profile/SET-FRIENDS-LIST':
            let totalDocs = ''
            let friendsList = []
            if(action.totalDocs){
                totalDocs = action.totalDocs
                friendsList = action.friends
            }
            else{
                totalDocs = 0
                friendsList = 'no friends'
            }

            return {
                ...state,
                friendsList: friendsList,
                totalFriends: totalDocs
            }
        case 'profile/SET-DELETED-FRIEND':
            return {
                ...state,
                deletedFriend: [action.friendId]
            }
        case 'profile/SET-AVATAR':
            return {
                ...state,
                avatar: action.avatarData
            }
        case 'profile/CLEAR-FRIENDS-PAGE':{
            return {
                ...state,
                profilesList: [],
                totalProfiles: undefined,
                proposals: []
            }
        }
        case 'profile/CLEAR-SETTINGS_PAGE':{
            return {
                ...state,
                friendsList: [],
                totalFriends: undefined

            }
        }
        default:
                return state


    }
}

export const saveInfoActionCreator = () =>({type: 'profile/SAVE-INFO'})
export const reloadTextareaActionCreator = (value, inputName) =>({
    type: 'profile/RELOAD-TEXTAREA',
    value: value,
    inputName: inputName
})

export const setProfileInfo = (data) =>({
    type: 'profile/SET-PROFILE-INFO',
    data: data
})

export const setProfilesList = (data) =>({
    type: 'profile/SET-PROFILES-LIST',
    data: data
})

export const setTotalProfiles = (count) =>({
    type: 'profile/SET-TOTAL-PROFILES',
    count: count
})

export const setProposals = (proposals) => ({
    type: 'profile/SET-PROPOSALS',
    proposals: proposals
})

export const setFriendsList = (friends, totalDocs) =>({
    type: 'profile/SET-FRIENDS-LIST',
    friends: friends,
    totalDocs: totalDocs
})

export const setDeletedFriend = (friendId)=>({
    type: 'profile/SET-DELETED-FRIEND',
    friendId: friendId
})

export const setAvatar = (avatarData) =>({
    type: 'profile/SET-AVATAR',
    avatarData: avatarData
})

export const clearFriendsPage = () =>({
    type: 'profile/CLEAR-FRIENDS-PAGE'
})

export const clearSettingsPage = () =>({
    type: 'profile/CLEAR-SETTINGS_PAGE'
})





export const getAvatar = () => async (dispatch) =>{
    let response = await profileAPI.getAvatar()
    dispatch(setAvatar(response.avatar))

}



export const getProfileInfo = () => async (dispatch) =>{
    let response = await profileAPI.getProfileInfo()
    dispatch(setProfileInfo(response))
}



export const getProposals = () => async (dispatch)=>{
    let response = await profileAPI.getProposals()
    dispatch(setProposals(response))
}

export const getProfilesList = (page,limit) => async (dispatch) =>{
    let response = await profileAPI.getProfilesList(page,limit)
    dispatch(setProfilesList(response.items))
    dispatch(setTotalProfiles(response.totalPages))
}


export const getFriendsPage = () => (dispatch) =>{
    Promise.all([profileAPI.getProposals(), profileAPI.getProfilesList(1,store.getState().profilePage.pageSize)]).then(response=>{
        dispatch(setProposals(response[0]))
        dispatch(setProfilesList(response[1].items))
        dispatch(setTotalProfiles(response[1].totalPages))

    })
}


export const postProposal = (userId, currentPage) => async (dispatch) =>{

    let response = await profileActionsAPI.postProposal(userId)
    if(response.message === 'proposal sended'){
        dispatch(getProfilesList(currentPage,store.getState().profilePage.pageSize))
    }
}

export const deleteProposal = (userId, currentPage) => async (dispatch) =>{

    let response = await profileActionsAPI.deleteProposal(userId)
    if(response.message === "proposal deleted"){
        dispatch(getProfilesList(currentPage,store.getState().profilePage.pageSize))
    }
}

export const acceptProposal = (userId) => async (dispatch) =>{

    let response = await profileActionsAPI.acceptProposal(userId)
    if(response.message === "Friend added"){
        dispatch(getProposals())
    }
}

export const denyProposal = (userId) => async (dispatch) => {

    let response = await profileActionsAPI.denyProposal(userId)
    if (response.message === "Proposal denied") {
        dispatch(getProposals())
    }
}

export const putProfileInfo = (data) => (dispatch) =>{

     profileAPI.putProfileInfo(data)
             .then(response=>{
                 dispatch(setProfileInfo(response.newInfo))
            })
             .catch(error=>{
                dispatch(getProfileInfo)
            })
}

export const getFriendsList = (page,limit) => async (dispatch) =>{

    let response = await profileAPI.getFriendsList(page,limit)
    dispatch(setFriendsList(response.friendsPage, response.totalDocs))
}

export const addFriendsList = (page, limit) => async (dispatch) =>{

    let response = await profileAPI.getFriendsList(page, limit)
    dispatch(setFriendsList(response.friendsPage, response.totalDocs))
}

export const deleteFriend = (userId, buttonId) => async (dispatch) =>{

    let response = await profileActionsAPI.deleteFriend(userId)
    if(response.message === "friend deleted"){
        dispatch(setDeletedFriend(buttonId))
    }
}

export const updateAvatar = (file) => async (dispatch) =>{
    let response = await profileAPI.updateAvatar(file)
    if (response.avatar){
        dispatch(setAvatar(response.avatar))
    }
}

export const getSettingsPage = () => (dispatch)=>{
    Promise.all([profileAPI.getFriendsList(1, store.getState().profilePage.pageSize), profileAPI.getProfileInfo()]).then(response=>{
        dispatch(setFriendsList(response[0].friendsPage, response[0].totalDocs))
        dispatch(setProfileInfo(response[1]))
    })
}

export default profileReducer