import store from "../redux/redux-store";
import {usersAPI} from "../api/users-api";

let initialState = {
    userInfo: ''
}

let usersReducer = (state = initialState, action) =>{
    switch (action.type){
        case 'SET-USER-INFO' : {
            return {
                ...state,
                userInfo: action.userInfo
            }
        }
        case 'CLEAR-USER-INFO' : {
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
    type: 'SET-USER-INFO',
    userInfo: userInfo
})

export const clearUserInfo = () => ({
    type: 'CLEAR-USER-INFO'
})

export const getUserInfo = (tysId) => (dispatch) =>{
    usersAPI.getUser(tysId).then(response =>{
        dispatch(setUserInfo(response))
    })
}

export default usersReducer