let initialState = {

        counterslistData: [],
        pageSize: 5,
        totalCounters: 20,
        currentPage: 1,
        counterNameInput: '',
        counterDomenInput: ''



}

const countersReducer = (state = initialState,action) =>{
    switch (action.type){
        case "ADD-COUNTER":{
            let newCounter = {
                id: 5,
                name: state.counterNameInput,
                domen: state.counterDomenInput,
                dayusers: 0,
                total: 0,
                status: 'work'
            }

            return {
                ...state,
                counterslistData : [...state.counterslistData, newCounter],
                counterNameInput: '',
                counterDomenInput: ''
            }
        }

        case "RELOAD-COUNTER-INPUT":{
            return {
                ...state,
                [action.inputName] : action.value
            }
        }
        case "SET-COUNTERS":{
            return {
                ...state,
                counterslistData: action.countersData.data.items
            }
        }
        case "SET-CURRENT-PAGE":{
            return {
                ...state,
                currentPage: action.currentPage
            }
        }
        case 'SET-TOTAL-COUNTERS':{
            return {
                ...state,
                totalCounters: action.totalCounters.data.totalPages
            }
        }


        default:
            return state

    }

}

export default countersReducer
export const addCounterActionCreator = () =>({type: 'ADD-COUNTER'})
export const setCountersActionCreator = (countersData) =>({
    type: 'SET-COUNTERS',
    countersData: countersData

})
export const setCurrentPageActionCreator = (currentPage) =>({
    type: 'SET-CURRENT-PAGE',
    currentPage: currentPage

})
export const setTotalCountersActionCreator = (totalCounters) =>({
    type: 'SET-TOTAL-COUNTERS',
    totalCounters: totalCounters
})
export const reloadCounterInputActionCreator = (value, inputName) =>({
    type: 'RELOAD-COUNTER-INPUT',
    value: value,
    inputName: inputName})
