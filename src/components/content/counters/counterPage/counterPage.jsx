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
import {useDocTitle} from "../../../../utils/customHooks";

const CounterPage = (props) =>{
    let {counterId} = useParams()
    const [pageState, setPageState] = useState('fetching')
    const [title, setTitle] = useDocTitle('Счётчик')

    useEffect(()=>{
        return () =>{
            props.clearCurrentCounter()
        }
    },[])


    useEffect(()=>{
        if(props.isInitialized){
            props.getCurrentCounter(counterId)
        }
        else{
            setPageState('fetching')
        }

    }, [props.isInitialized])


    useEffect(()=>{

        if((props.counterInfo && props.counterInfo.length !== 0) && pageState === 'fetching'){
            setTitle('Счётчик '+props.counterInfo.name)
            setPageState("main")
        }

    },[props.counterInfo])





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
       isInitialized: state.app.isInitialized,
    }
}
export default compose(connect(mapStateToProps,{getCurrentCounter, clearCurrentCounter}), WithAuthRedirect)(CounterPage);