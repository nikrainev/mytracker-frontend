import React from 'react';
import s from './friends.module.scss';
import NewFriendsContainer from "./newFriends/newFriendsContainer";
import YourFriendsContainer from "./yourFriends/yourFriendsContainer";
import UsersListContainer from "./usersList/usersListContainer";
const FriendsPage = (props) => {
    return  (
            <div className="content">
                <div className="container">
                    <p>Добавляйте другие аккаунты в друзья, для совместной работы.</p>
                    <NewFriendsContainer />
                    <YourFriendsContainer />
                    <UsersListContainer />
                </div>
            </div>


    );
}
export default FriendsPage;