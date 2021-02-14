import {profileAPI, profileActionsAPI} from '../api/profile-api'
import store from "../redux/redux-store";
let initialState = {
    name: '',
    soName: '',
    company: '',
    description: '',
    pageSize: 5,
    proposals: [],
    profilesList: [],
    totalProfiles: undefined
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
        case 'UPDATE-PROFILES-LIST-BUTTON':
            return {
                ...state,
                totalProfiles: {
                    ...action.newList
                }
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

export const updateProfilesListButton = (newList) =>({
    type: 'UPDATE-PROFILES-LIST-BUTTON',
    newList: newList

})


export const getProfileInfo = () =>{
    return (dispatch) =>{
        profileAPI.getProfileInfo()
                .then(response =>{
                    dispatch(setProfileInfo(response))
                })
    }
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

export const putProfileInfo = (data) =>{
    return (dispatch) =>{
        profileAPI.putProfileInfo(data)
                .then(response =>{
                    dispatch(setProfileInfo(response.newInfo))
                })
    }

}

export default profileReducer