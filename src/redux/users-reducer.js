
import {usersAPI} from "../api/users-api";

let initialState = {
    userInfo: ''
}

let usersReducer = (state = initialState, action) =>{
    switch (action.type){
        case 'users/SET-USER-INFO' : {
            return {
                ...state,
                userInfo: action.userInfo
            }
        }
        case 'users/CLEAR-USER-INFO' : {
            return {
                ...state,
                userInfo: ''
            }
        }
        default :{
            return {
                ...state
            }
        }
    }
}


const setUserInfo = (userInfo) =>({
    type: 'users/SET-USER-INFO',
    userInfo: userInfo
})

export const clearUserInfo = () => ({
    type: 'users/CLEAR-USER-INFO'
})

export const getUserInfo = (tysId) => async (dispatch) =>{
    let response = await usersAPI.getUser(tysId)
    dispatch(setUserInfo(response))

}

export default usersReducer