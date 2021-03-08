import React, {useEffect, useState} from 'react';
import DayusersContainer from "./dayusers/dayusersContainer";
import DaystatContainer from "./daystat/daystatContainer";
import {connect} from "react-redux";
import {getSummaryData, clearSummaryData} from "../../../redux/summary-reducer";
import {getSummaryInfo, getSummaryGraphic, getSummaryUsers} from "../../../redux/selectors/summary-selectors";
import styled from 'styled-components'






const SummaryContainer = (props) =>{


    const [pageState, setPageState] = useState('fetching')
    useEffect(()=>{
        props.getSummaryData()
        return( ()=>{
            props.clearSummaryData()
        })
    },[])

    useEffect(()=>{
        if(props.summaryUsers.length !== 0){
            setPageState("main")
        }


    },[props.summaryUsers])

    return (
            <>

                {pageState === 'fetching' ?<p>Загрузка</p> :<><DaystatContainer summaryInfo={props.summaryInfo}
                                                                                graphicInfo={props.graphicInfo} />
                                                                                <DayusersContainer summaryUsers={props.summaryUsers} /></> }
            </>
    );
}

let mapStateToProps = (state) => {
    return{
        summaryInfo: getSummaryInfo(state),
        graphicInfo: getSummaryGraphic(state),
        summaryUsers: getSummaryUsers(state)
    }
}
export default connect(mapStateToProps,{getSummaryData, clearSummaryData})(SummaryContainer);