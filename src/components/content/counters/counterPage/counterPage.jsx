import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import CounterInfoContainer from "./counterInfo/counterInfoContainer";
import UsersListContainer from "./usersList/usersListContainer";
import {getCurrentCounter} from "../../../../redux/counters-reducer";
import {connect} from "react-redux";
import {getCurrentCounterUsers, getCurrentCounterInfo} from "../../../../redux/selectors/counters-selectors";

const CounterPage = (props) =>{
    let {counterId} = useParams()


    const [pageState, setPageState] = useState('fetching')
    useEffect(()=>{
        props.getCurrentCounter(counterId)
    },[])

    return (
            <div className="content">
                <CounterInfoContainer counterInfo={props.counterInfo}
                                      counterId={counterId} />
                <UsersListContainer counterUsers={props.counterUsers}
                                    counterId={counterId}/>
            </div>

    );
}

let mapStateToProps = (state) => {
    return{
       counterInfo: getCurrentCounterInfo(state),
       counterUsers: getCurrentCounterUsers(state)
    }
}
export default connect(mapStateToProps,{getCurrentCounter})(CounterPage);