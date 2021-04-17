import React, {useEffect, useState} from 'react';
import NewFriendsContainer from "./newFriends/newFriendsContainer";
import UsersListContainer from "./usersList/usersListContainer";
import {connect} from "react-redux";
import {FriendsPageLoader} from "../../common/loadingschemes/loadingSchemes";
import WithAuthRedirect from "../../../hoc/withAuthRedirect";
import {compose} from "redux";
import {useDocTitle} from "../../../utils/customHooks";

import {clearFriendsPage, getFriendsPage} from "../../../redux/profile-reducer";
import {getTotalProfiles} from "../../../redux/selectors/profileselectors";


const FriendsPage = (props) => {
    const [title, setTitle] = useDocTitle('Друзья')
    const [pageState, setPageState] = useState('fetching')

    useEffect(()=>{
        return( ()=>{
            props.clearFriendsPage()
        })
    },[])


    useEffect(()=>{
        if(props.isInitialized){
            props.getFriendsPage()
        }
        else{
            setPageState('fetching')
        }

    }, [props.isInitialized])


    useEffect(()=>{
        if(props.totalProfiles !== undefined && props.totalProfiles !== '' && pageState === 'fetching'){
            setPageState("main")
        }

    },[props.totalProfiles])




    return  (
            <>
                {pageState === 'fetching' ? <FriendsPageLoader />
                    : <div className="container">
                    <div className="h1-block">
                    <h1 className="h1">Друзья</h1>
                    </div>
                    <p>Добавляйте другие аккаунты в друзья, для совместной работы.</p>
                    <NewFriendsContainer />
                    <UsersListContainer />
                    </div>}
            </>

    );
}

let mapStateToProps = (state) => {
    return{
        totalProfiles: getTotalProfiles(state),
    }
}


export default compose(connect(mapStateToProps, {clearFriendsPage, getFriendsPage}), WithAuthRedirect)(FriendsPage)