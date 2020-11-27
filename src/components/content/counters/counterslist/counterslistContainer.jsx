import React from "react";
import Counterslist from "./counterslist";
import {connect} from "react-redux";
import {setCountersActionCreator} from "../../../../redux/counters-reducer";


let mapStateToProps = (state) =>{
    return{
        countersListData: state.countersPage.counterslistData,
        pageSize: state.countersPage.pageSize,
        totalCounters: state.countersPage.totalCounters

    }
}
let mapDispatchToProps =(dispatch) =>{
    return{
       setCounters: (countersData) =>{
           dispatch(setCountersActionCreator(countersData))
       }
    }
}

const CounterslistContainer = connect(mapStateToProps, mapDispatchToProps)(Counterslist)

export default CounterslistContainer;