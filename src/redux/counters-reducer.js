import {countersAPI} from "../api/counters-api";
import store from "./redux-store"
import {reset} from 'redux-form';
import {usersAPI} from "../api/users-api";
let initialState = {
        counterslistData: [],
        pageSize: 10,
        totalCounters: '',
        pixelCode: '',
        currentCounter:{
            counterInfo: '',
            counterUsers: ''
        }
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
                counterslistData : [newCounter, ...state.counterslistData],
                pixelCode: action.pixelCode
            }
        }
        case "CLEAR-PIXEL-CODE":{
            return {
                ...state,
                pixelCode: ''
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
        case 'SET-CURRENT-COUNTER-INFO':{
            return {
                ...state,
                currentCounter: {
                    ...state.currentCounter,
                    counterInfo: action.counterInfo
                }
            }
        }

        case 'SET-CURRENT-COUNTER-USERS':{
            return {
                ...state,
                currentCounter: {
                    ...state.currentCounter,
                    counterUsers: action.counterUsers
                }
            }
        }
        default:
            return state

    }

}


export const addCounter = (counterData, pixelCode) =>({
    type: 'ADD-COUNTER',
    counterData: counterData,
    pixelCode: pixelCode
})
export const setCounters = (countersData) =>({
    type: 'SET-COUNTERS',
    countersData: countersData

})
export const setTotalCounters = (totalCounters) =>({
    type: 'SET-TOTAL-COUNTERS',
    totalCounters: totalCounters
})

export const clearPixelCode = () =>({
    type: 'CLEAR-PIXEL-CODE'
})

export const setCurrentCounterInfo = (counterInfo) =>({
    type: 'SET-CURRENT-COUNTER-INFO',
    counterInfo: counterInfo
})

export const setCurrentCounterUsers = (counterUsers) =>({
    type: 'SET-CURRENT-COUNTER-USERS',
    counterUsers: counterUsers
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
                dispatch(addCounter(response.newCounter, response.pixelCode))
                dispatch(reset('addcounter-form'))
        })
    }
}

export const getCurrentCounter = (counterId) => (dispatch) =>{
    Promise.all([countersAPI.getCounterById(counterId),
        usersAPI.getCounterUsers(counterId, 1, store.getState().countersPage.pageSize)]).then(response =>{
        dispatch(setCurrentCounterInfo(response[0]))
        dispatch(setCurrentCounterUsers(response[1]))
            console.log(response)
    })

}

export default countersReducer