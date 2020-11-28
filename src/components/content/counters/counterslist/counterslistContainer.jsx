import React from "react";
import Counterslist from "./counterslist";
import {connect} from "react-redux";
import {setCountersActionCreator, setCurrentPageActionCreator, setTotalCountersActionCreator} from "../../../../redux/counters-reducer";


let mapStateToProps = (state) =>{
    return{
        countersListData: state.countersPage.counterslistData,
        pageSize: state.countersPage.pageSize,
        totalCounters: state.countersPage.totalCounters,
        currentPage: state.countersPage.currentPage

    }
}
let mapDispatchToProps =(dispatch) =>{
    return{
       setCounters: (countersData) =>{
           dispatch(setCountersActionCreator(countersData))
       },
       setCurrentPage: (currentPage) =>{
           dispatch(setCurrentPageActionCreator(currentPage))
       },
       setTotalCounters: (totalCounters) =>{
           dispatch(setTotalCountersActionCreator(totalCounters))
       }
    }
}

const CounterslistContainer = connect(mapStateToProps, mapDispatchToProps)(Counterslist)

export default CounterslistContainer;