import React from 'react';
import YourProfileContainer from "./yourprofile/yourprofileContainer";
import HaveAccess from "./haveaccess/haveaccess";
import WithAuthRedirect from "../../../hoc/withAuthRedirect";
const ProfileSettings = () =>{
    return(
            <div className="content">
               <YourProfileContainer />
               <HaveAccess />
            </div>
    )
};
export default WithAuthRedirect(ProfileSettings);