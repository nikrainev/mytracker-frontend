import {profileAPI} from '../api/profile-api'

let initialState = {
    name: '',
    soName: '',
    company: '',
    description: ''
}

const profileReducer = (state = initialState, action) =>{
    switch(action.type){
        case 'SET-PROFILE-INFO':
            return {
                ...state, ...action.data
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



export const getProfileInfo = () =>{
    return (dispatch) =>{
        profileAPI.getProfileInfo()
                .then(response =>{
                    dispatch(setProfileInfo(response))
                })
    }
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