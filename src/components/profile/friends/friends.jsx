import React from 'react';
import s from './friends.module.scss';
import NewFriendsContainer from "./newFriends/newFriendsContainer";
import UsersListContainer from "./usersList/usersListContainer";
import {connect} from "react-redux";
import {FriendsPageLoader} from "../../common/loadingSchemes";
const FriendsPage = (props) => {
    return  (
            <>
                {props.isInitialized ?

                        <div className="container">
                             <p>Добавляйте другие аккаунты в друзья, для совместной работы.</p>
                            <NewFriendsContainer />
                            <UsersListContainer />
                         </div>

                    : <FriendsPageLoader />}
            </>



                    );
}

const mapStateToProps = (state) => {
    return {
        isInitialized: state.app.isInitialized
    }
}
export default connect(mapStateToProps)(FriendsPage)