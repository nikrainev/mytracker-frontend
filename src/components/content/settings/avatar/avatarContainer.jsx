import React from 'react';

import Avatar from "./avatar"
import {compose} from "redux";
import {connect} from "react-redux";
import {getSettingsPage, getAvatar, updateAvatar} from "../../../../redux/profile-reducer";
import WithAuthRedirect from "../../../../hoc/withAuthRedirect";
import {getAvatarSelector} from "../../../../redux/selectors/profileselectors";
import {usePagePreloader} from "../../../../utils/customHooks";

const AvatarContainer = (props) =>{
    const [pageState] = usePagePreloader(props.isInitialized, props.avatar, props.getAvatar, ()=>{})

    return(
            <>
            {pageState === 'fetching' ? <p>Загрузка</p> : <Avatar avatar={props.avatar} updateAvatar={props.updateAvatar}/>}
            </>
    )

}


let mapStateToProps = (state) => {
    return{
        avatar: getAvatarSelector(state)
    }
}

export default compose(connect(mapStateToProps, {getSettingsPage, getAvatar, updateAvatar}), WithAuthRedirect)(AvatarContainer);