import {countersAPI} from "../api/counters-api";
import store from "./redux-store"
let initialState = {
        counterslistData: [],
        pageSize: 5,
        totalCounters: '',
        currentPage: 1,
        isFetching: ''
}

const countersReducer = (state = initialState,action) =>{
    switch (action.type){
        case "ADD-COUNTER":{
            let newCounter = {
                id: action.counterData._id,
                name: action.counterData.name,
                domen: action.counterData.domen,
                dayusers: action.counterData.dayusers,
                allusers: action.counterData.allusers,
                status: action.counterData.status
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
                counterslistData: action.countersData.items
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
                totalCounters: action.totalCounters.totalPages
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


export const addCounter = (counterData) =>({
    type: 'ADD-COUNTER',
    counterData: counterData
})
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



export const getCounters = () =>{
    return (dispatch) =>{
        dispatch(toggleIsFetching(true))
        countersAPI.getCounters(store.getState().countersPage.currentPage, store.getState().countersPage.pageSize).then(response =>{
            dispatch(setCounters(response))
            dispatch(setTotalCounters(response))
            dispatch(toggleIsFetching(false))
        })
    }
}

export const postCounter = (data) => {
    return (dispatch) => {
        countersAPI.postCounter(data).then(response =>{
            dispatch(setCurrentPage(1))
            dispatch(toggleIsFetching(true))
            countersAPI.getCounters(store.getState().countersPage.currentPage, store.getState().countersPage.pageSize).then(response =>{
                dispatch(setCounters(response))
                dispatch(setTotalCounters(response))
                dispatch(toggleIsFetching(false))
            })
        })
    }
}

export default countersReducer