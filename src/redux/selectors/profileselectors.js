export const selectProfilesList = (state) =>{
    return state.profilePage.profilesList
}

export const getTotalProfiles = (state) =>{
    return state.profilePage.totalProfiles
}

export const getPageSize = (state) =>{
    return state.profilePage.pageSize
}

export const getProposalsList = (state) =>{
    return state.profilePage.proposals
}

export const getFriends = (state) =>{
    return state.profilePage.friendsList
}

export const getTotalFriends = (state) =>{
    return state.profilePage.totalFriends
}