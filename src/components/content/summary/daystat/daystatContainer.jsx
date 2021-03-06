import React from "react";
import Daystat from "./daystat";
import {connect} from "react-redux";



const DaystatContainer = (props) => {
    return <Daystat graphicData={props.graphicInfo} summaryInfo={props.summaryInfo}/>
}


let mapStateToProps = (state) =>{
    return{

    }
}




export default connect(mapStateToProps)(DaystatContainer)