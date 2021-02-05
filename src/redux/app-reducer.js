import {AuthThunkCreator} from './auth-reducer'


let initialState = {
    isInitialized: false
}


const appReducer =(state =initialState, action) =>{
    switch (action.type){
        case "INITIALIZED_SUCCESS":
            return{
                ...state,
                isInitialized: true
            }

        default:
            return state
    }
}


export const setInitializedSuccess = () => ({type: "INITIALIZED_SUCCESS"})


export const InitializingApp = () => (dispatch) =>{
    let promise = dispatch(AuthThunkCreator())
    Promise.all([promise]).then(()=>{
                dispatch(setInitializedSuccess())
            })

}



export  default appReducer
