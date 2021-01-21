let initialState = {
    userName: 'Никита',
    userSoname: 'Крайнев',
    userCompany: 'Гуап',
    userDescription: 'Lorem Ipsum - это текст-"рыба", часто используемый в ' +
            'печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" ' +
            'для текстов на латинице с начала XVI века.'
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

export const saveInfoActionCreator = () =>({type: 'SAVE-INFO'})
export const reloadTextareaActionCreator = (value, inputName) =>({
    type: 'RELOAD-TEXTAREA',
    value: value,
    inputName: inputName
})

export default profileReducer