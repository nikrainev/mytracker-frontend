import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import UserPage from "./userPage";
import {clearUserInfo, getUserInfo} from "../../redux/users-reducer";
import {connect} from "react-redux";
import {getUserInfoFromState, getUserSessionsList} from '../../redux/selectors/users-selectors'
import WithAuthRedirect from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {UserPageLoader} from "../common/loadingschemes/loadingSchemes";
import {useDocTitle, usePagePreloader} from "../../utils/customHooks";

const UserPageContainer = (props) =>{
    let {tysId} = useParams()

    const [pageState] = usePagePreloader(props.isInitialized, props.userInfo, ()=>{props.getUserInfo(tysId)}, props.clearUserInfo)
    const [title, setTitle] = useDocTitle('Пользователь')



     useEffect(()=>{
       if(pageState === 'main'){
           setTitle('Пользователь ' + props.userInfo.data.ipInfo.city)
       }

    },[pageState])

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