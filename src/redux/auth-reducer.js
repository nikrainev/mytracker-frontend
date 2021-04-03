
import {authAPI, signUpAPI} from "../api/auth-api";
import {stopSubmit} from "redux-form";

let initialState = {
    profileId: null,
    email: null,
    login: null,
    regDate: null,
    token:'',
    isAuth: false,
    stage: '',
    isFetching: false
}


const authReducer =(state =initialState, action) =>{
    switch (action.type){
        case "auth/SET_PROFILE_DATA":
            return{
                ...state,
                profileId: action.data.userId,
                email: action.data.email,
                login: action.data.login,
                regDate: action.data.regDate,
                stage: action.data.stage

            }
        case "auth/SET_TOKEN":
            return {
                ...state,
                token: action.token,
                isAuth: true
            }
        case "auth/DELETE_PROFILE_DATA":
            return {
                ...state,
                profileId: null,
                email: null,
                login: null,
                regDate: null,
                token:'',
                isAuth: false

            }
        case 'auth/TOGGLE_IS_FETCHING':
            return {
                ...state,
                isFetching: action.isFetching
            }
        default:
            return state
    }
}


export const setProfileData = (authProfileData) => ({
    type: "auth/SET_PROFILE_DATA",
    data: authProfileData})
export const setToken = (token) =>({
    type: 'auth/SET_TOKEN',
    token: token
})
export const deleteProfileData = () => ({
    type: 'auth/DELETE_PROFILE_DATA'
})

export const setInputState = (inputName, inputState) =>({
    type: 'auth/SET_LOGIN_INPUT_STATE',
    inputName: inputName,
    inputState: inputState
})

export const toggleIsFetching = (isFetching)=>({
    type: 'auth/TOGGLE_IS_FETCHING',
    isFetching: isFetching
})



export const UpdateAuthInfo = () => async (dispatch) =>{
     let response  = await authAPI.getAuthInfo()
     dispatch(setProfileData(response))
}


export const loginThunkCreator = (emailInput, passwordInput) =>{

    return (dispatch)=>{
    dispatch(toggleIsFetching(true))
    authAPI.postLoginInfo(emailInput, passwordInput)
            .then(response => {
                dispatch(setToken(response.token))
                dispatch(toggleIsFetching(false))
                if(response.message === "Auth successful"){
                    document.cookie = 'email='+emailInput+'; max-age=360000'
                    document.cookie = 'password='+passwordInput+'; max-age=360000'
                    UpdateAuthInfo()
                }
            })
            .catch(error => {
                dispatch(stopSubmit('login-form', {_error : "Неверные данные"}))
                dispatch(toggleIsFetching(false))

            })
}
}

export const signUpThunkCreator = (email,login,password) =>{
    return (dispatch) =>{
        dispatch(toggleIsFetching(true))
        signUpAPI.postSignUpInfo(email,login,password).then(response => {
            if(response.data.message === 'user created'){


                dispatch(toggleIsFetching(false))
                authAPI.postLoginInfo(email, password)
                        .then(response => {
                            dispatch(setToken(response.token))
                            if(response.message === "Auth successful"){
                                document.cookie = 'email='+email+'; max-age=360000'
                                document.cookie = 'password='+password+'; max-age=360000'
                                UpdateAuthInfo()
                            }
                        })
                        .catch(error => {
                            console.log(error)
                        })
            }

        }).catch(error =>{
            dispatch(toggleIsFetching(false))
            if(error.response.data.message === "Mail exists"){
               dispatch(stopSubmit('signup-form', {email : 'Данная почта уже зарегистрирована'}))
            }
            else if(error.response.data.message === "Login exists"){
                dispatch(stopSubmit('signup-form', {login : 'Данный логин уже зарегистрирован'}))
            }
        })
    }
}

export const AuthThunkCreator = () => async (dispatch)=>{
    let getCookie = (name) =>{
        let matches = document.cookie.match(new RegExp(
                "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        ));
        return matches ? decodeURIComponent(matches[1]) : undefined;
    }
    let getAuth  = async() =>{
        let response  = await authAPI.getAuthInfo()
        dispatch(setProfileData(response))

    }


    if (getCookie('email') && getCookie('password')){
       let response = await authAPI.postLoginInfo(getCookie('email'), getCookie('password'))
            dispatch(setToken(response.token))
            await getAuth()
    }
}

export const ConfirmEmail = (token) => (dispatch) =>{
    signUpAPI.confirmEmail()
            .then(response=>{
                console.log(response)
            })
            .catch(error=>{
                console.log(error)
            })
}


export  default authReducer
