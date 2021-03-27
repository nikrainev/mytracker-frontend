export const getPixelCode = (state) =>{
    return state.countersPage.pixelCode
}

export const getPageSize = (state) =>{
    return state.countersPage.pageSize
}
export const getCurrentCounterInfo = (state) =>{
    return state.countersPage.currentCounter.counterInfo
}
export const getCurrentCounterUsers = (state) =>{
    return state.countersPage.currentCounter.counterUsers
}
export const getTotalUsers = (state) =>{
    return state.countersPage.currentCounter.totalUsers
}


export const getYourCounters = (state) =>{
    return state.countersPage.yourCounters.counterslistData
}

export const getYourTotalCounters = (state) =>{
    return state.countersPage.yourCounters.totalCounters
}

export const getFriendsCounters = (state) =>{
    return state.countersPage.friendsCounters.counterslistData
}

export const getFriendsTotalCounters = (state) =>{
    return state.countersPage.friendsCounters.totalCounters
}