export const getPixelCode = (state) =>{
    return state.countersPage.pixelCode
}
export const getCurrentCounterInfo = (state) =>{
    return state.countersPage.currentCounter.counterInfo
}
export const getCurrentCounterUsers = (state) =>{
    return state.countersPage.currentCounter.counterUsers
}

export const getCurrentCounterPageSize = (state) =>{
    return state.countersPage.pageSize
}

export const getTotalUsers = (state) =>{
    return state.countersPage.currentCounter.totalUsers
}