import React from "react";

import {addCounter, reloadCounterInput} from "../../../../../redux/counters-reducer";
import Addcounterblock from "./addcounterblock";

import WithAuthRedirect from "../../../../../hoc/withAuthRedirect";
import {connect} from "react-redux";
import {compose} from "redux";



let mapStateToProps = (state) =>{
    return{
        counterName: state.countersPage.counterNameInput,
        counterDomen: state.countersPage.counterDomenInput
    }
}



export default compose(connect(mapStateToProps, {reloadCounterInput, addCounter}), WithAuthRedirect)(Addcounterblock);