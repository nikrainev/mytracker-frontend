import React from 'react';
import YourProfileContainer from "./yourprofile/yourprofileContainer";
import WithAuthRedirect from "../../../hoc/withAuthRedirect";
import YourFriendsContainer from './yourFriends/yourFriendsContainer'
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