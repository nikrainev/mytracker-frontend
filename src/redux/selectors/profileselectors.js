export const selectProfilesList = (state) =>{
    return state.profilePage.profilesList
}

export const getTotalProfiles = (state) =>{
    return state.profilePage.totalProfiles
}

export const getPageSize = (state) =>{
    return state.profilePage.pageSize
}