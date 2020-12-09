let initialState = {

        counterslistData: [],
        pageSize: 5,
        totalCounters: '',
        currentPage: 1,
        counterNameInput: '',
        counterDomenInput: '',
        isFetching: ''



}

const countersReducer = (state = initialState,action) =>{
    switch (action.type){
        case "ADD-COUNTER":{
            let newCounter = {
                id: 5,
                name: state.counterNameInput,
                domen: state.counterDomenInput,
                dayusers: 0,
                allusers: 0,
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
        case 'TOGGLE-IS-FETCHING':{

            return {
                ...state,
                isFetching: action.isFetching
            }

        }


        default:
            return state

    }

}


export const addCounter = () =>({type: 'ADD-COUNTER'})
export const setCounters = (countersData) =>({
    type: 'SET-COUNTERS',
    countersData: countersData

})
export const setCurrentPage = (currentPage) =>({
    type: 'SET-CURRENT-PAGE',
    currentPage: currentPage

})
export const setTotalCounters = (totalCounters) =>({
    type: 'SET-TOTAL-COUNTERS',
    totalCounters: totalCounters
})
export const reloadCounterInput = (value, inputName) =>({
    type: 'RELOAD-COUNTER-INPUT',
    value: value,
    inputName: inputName})

export const toggleIsFetching = (isFetching) =>({
    type: 'TOGGLE-IS-FETCHING',
    isFetching: isFetching
})

export default countersReducer