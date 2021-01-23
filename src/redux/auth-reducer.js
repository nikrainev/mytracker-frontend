
import {authAPI, signUpAPI} from "../api/auth-api";

let initialState = {
    profileId: null,
    email: null,
    login: null,
    regDate: null,
    token:'',
    isAuth: false,
    loginInput: '',
    emailInput: '',
    passwordInput: '',
    repeatPasswordInput: '',
    emailInputState: 'normal',
    passwordInputState: 'normal',
    isFetching: false,
    loginFormState: 'normal',
    isLoginButtonDisabled: false,
    signUpInputsDangers: {
        loginDanger:'',
        emailDanger:'',
        passwordDanger: '',
        repeatPasswordDanger: ''
    },
    passwordStrength: ['none',''],
    isSignUpButtonDisabled: false,
    signUpState: 'signUpForm'


}


const authReducer =(state =initialState, action) =>{
    switch (action.type){
        case "SET_USER_DATA":
            return{
                ...state,
                profileId: action.data.userId,
                email: action.data.email,
                login: action.data.login,
                regDate: action.data.regDate,

            }
        case "RELOAD_INPUT":

            return {
                ...state,
                [action.inputName]: action.value
            }
        case "SET_TOKEN":
            return {
                ...state,
                token: action.token,
                isAuth: true
            }
        case "DELETE_PROFILE_DATA":
            return {
                ...state,
                profileId: null,
                email: null,
                login: null,
                regDate: null,
                token:'',
                isAuth: false

            }
        case 'SET_LOGIN_INPUT_STATE':
            return{
                ...state,
                [action.inputName]: action.inputState
        }
        case 'TOGGLE_IS_FETCHING':
            return {
                ...state,
                isFetching: action.isFetching
            }
        case 'SET_LOGIN_FORM_STATE':
            return {
                ...state,
                loginFormState: action.formState
            }
        case 'TOGGLE_LOGIN_BUTTON_DISABILITY':
            return {
                ...state,
                isLoginButtonDisabled: action.buttonState
            }
        case 'SET_SIGNUP_INPUT_DANGER':
            let stateCopy = {...state}
            stateCopy.signUpInputsDangers = {...state.signUpInputsDangers}
            stateCopy.signUpInputsDangers[action.inputName] = action.inputDanger
            return stateCopy
        case 'SET_PASSWORD_STRENGTH':

            return {
                ...state,
                passwordStrength: [action.strength, action.strengthText]

            }
        case 'TOGGLE_SIGNUP_BUTTON_DISABILITY':
            let buttonDisability = false;
            for(let key in state.signUpInputsDangers){
                if(state.signUpInputsDangers[key] !== ''){
                    console.log(state.signUpInputsDangers[key])
                    buttonDisability = true
                }
            }

            return {
                ...state,
                isSignUpButtonDisabled: buttonDisability
            }
        case 'TOGGLE_SIGNUP_STATE':
            return {
                ...state,
                signUpState: action.signUpState
            }

        default:
            return state



    }


}


export const setProfileData = (authProfileData) => ({
    type: "SET_USER_DATA",
    data: authProfileData})
export const reloadInput = (inputName, value) => ({
    type: 'RELOAD_INPUT',
    inputName: inputName,
    value: value
})

export const setToken = (token) =>({
    type: 'SET_TOKEN',
    token: token
})
export const deleteProfileData = () => ({
    type: 'DELETE_PROFILE_DATA'
})

export const setInputState = (inputName, inputState) =>({
    type: 'SET_LOGIN_INPUT_STATE',
    inputName: inputName,
    inputState: inputState
})

export const toggleIsFetching = (isFetching)=>({
    type: 'TOGGLE_IS_FETCHING',
    isFetching: isFetching
})

export const setLoginFormState = (formState) =>({
    type: 'SET_LOGIN_FORM_STATE',
    formState: formState
})

export const toggleLoginButtonDisability = (buttonState) => ({
    type: 'TOGGLE_LOGIN_BUTTON_DISABILITY',
    buttonState: buttonState
})

export const setSignUpInputDanger = (inputName, inputDanger) => ({
    type: 'SET_SIGNUP_INPUT_DANGER',
    inputName: inputName,
    inputDanger: inputDanger
})

export const setPasswordStrength = (strength, strengthText) =>({
    type: 'SET_PASSWORD_STRENGTH',
    strength: strength,
    strengthText: strengthText
})
export const toggleSignUpButtonDisability = () =>({
    type: 'TOGGLE_SIGNUP_BUTTON_DISABILITY'
})
export const setSignUpState = (signUpState) =>{return {
    type: 'TOGGLE_SIGNUP_STATE',
    signUpState: signUpState
}}


export const loginThunkCreator = (emailInput, passwordInput) =>{
    return (dispatch)=>{
    dispatch(toggleIsFetching(true))
    authAPI.postLoginInfo(emailInput, passwordInput)
            .then(response => {
                dispatch(setToken(response.token))
                dispatch(toggleIsFetching(false))
                if(response.message == "Auth successful"){
                    document.cookie = 'email='+emailInput+'; max-age=360000'
                    document.cookie = 'password='+passwordInput+'; max-age=360000'
                    authAPI.getAuthInfo()
                            .then(response => {
                                console.log(response)
                                dispatch(setProfileData(response))
                            })
                }
            })
            .catch(error => {
                dispatch(toggleIsFetching(false))
                dispatch(setLoginFormState('false_alert'))

            })
}
}

export const signUpThunkCreator = (email,login,password) =>{
    return (dispatch) =>{
        dispatch(toggleIsFetching(true))
        signUpAPI.postSignUpInfo(email,login,password).then(response => {
            dispatch(toggleIsFetching(false))
            if(response.data.message === 'user created'){

                dispatch(setSignUpState('userInfoForm'))
                authAPI.postLoginInfo(email, password)
                        .then(response => {
                            dispatch(setToken(response.token))
                            if(response.message == "Auth successful"){
                                document.cookie = 'email='+email+'; max-age=360000'
                                document.cookie = 'password='+password+'; max-age=360000'
                                authAPI.getAuthInfo()
                                        .then(response => {
                                            console.log(response)
                                            dispatch(setProfileData(response))
                                        })

                            }
                        })
                        .catch(error => {
                            dispatch(toggleIsFetching(false))
                        })
            }

        }).catch(error =>{
            dispatch(toggleIsFetching(false))
            if(error.response.data.message === "Mail exists"){
               dispatch(setSignUpInputDanger('emailDanger','Данная почта уже зарегистрирована'))
            }
            else if(error.response.data.message === "Login exists"){
                dispatch(setSignUpInputDanger('loginDanger','Данный логин уже зарегистрирован'))
            }

        })
    }
}




export  default authReducer
