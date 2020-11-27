import React from "react";
import Dayusers from "./dayusers";
import {connect} from "react-redux";
import {setUsersActionCreator} from '../../../../redux/summary-reducer'


let mapStateToProps = (state) =>{
    return{
        dayusers: state.summaryPage.dayusersData,

    }
}
let mapDispatchToProps =(dispatch) =>{
    return{
     setUsers :(usersData) => {
         dispatch(setUsersActionCreator(usersData))
     }

    }
}

const DayusersContainer = connect(mapStateToProps, mapDispatchToProps)(Dayusers)

export default DayusersContainer;