import {usersAPI} from "../api/users-api";
import store from "./redux-store"

let initialState = {
    summaryInfo:{
       totalUsers: 123,
       dayUsers: 12,
       dayClicks: 24
    },
    summaryUsers: [],
    pageSize: 7,
    totalUsers: '',
    graphicData : [
        {value:20, day:"Вчера 11:00 - 12:00"},
        {value:20, day:"Вчера 11:00 - 12:00"},
        {value:30, day:"Вчера 11:00 - 12:00"},
        {value:40, day:"Вчера 11:00 - 12:00"},
        {value:30, day:"Вчера 11:00 - 12:00"},
        {value:30, day:"Вчера 11:00 - 12:00"},
        {value:20, day:"Вчера 11:00 - 12:00"},
        {value:20, day:"Вчера 11:00 - 12:00"},
        {value:30, day:"Вчера 11:00 - 12:00"},
        {value:40, day:"Вчера 11:00 - 12:00"},
        {value:30, day:"Вчера 11:00 - 12:00"},
        {value:30, day:"Вчера 11:00 - 12:00"},
        {value:20, day:"Вчера 11:00 - 12:00"},
        {value:20, day:"Вчера 11:00 - 12:00"},
        {value:30, day:"Вчера 11:00 - 12:00"},
        {value:40, day:"Вчера 11:00 - 12:00"},
        {value:30, day:"Вчера 11:00 - 12:00"},
        {value:30, day:"Вчера 11:00 - 12:00"},
        {value:20, day:"Вчера 11:00 - 12:00"},
        {value:20, day:"Вчера 11:00 - 12:00"},
        {value:30, day:"Вчера 11:00 - 12:00"},
        {value:40, day:"Вчера 11:00 - 12:00"},
        {value:30, day:"Вчера 11:00 - 12:00"},
        {value:30, day:"Вчера 11:00 - 12:00"},
        {value:20, day:"Вчера 11:00 - 12:00"},
        {value:20, day:"Вчера 11:00 - 12:00"},
        {value:30, day:"Вчера 11:00 - 12:00"},
        {value:40, day:"Вчера 11:00 - 12:00"},
        {value:30, day:"Вчера 11:00 - 12:00"},
        {value:30, day:"Вчера 11:00 - 12:00"},
        {value:20, day:"Вчера 11:00 - 12:00"},
        {value:20, day:"Вчера 11:00 - 12:00"},
        {value:30, day:"Вчера 11:00 - 12:00"},
        {value:40, day:"Вчера 11:00 - 12:00"},
        {value:30, day:"Вчера 11:00 - 12:00"},
        {value:30, day:"Вчера 11:00 - 12:00"},
        {value:20, day:"Вчера 11:00 - 12:00"},
        {value:20, day:"Вчера 11:00 - 12:00"},
        {value:30, day:"Вчера 11:00 - 12:00"},
        {value:40, day:"Вчера 11:00 - 12:00"},
        {value:30, day:"Вчера 11:00 - 12:00"},
        {value:30, day:"Вчера 11:00 - 12:00"},
        {value:20, day:"Вчера 11:00 - 12:00"},
        {value:20, day:"Вчера 11:00 - 12:00"},
        {value:30, day:"Вчера 11:00 - 12:00"},
        {value:40, day:"Вчера 11:00 - 12:00"},
        {value:30, day:"Вчера 11:00 - 12:00"},
        {value:30, day:"Вчера 11:00 - 12:00"}

    ]
}

const summaryReducer = (state = initialState,action) =>{
    switch (action.type){

        case 'SET-SUMMARY-USERS':{
            return {
                ...state,
                summaryUsers: action.summaryUsers.usersPage,
                totalUsers: action.summaryUsers.totalDocs
            }
        }
        case 'ADD-SUMMARY-USERS':{
            return {
                ...state,
                summaryUsers: [...state.summaryUsers, ...action.summaryUsers.usersPage],
                totalUsers: action.summaryUsers.totalDocs
            }
        }
        case 'CLEAR-SUMMARY-SELECTOR':{
            return {
                ...state,
                summaryUsers: [],
                totalUsers: ''
            }
        }
        default:
            return state

    }

}

const setSummaryInfo = (summaryInfo) =>({
    type: 'SET-SUMMARY-INFO',
    summaryInfo: summaryInfo
})


const setGraphicData = (graphicData) => ({
    type: 'SET-GRAPHIC-DATA',
    graphicData: graphicData
})



const setSummaryUsers = (summaryUsers) =>({
    type: 'SET-SUMMARY-USERS',
    summaryUsers: summaryUsers
})

const addSummaryUsers = (summaryUsers) =>({
    type: 'ADD-SUMMARY-USERS',
    summaryUsers: summaryUsers
})




export const clearSummaryData = () => ({
    type: 'CLEAR-SUMMARY-SELECTOR'
})

export const getSummaryData = () => (dispatch) =>{
    Promise.all([usersAPI.getProfileUsers(1, store.getState().summaryPage.pageSize)]).then(response =>{
        dispatch(setSummaryUsers(response[0]))
    })
}

export const getMoreUsers = (page) => async (dispatch) =>{
    let response = await usersAPI.getProfileUsers(page, store.getState().summaryPage.pageSize)
    dispatch(addSummaryUsers(response))
}

export default summaryReducer
