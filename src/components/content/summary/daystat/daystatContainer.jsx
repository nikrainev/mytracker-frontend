import React from "react";
import Daystat from "./daystat";
import {connect} from "react-redux";
import {getSummaryGraphic, getSummaryInfo} from "../../../../redux/selectors/summary-selectors";



const DaystatContainer = (props) => {
    return <Daystat graphicData={props.graphicInfo} summaryInfo={props.summaryInfo}/>
}


let mapStateToProps = (state) =>{
    return{
        summaryInfo: getSummaryInfo(state),
        graphicInfo: getSummaryGraphic(state),
    }
}




export default connect(mapStateToProps)(DaystatContainer)