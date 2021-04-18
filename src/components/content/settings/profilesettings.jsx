import React from 'react';
import YourProfileContainer from "./yourprofile/yourprofileContainer";
import WithAuthRedirect from "../../../hoc/withAuthRedirect";
import YourFriendsContainer from './yourFriends/yourFriendsContainer'
import {useDocTitle, usePagePreloader} from "../../../utils/customHooks";
import {connect} from "react-redux";
import {compose} from "redux";
import {getSettingsPage} from "../../../redux/profile-reducer";

const ProfileSettings = (props) =>{
    const [title, setTitle] = useDocTitle('Настройки')
    const [pageState] = usePagePreloader(props.isInitialized, props.totalFriends, props.getSettingsPage, ()=>{})
    return(

            <>
                {pageState === 'fetching' ? <p>Загрузка</p> :
                        <>
                            <div className="container h1-block">
                                <h1 className="h1">Настройки</h1>
                            </div>
                            <YourProfileContainer />
                            <YourFriendsContainer />
                        </>
                }
            </>
    )
}


let mapStateToProps = (state) => {
    return{
        totalFriends: state.profilePage.totalFriends
    }
}

export default compose(connect(mapStateToProps, {getSettingsPage}), WithAuthRedirect)(ProfileSettings);