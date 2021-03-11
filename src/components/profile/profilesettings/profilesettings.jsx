import React from 'react';
import YourProfileContainer from "./yourprofile/yourprofileContainer";
import HaveAccess from "./haveaccess/haveaccess";
import WithAuthRedirect from "../../../hoc/withAuthRedirect";
import YourFriendsContainer from './yourFriends/yourFriendsContainer'
import {NavLink} from "react-router-dom";
import addIcon from "../../../assets/icons/h1-block/add.svg";
const ProfileSettings = () =>{
    return(
            <>
                <div className="container h1-block">
                    <h1 className="h1">Настройки</h1>
                </div>
               <YourProfileContainer />
               <YourFriendsContainer />
            </>
    )
};
export default WithAuthRedirect(ProfileSettings);