import React, {useEffect, useState} from 'react';
import NewFriendsContainer from "./newFriends/newFriendsContainer";
import UsersListContainer from "./usersList/usersListContainer";
import {connect} from "react-redux";
import {FriendsPageLoader} from "../../common/loadingschemes/loadingSchemes";
import WithAuthRedirect from "../../../hoc/withAuthRedirect";
import {compose} from "redux";
import {useDocTitle, usePagePreloader} from "../../../utils/customHooks";

import {clearFriendsPage, getFriendsPage} from "../../../redux/profile-reducer";
import {getTotalProfiles} from "../../../redux/selectors/profileselectors";


const FriendsPage = (props) => {
    const [title, setTitle] = useDocTitle('Друзья')
    const [pageState] = usePagePreloader(props.isInitialized, props.totalProfiles, props.getFriendsPage, props.clearFriendsPage)

    return  (
            <>
                {pageState === 'fetching' ? <FriendsPageLoader />
                    : <div className="container">
                    <div className="h1-block">
                    <h1 className="h1">Друзья</h1>
                    </div>
                    <p>Добавляйте другие аккаунты в друзья, для совместной работы.</p>
                    <NewFriendsContainer />
                    <UsersListContainer />
                    </div>}
            </>

    );
}

let mapStateToProps = (state) => {
    return{
        totalProfiles: getTotalProfiles(state),
    }
}


export default compose(connect(mapStateToProps, {clearFriendsPage, getFriendsPage}), WithAuthRedirect)(FriendsPage)