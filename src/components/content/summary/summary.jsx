import React, {useEffect, useState} from 'react';
import DayusersContainer from "./dayusers/dayusersContainer";
import DaystatContainer from "./daystat/daystatContainer";
import {connect} from "react-redux";
import {getSummaryData, clearSummaryData} from "../../../redux/summary-reducer";
import {getSummaryInfo, getSummaryGraphic, getSummaryUsers} from "../../../redux/selectors/summary-selectors";
import WithAuthRedirect from "../../../hoc/withAuthRedirect";
import {compose} from "redux";
import {SummaryPageLoader} from "../../common/loadingschemes/loadingSchemes";


const SummaryContainer = (props) =>{

    const [pageState, setPageState] = useState('fetching')
    useEffect(()=>{
        return( ()=>{
            props.clearSummaryData()
        })
    },[])

    useEffect(()=>{
        if(props.isInitialized){
            props.getSummaryData()
        }
        else{
            setPageState('fetching')
        }

    }, [ props.isInitialized])


    useEffect(()=>{

        if((props.summaryUsers && props.summaryUsers.length !== 0) && pageState === 'fetching'){
            setPageState("main")
        }

    },[props.summaryUsers])

    return (
            <>

                {pageState === 'fetching' ?<SummaryPageLoader /> :
                        <>
                            <div className="container h1-block"><h1 className="h1">Статистика за сутки</h1></div>
                            <DaystatContainer summaryInfo={props.summaryInfo} graphicInfo={props.graphicInfo} />
                            <DayusersContainer summaryUsers={props.summaryUsers} />
                        </> }
            </>
    );
}

let mapStateToProps = (state) => {
    return{
        summaryInfo: getSummaryInfo(state),
        graphicInfo: getSummaryGraphic(state),
        summaryUsers: getSummaryUsers(state),
        isInitialized: state.app.isInitialized
    }
}
export default compose(connect(mapStateToProps,{getSummaryData, clearSummaryData}),WithAuthRedirect)(SummaryContainer, SummaryPageLoader);