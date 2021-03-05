import React from 'react';
import s from './profile.module.scss'
const Profile = (props) =>{
    return(

                <div className="container">
                    <p>{props.profileId}</p>
                    <p>{props.email}</p>
                    <p>{props.login}</p>
                    <p>{props.regDate}</p>
                </div>


    )
}
export default Profile;