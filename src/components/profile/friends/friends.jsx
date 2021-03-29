import React from 'react';
import NewFriendsContainer from "./newFriends/newFriendsContainer";
import UsersListContainer from "./usersList/usersListContainer";
import {connect} from "react-redux";
import {FriendsPageLoader} from "../../common/loadingschemes/loadingSchemes";
import WithAuthRedirect from "../../../hoc/withAuthRedirect";
import {compose} from "redux";

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
export default compose(connect(mapStateToProps), WithAuthRedirect)(FriendsPage)