import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import UserPage from "./userPage";
import {clearUserInfo, getUserInfo} from "../../redux/users-reducer";
import {connect} from "react-redux";
import {getUserInfoFromState, getUserSessionsList} from '../../redux/selectors/users-selectors'

const UserPageContainer = (props) =>{
    let {tysId} = useParams()



    const [pageState, setPageState] = useState('fetching')
    useEffect(()=>{
        props.getUserInfo(tysId)
        return () =>{
            props.clearUserInfo()
        }
    },[])

    useEffect(()=>{
        if(props.userInfo !== ""){
            setPageState("main")
        }
    },[props.userInfo])

    return (
            <>
                {pageState === 'fetching' ?<p>Загрузка</p> :<UserPage userInfo={props.userInfo}
                                                                      userSessions={props.userSessions}
                                                                      tysId={props.tysId}
                /> }
            </>
    );
}

let mapStateToProps = (state) => {
    return{
        userInfo: getUserInfoFromState(state),
        userSessions: getUserSessionsList(state)

    }
}
export default connect(mapStateToProps,{clearUserInfo, getUserInfo})(UserPageContainer);