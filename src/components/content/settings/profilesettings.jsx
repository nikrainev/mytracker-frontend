import React from 'react';
import YourProfileContainer from "./yourprofile/yourprofileContainer";
import WithAuthRedirect from "../../../hoc/withAuthRedirect";
import YourFriendsContainer from './yourFriends/yourFriendsContainer'
import {useDocTitle} from "../../../utils/customHooks";
const ProfileSettings = () =>{
    const [title, setTitle] = useDocTitle('Настройки')
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