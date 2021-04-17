import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import CounterInfoContainer from "./counterInfo/counterInfoContainer";
import UsersListContainer from "./usersList/usersListContainer";
import {clearCurrentCounter, getCurrentCounter} from "../../../../redux/counters-reducer";
import {connect} from "react-redux";
import {getCurrentCounterUsers, getCurrentCounterInfo} from "../../../../redux/selectors/counters-selectors";
import WithAuthRedirect from "../../../../hoc/withAuthRedirect";
import {CounterPageLoader} from "../../../../components/common/loadingschemes/loadingSchemes";
import {compose} from "redux";
import {useDocTitle, usePagePreloader} from "../../../../utils/customHooks";

const CounterPage = (props) =>{
    let {counterId} = useParams()

    const [title, setTitle] = useDocTitle('Счётчик')
    const [pageState] = usePagePreloader(props.isInitialized, props.counterInfo, ()=>{props.getCurrentCounter(counterId)},  props.clearCurrentCounter)


    useEffect(()=>{
        if(pageState === 'main'){
            setTitle('Счётчик '+props.counterInfo.name)
        }
    },[pageState])





    return (
            <>
                {pageState === 'fetching' ?<CounterPageLoader /> :<><CounterInfoContainer counterInfo={props.counterInfo}
                    counterId={counterId} />
                    <UsersListContainer counterUsers={props.counterUsers}
                    counterId={counterId}/></> }
            </>
    );
}

let mapStateToProps = (state) => {
    return{
       counterInfo: getCurrentCounterInfo(state),
       counterUsers: getCurrentCounterUsers(state),
    }
}
export default compose(connect(mapStateToProps,{getCurrentCounter, clearCurrentCounter}), WithAuthRedirect)(CounterPage);