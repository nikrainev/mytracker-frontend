import React from "react";
import Daystat from "./daystat";
import {connect} from "react-redux";



let mapStateToProps = (state) =>{
    return{
        graphicData: state.summaryPage.graphicData

    }
}
let mapDispatchToProps =(dispatch) =>{
    return{


    }
}

const DaystatContainer = connect(mapStateToProps, mapDispatchToProps())(Daystat)

export default DaystatContainer;