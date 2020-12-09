let initialState = {
    profileId: null,
    email: null,
    login: null,
    emailInput: '',
    passwordInput: '',
    token:''
}

const authReducer =(state =initialState, action) =>{
    switch (action.type){
        case "SET_USER_DATA":
            return{
                ...state,
                ...action.data
            }
        case "RELOAD_INPUT":
            return {
                ...state,
                [action.inputName]: action.value
            }
        case "SET_TOKEN":
            return {
                ...state,
                token: action.token
            }

        default:
            return state



    }


}


export const setProfileData = (profileId, email, login) => ({
    type: "SET_USER_DATA",
    data: {profileId,email,login}})
export const reloadInput = (inputName, value) => ({
    type: 'RELOAD_INPUT',
    inputName: inputName,
    value: value
})

export const setToken = (token) =>({
    type: 'SET_TOKEN',
    token: token
})
export  default authReducer