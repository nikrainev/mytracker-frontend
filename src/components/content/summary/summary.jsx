import React, {useEffect, useState} from 'react';
import DayusersContainer from "./dayusers/dayusersContainer";
import DaystatContainer from "./daystat/daystatContainer";
import {connect} from "react-redux";
import {getSummaryData, clearSummaryData} from "../../../redux/summary-reducer";
import {getSummaryInfo} from "../../../redux/selectors/summary-selectors";
import WithAuthRedirect from "../../../hoc/withAuthRedirect";
import {compose} from "redux";
import {SummaryPageLoader} from "../../common/loadingschemes/loadingSchemes";
import {useDocTitle, usePagePreloader} from "../../../utils/customHooks";


const SummaryContainer = (props) =>{
    const [title, setTitle] = useDocTitle('Сводка')
    const [pageState] = usePagePreloader(props.isInitialized, props.summaryInfo.dayClicks, props.getSummaryData, props.clearSummaryData)

    return (
            <>

                {pageState === 'fetching' ?<SummaryPageLoader /> :
                        <>
                            <div className="container h1-block"><h1 className="h1">Статистика за сутки</h1></div>
                            <DaystatContainer  />
                            <DayusersContainer />
                        </> }
            </>
    );
}

let mapStateToProps = (state) => {
    return{
        summaryInfo: getSummaryInfo(state)
    }
}
export default compose(connect(mapStateToProps,{getSummaryData, clearSummaryData}),WithAuthRedirect)(SummaryContainer, SummaryPageLoader);