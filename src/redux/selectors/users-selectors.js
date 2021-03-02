import {createSelector} from "reselect";
import mongoDate from "../../utils/mongoDate";

export const getUserInfoFromState = (state) =>{
    return state.users.userInfo
}

export const getSessions = (state) =>{
    return state.users.userInfo.sessions
}

export const getUserSessionsList = createSelector(getSessions, (sessions) => {
    let getSessions = (sessions) => {
        let sessionsArray = []
        for (let i = 0; sessions.length  > i ; i = i + 2) {
            let nextIndex = i + 1
            let session = ''

            const makeSessionPare = (enterDate, enterTime, awayDate, awayTime) =>{
                return  {
                    entryTime : {
                        date: enterDate,
                        time: enterTime
                    },
                    awayTime : {
                        date: awayDate,
                        time: awayTime
                    }
                }
            }

            if(sessions[i] && sessions[nextIndex]){
                if(Object.keys(sessions[i])[0] === "entryTime" && Object.keys(sessions[nextIndex])[0] === "goAwayTime"){
                    session = makeSessionPare(mongoDate(sessions[i].entryTime).date, mongoDate(sessions[i].entryTime).time,
                            mongoDate(sessions[nextIndex].goAwayTime).date, mongoDate(sessions[nextIndex].goAwayTime).time
                    )
                }
                else if (Object.keys(sessions[i])[0] === "entryTime" && Object.keys(sessions[nextIndex])[0] === "entryTime"){
                    session = makeSessionPare(mongoDate(sessions[i].entryTime).date, mongoDate(sessions[i].entryTime).time,
                            undefined, undefined)
                    i--
                }
            }
            else if (sessions[i]){
                session = makeSessionPare(mongoDate(sessions[i].entryTime).date, mongoDate(sessions[i].entryTime).time,
                        undefined, undefined)
            }
            else {
                session = makeSessionPare(undefined, undefined, undefined, undefined)
            }

            sessionsArray.push(session)
        }


        return sessionsArray

    }
       if(sessions !== undefined){
           return getSessions(sessions)
       }
       else{
           return ''
       }



})
