let initialState = {
    userName: '',
    userDescription: ''
}

const profileReducer = (state = initialState, action) =>{
    switch(action.type){
        case 'SAVE-INFO':{

        }
        case 'RELOAD-INPUT':{
           return{
               ...state,
               [action.inputName]: action.value
           }
        }
        case 'RELOAD-TEXTAREA':{
            return{
                ...state,
                [action.inputName]: action.value
            }
        }
        default:
                return state


    }
}
export default profileReducer
export const saveInfoActionCreator = () =>({type: 'SAVE-INFO'})
export const reloadInputActionCreator = (value, inputName) =>({
    type: 'RELOAD-INPUT',
    value: value,
    inputName: inputName
})
export const reloadTextareaActionCreator = (value, inputName) =>({
    type: 'RELOAD-TEXTAREA',
    value: value,
    inputName: inputName
})

