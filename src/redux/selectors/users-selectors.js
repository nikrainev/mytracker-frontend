import {createSelector} from "reselect";


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

            const makeSessionPare = (enterTime, awayTime) =>{
                return  {
                    entryTime : enterTime,
                    awayTime : awayTime
                }
            }

            if(sessions[i] && sessions[nextIndex]){
                if(Object.keys(sessions[i])[0] === "entryTime" && Object.keys(sessions[nextIndex])[0] === "goAwayTime"){
                    session = makeSessionPare(sessions[i].entryTime, sessions[nextIndex].goAwayTime)
                }
                else if (Object.keys(sessions[i])[0] === "entryTime" && Object.keys(sessions[nextIndex])[0] === "entryTime"){
                    session = makeSessionPare(sessions[i].entryTime, undefined)
                    i--
                }
            }
            else if (sessions[i]){
                session = makeSessionPare(sessions[i].entryTime,  undefined)
            }
            else {
                session = makeSessionPare(undefined, undefined)
            }

            sessionsArray.unshift(session)
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
