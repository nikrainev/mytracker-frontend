import React from "react";

import {addCounter, reloadCounterInput} from "../../../../../redux/counters-reducer";
import Addcounterblock from "./addcounterblock";
import {connect} from "react-redux";



let mapStateToProps = (state) =>{
    return{
        counterName: state.countersPage.counterNameInput,
        counterDomen: state.countersPage.counterDomenInput
    }
}


const AddcounterblockContainer = connect(mapStateToProps, {reloadCounterInput, addCounter})(Addcounterblock)

export default AddcounterblockContainer;