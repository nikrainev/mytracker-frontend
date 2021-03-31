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
                ...state, ...action.data
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
            return {
                ...state,
                friendsList: action.friends,
                totalFriends: action.totalDocs
            }
        case 'profile/SET-DELETED-FRIEND':
            return {
                ...state,
                deletedFriend: [action.friendId]
            }
        case 'profile/SET-AVATAR':
            return {
                ...state,
                avatar: action.avatarData.avatar
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



export const getAvatar = () => async (dispatch) =>{
    let response = await profileAPI.getAvatar()
    dispatch(setAvatar(response))

}

export const getProposals = () => async (dispatch)=>{

    let response = await profileAPI.getProposals()
    dispatch(setProposals(response))
}

export const getProfileInfo = () => async (dispatch) =>{
    let response = await profileAPI.getProfileInfo()
    dispatch(setProfileInfo(response))
}

export const getProfilesList = (page,limit) => async (dispatch) =>{

    let response = await profileAPI.getProfilesList(page,limit)
    dispatch(setProfilesList(response.items))
    dispatch(setTotalProfiles(response.totalPages))

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

export const putProfileInfo = (data) => async (dispatch) =>{

    let response = await profileAPI.putProfileInfo(data)
    dispatch(setProfileInfo(response.newInfo))
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

export default profileReducer