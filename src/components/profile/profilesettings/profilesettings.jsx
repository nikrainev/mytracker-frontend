import React from 'react';
import YourProfileContainer from "./yourprofile/yourprofileContainer";
import HaveAccess from "./haveaccess/haveaccess";
import WithAuthRedirect from "../../../hoc/withAuthRedirect";
import YourFriendsContainer from './yourFriends/yourFriendsContainer'
const ProfileSettings = () =>{
    return(
            <div className="content">
               <YourProfileContainer />
               <YourFriendsContainer />
            </div>
    )
};
export default WithAuthRedirect(ProfileSettings);