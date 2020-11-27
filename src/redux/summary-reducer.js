let initialState = {
    dayusersData : [

    ],
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
            return {
                ...state,
                dayusersData: action.usersData.data.items
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
export default summaryReducer
