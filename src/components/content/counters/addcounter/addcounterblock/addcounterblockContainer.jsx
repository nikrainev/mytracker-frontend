import React from "react";

import {addCounterActionCreator, reloadCounterInputActionCreator} from "../../../../../redux/counters-reducer";
import Addcounterblock from "./addcounterblock";
import {connect} from "react-redux";



let mapStateToProps = (state) =>{
    return{
        counterName: state.countersPage.counterNameInput,
        counterDomen: state.countersPage.counterDomenInput
    }
}
let mapDispatchToProps = (dispatch) =>{
    return{
        reloadInput:  (value,inputName) =>{
            dispatch(reloadCounterInputActionCreator(value,inputName))

        },
        addCounter: ()=>{
            dispatch(addCounterActionCreator())

        }


    }
}

const AddcounterblockContainer = connect(mapStateToProps, mapDispatchToProps)(Addcounterblock)

export default AddcounterblockContainer;