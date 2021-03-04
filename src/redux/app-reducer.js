import {AuthThunkCreator} from './auth-reducer'


let initialState = {
    isInitialized: false,
    menuState: 'collapsed'
}


const appReducer =(state =initialState, action) =>{
    switch (action.type){
        case "INITIALIZED_SUCCESS":
            return{
                ...state,
                isInitialized: true
            }
        case "TOGGLE-MENU-STATE":
            let menuState = ''
            switch (state.menuState ){
                case 'collapsed':
                    menuState = 'closed';
                    break;
                case 'closed':
                    menuState = 'collapsed';
                    break
                default: menuState = 'closed'
            }

            return {
                ...state,
                menuState: menuState
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

export const toggleMenuState = () => ({
    type: "TOGGLE-MENU-STATE"
})


export  default appReducer
