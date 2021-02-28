import React, {useEffect, useState} from "react";
import CounterInfo from "./counterInfo";
import {connect} from "react-redux";



const CounterInfoContainer = (props) => {


    return <CounterInfo counterId={props.counterId}/>
}

let mapStateToProps = (state) =>{
    return{

    }
}



export default connect(mapStateToProps, {})(CounterInfoContainer);