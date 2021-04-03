import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import UserPage from "./userPage";
import {clearUserInfo, getUserInfo} from "../../redux/users-reducer";
import {connect} from "react-redux";
import {getUserInfoFromState, getUserSessionsList} from '../../redux/selectors/users-selectors'
import WithAuthRedirect from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {UserPageLoader} from "../common/loadingschemes/loadingSchemes";

const UserPageContainer = (props) =>{
    let {tysId} = useParams()



    const [pageState, setPageState] = useState('fetching')
    useEffect(()=>{
        props.getUserInfo(tysId)
        document.title = 'Пользователь'
        return () =>{
            document.title = ''
            props.clearUserInfo()
        }
    },[])

     useEffect(()=>{
        if(props.userInfo !== ""){
            setPageState("main")
            document.title = 'Пользователь ' + props.userInfo.data.ipInfo.city
        }
    },[props.userInfo])

    return (
            <>
                {pageState === 'fetching' ?<UserPageLoader /> :<UserPage userInfo={props.userInfo}
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
export default compose(connect(mapStateToProps,{clearUserInfo, getUserInfo}), WithAuthRedirect)(UserPageContainer);