import React from 'react';
import YourProfileContainer from "./yourprofile/yourprofileContainer";
import HaveAccess from "./haveaccess/haveaccess";
const ProfileSettings = (props) =>{
    return(
            <div className="content">
               <YourProfileContainer />
               <HaveAccess />
            </div>
    )
}
export default ProfileSettings;