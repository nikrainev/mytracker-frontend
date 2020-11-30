let initialState = {
    dayusersData: [],
    pageSize: 5,
    totalUsers: 17,
    currentPage: 1,
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
        case "SET-USERS":{

            if(state.dayusersData.length === 0){
                return{
                    ...state,
                    dayusersData: [...state.dayusersData,  ...action.usersData],
                    currentPage: state.currentPage + 1
                }
            }
            else{
                return {
                    ...state
                }
            }


        }
        case "LOAD-NEW-PAGE":{
            let newCurrentPage = state.currentPage + 1
            return {

                ...state,
                dayusersData: [...state.dayusersData, ...action.usersData],
                currentPage: newCurrentPage

            }

        }
        case "SET-TOTAL-USERS":{
            return {
                ...state,
                totalUsers: action.totalUsers
            }
        }
        default:
            return state

    }

}

export const setUsersActionCreator = (usersData) =>({
    type: "SET-USERS",
    usersData: usersData
})

export const loadNewPageActionCreator = (usersData) =>({
    type: "LOAD-NEW-PAGE",
    usersData: usersData
})

export const setCurrentPageActionCreator = (currentPage) =>({
    type: 'SET-CURRENT-PAGE',
    currentPage: currentPage

})
export const setTotalUsersActionCreator = (totalUsers) =>({
    type: 'SET-TOTAL-USERS',
    totalUsers: totalUsers
})

export default summaryReducer
