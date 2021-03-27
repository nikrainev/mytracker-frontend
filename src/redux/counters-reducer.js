import {countersAPI} from "../api/counters-api";
import store from "./redux-store"
import {reset} from 'redux-form';
import {usersAPI} from "../api/users-api";
let initialState = {

        pageSize: 5,
        pixelCode: '',
        yourCounters: {
            counterslistData: [],
            totalCounters: ''
        },
        friendsCounters:{
            counterslistData: [],
            totalCounters: ''
        },
        currentCounter:{
            counterInfo: '',
            counterUsers: '',
            totalUsers: ''
        }
}

const countersReducer = (state = initialState,action) =>{
    switch (action.type){
        case "counters/ADD-COUNTER":{
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
                pixelCode: action.pixelCode,
                yourCounters: {
                    ...state.yourCounters,
                    counterslistData: [newCounter, ...state.counterslistData]
                }

            }
        }
        case "counters/CLEAR-PIXEL-CODE":{
            return {
                ...state,
                pixelCode: ''
            }
        }
        case "counters/SET-YOUR-COUNTERS":{

            return {
                ...state,
                yourCounters: {
                    ...state.yourCounters,
                    counterslistData: action.countersData.items
                }

            }
        }
        case 'counters/SET-YOUR-TOTAL-COUNTERS':{
            return {
                ...state,
                yourCounters: {
                    ...state.yourCounters,
                    totalCounters: action.totalCounters.totalDocs
                }

            }
        }
        case "counters/SET-FRIENDS-COUNTERS":{

            return {
                ...state,
                friendsCounters: {
                    ...state.friendsCounters,
                    counterslistData: action.countersData.items
                }

            }
        }
        case 'counters/SET-FRIENDS-TOTAL-COUNTERS':{
            return {
                ...state,
                friendsCounters: {
                    ...state.friendsCounters,
                    totalCounters: action.totalCounters.totalDocs
                }

            }
        }

        case 'counters/SET-CURRENT-COUNTER':{
            return {
                ...state,
                currentCounter: {
                    ...state.currentCounter,
                    counterInfo: action.counterInfo,
                    counterUsers: action.counterUsers.usersPage,
                    totalUsers: action.counterUsers.totalDocs
                }
            }
        }
        case 'counters/CLEAR-CURRENT-COUNTER':{
            return {
                ...state,
                currentCounter: {
                    ...state.currentCounter,
                    counterInfo: '',
                    counterUsers: '',
                    totalUsers: ''
                }
            }
        }
        case 'counters/ADD-COUNTER-USERS':{

            return {
                ...state,
                currentCounter: {
                    ...state.currentCounter,
                    counterUsers: [...state.currentCounter.counterUsers, ...action.users]
                }
            }
        }

        default:
            return state

    }

}


export const addCounter = (counterData, pixelCode) =>({
    type: 'counters/ADD-COUNTER',
    counterData: counterData,
    pixelCode: pixelCode
})
export const setYourCounters = (countersData) =>({
    type: 'counters/SET-YOUR-COUNTERS',
    countersData: countersData
})
export const setYourTotalCounters = (totalCounters) =>({
    type: 'counters/SET-YOUR-TOTAL-COUNTERS',
    totalCounters: totalCounters
})

export const setFriendsCounters = (countersData) =>({
    type: 'counters/SET-FRIENDS-COUNTERS',
    countersData: countersData
})

export const setFriendsTotalCounters = (totalCounters) => ({
    type: 'counters/SET-FRIENDS-TOTAL-COUNTERS',
    totalCounters: totalCounters
})


export const clearPixelCode = () =>({
    type: 'counters/CLEAR-PIXEL-CODE'
})

export const setCurrentCounter = (counterInfo, counterUsers) =>({
    type: 'counters/SET-CURRENT-COUNTER',
    counterInfo: counterInfo,
    counterUsers: counterUsers
})

export const clearCurrentCounter = () => ({
    type: 'counters/CLEAR-CURRENT-COUNTER'
})

export const addCounterUsers = (users) =>({
    type: 'counters/ADD-COUNTER-USERS',
    users: users
})

export const getCounters = () => (dispatch) =>{
    Promise.all([countersAPI.getYourCounters(1, store.getState().countersPage.pageSize), countersAPI.getFriendsCounters(1, store.getState().countersPage.pageSize)]).then(response=>{
        dispatch(setYourCounters(response[0]))
        dispatch(setYourTotalCounters(response[0]))
        dispatch(setFriendsCounters(response[1]))
        dispatch(setFriendsTotalCounters(response[1]))
    })
}

export const changeYourCounters = (page) => async (dispatch) =>{
    let response = await countersAPI.getYourCounters(page, store.getState().countersPage.pageSize)
    dispatch(setYourCounters(response))
    dispatch(setYourTotalCounters(response))
}

export const changeFriendsCounters = (page) => async (dispatch) =>{
    let response = await countersAPI.getFriendsCounters(page, store.getState().countersPage.pageSize)
    dispatch(setFriendsCounters(response))
    dispatch(setFriendsTotalCounters(response))
}

export const postCounter = (data) => async (dispatch) => {

    let response = await countersAPI.postCounter(data)
    dispatch(addCounter(response.newCounter, response.pixelCode))
    dispatch(reset('addcounter-form'))
}

export const getCurrentCounter = (counterId) => (dispatch) =>{
    Promise.all([countersAPI.getCounterById(counterId),
        usersAPI.getCounterUsers(counterId, 1, store.getState().countersPage.pageSize)])
            .then(response =>{
        dispatch(setCurrentCounter(response[0], response[1]) )
    })
}

export const getMoreUsers = (page) => async (dispatch) =>{

    let response = await usersAPI.getCounterUsers(store.getState().countersPage.currentCounter.counterInfo._id, page, store.getState().countersPage.pageSize)
    dispatch(addCounterUsers(response.usersPage))
}


export default countersReducer