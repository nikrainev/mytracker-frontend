import {usersAPI} from "../api/users-api";
import {summaryAPI} from "../api/summary-api";
import store from "./redux-store"
import {getSummaryGraphic} from "./selectors/summary-selectors";

let initialState = {
    summaryInfo:{
       dayUsers: '',
       dayClicks: ''
    },
    summaryUsers: [],
    pageSize: 7,
    totalUsers: '',
    graphicData : []
}

const summaryReducer = (state = initialState,action) =>{
    switch (action.type){

        case 'SET-SUMMARY-USERS':{
            let users = ''
            if(action.summaryUsers.users){
                users = action.summaryUsers.users
            }
            else{
                users = action.summaryUsers.usersPage
            }
            return {
                ...state,
                summaryUsers: users,
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
                totalUsers: '',
                graphicData: [],
                summaryInfo:{
                    dayClicks: '',
                    dayUsers: ''
                }

            }
        }
        case 'SET-SUMMARY-INFO':{
            return {
                ...state,
                summaryInfo:{
                    dayClicks: action.summaryInfo.clicks,
                    dayUsers: action.summaryInfo.users
                }
            }
        }
        case 'SET-GRAPHIC-DATA':{
            return {
                ...state,
                graphicData: action.graphicData
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
    Promise.all([usersAPI.getProfileUsers(1, store.getState().summaryPage.pageSize), summaryAPI.getSummary(), summaryAPI.getSummaryGraphic()]).then(response =>{
        dispatch(setSummaryUsers(response[0]))
        dispatch(setSummaryInfo(response[1]))
        dispatch(setGraphicData(response[2]))
    })
}

export const getMoreUsers = (page) => async (dispatch) =>{
    let response = await usersAPI.getProfileUsers(page, store.getState().summaryPage.pageSize)
    dispatch(addSummaryUsers(response))
}

export default summaryReducer
