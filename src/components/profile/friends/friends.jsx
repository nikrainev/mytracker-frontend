import React from 'react';
import s from './friends.module.scss';
import NewFriendsContainer from "./newFriends/newFriendsContainer";
import UsersListContainer from "./usersList/usersListContainer";
import {connect} from "react-redux";
import {FriendsPageLoader} from "../../common/loadingSchemes";
import {NavLink} from "react-router-dom";
import addIcon from "../../../assets/icons/h1-block/add.svg";
const FriendsPage = (props) => {
    return  (
            <>
                {props.isInitialized ?


                        <div className="container">
                            <div className="h1-block">
                            <h1 className="h1">Друзья</h1>
                        </div>
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