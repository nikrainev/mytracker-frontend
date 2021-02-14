import {countersAPI} from "../api/counters-api";
import store from "./redux-store"
import {reset} from 'redux-form';
let initialState = {
        counterslistData: [],
        pageSize: 5,
        totalCounters: ''
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

        case "SET-COUNTERS":{
            return {
                ...state,
                counterslistData: action.countersData.items
            }
        }
        case 'SET-TOTAL-COUNTERS':{
            return {
                ...state,
                totalCounters: action.totalCounters.totalPages
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
export const setTotalCounters = (totalCounters) =>({
    type: 'SET-TOTAL-COUNTERS',
    totalCounters: totalCounters
})




export const getCounters = (page) =>{
    return (dispatch) =>{
        countersAPI.getCounters(page, store.getState().countersPage.pageSize).then(response =>{
            dispatch(setCounters(response))
            dispatch(setTotalCounters(response))
        })
    }
}

export const postCounter = (data) => {
    return (dispatch) => {
        countersAPI.postCounter(data).then(response =>{
            countersAPI.getCounters(store.getState().countersPage.currentPage, store.getState().countersPage.pageSize).then(response =>{
                dispatch(setCounters(response))
                dispatch(setTotalCounters(response))
                dispatch(reset('addcounter-form'))
            })
        })
    }
}

export default countersReducer