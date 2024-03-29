import React from 'react';
import s2 from '../../friends/friends.module.scss';
import s from './yourFriends.module.scss'

import {LoadMore} from "../../../common/loadMore";
import friendIcon from '../../../../assets/icons/users.svg'
import ProfileLine from "../../../profile/profileLine/profileLine";
import {Button} from "../../../common/formControls";
import loadingIcon from "../../../../assets/icons/loading.svg";

const LoadingProfile = () =>{
    return <div className={s2.loading_profile}> </div>
}

const NoFriends = () =>{
    return <div className={s.noFriends}>
        <img src={friendIcon} alt=""/>
        <p>У вас ещё нет друзей</p>
    </div>
}

const YourFriends = (props) => {
    let friendsList = []
    let deleteFriend = (userId, key) =>{
     props.deleteFriend(userId, key)
    }

    let buttonSelector = (userId, buttonId) =>{
        if(props.friends[buttonId].isFetching === false){
            return <Button className={s.button}  onClick={()=>{deleteFriend(userId, buttonId)}}>Удалить из друзей</Button>
        }
        else{
            return <div className={s.fetching}><img src={loadingIcon} alt=""/></div>
        }

    }
    if(props.friends !== "no friends"){
        friendsList = props.friends.map((friend, index)=>
                <ProfileLine _id={friend.userId} {...friend} buttonsComponent={buttonSelector(friend.userId, index)}/>)
    }
    else{
        friendsList = "empty"
    }
    return  (
            <div className={s.yourFriends}>
                <h2>Ваши друзья:</h2>
                <LoadMore pages={friendsList} pageSize={props.pageSize} totalPages={props.totalFriends}
                          pageChanger={props.addToFriendsList} loader={<LoadingProfile />} emptyBlock={<NoFriends />}
                />


            </div>


    );
}
export default YourFriends;