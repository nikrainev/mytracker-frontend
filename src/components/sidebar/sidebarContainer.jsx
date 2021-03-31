import React, {useEffect, useState} from "react";
import Sidebar from "./sidebar";
import {connect} from "react-redux";
import {useCookies} from "react-cookie";
import {deleteProfileData, setProfileData, setToken} from "../../redux/auth-reducer";
import {toggleMenuState} from '../../redux/app-reducer'
import {getMenuState} from "../../redux/selectors/app-selectors";
import {useLocation} from "react-router-dom";
import {getAvatar} from "../../redux/profile-reducer";
import {getAvatarSelector} from "../../redux/selectors/profileselectors";

let SideBarContainer = (props) => {
   const [cookies, setCookie, removeCookie] = useCookies(["email", "password"]);
   const [sideBarVisibility, setSideBarVisibility ] = useState('visible')
   const [profileBlockState, setProfileBlockState] = useState('fetching')
   const pageName = useLocation()
   useEffect(()=>{
       if(pageName.pathname === '/login' || pageName.pathname === '/signup'){
           setSideBarVisibility('hidden')
       }
       else{
           setSideBarVisibility('')
       }
   },[pageName.pathname, sideBarVisibility])


    useEffect(()=>{
        if(props.isInitialized){
            props.getAvatar()
        }
        else{
            setProfileBlockState('fetching')
        }

    }, [ props.isInitialized])


    useEffect(()=>{

        if((props.avatar && props.avatar.length !== 0) && profileBlockState === 'fetching'){
            setProfileBlockState("main")
        }

    },[props.avatar])






    useEffect(()=>{
       props.getAvatar()
   },[])
   let logOut = () =>{
       removeCookie("email");
       removeCookie("password")
        props.deleteProfileData()

    }

    return  sideBarVisibility === 'hidden' ? <></> : <Sidebar isAuth={props.isAuth}
                       profileLogin={props.profileLogin}
                       logout={logOut}
                       menuState={props.menuState}
                       toggleMenuState={props.toggleMenuState}
                       avatar={props.avatar}
                       fetching={profileBlockState}
    />



}

let mapStateToProps = (state) =>{
    return{
        token: state.auth.token,
        isAuth: state.auth.isAuth,
        profileLogin: state.auth.login,
        menuState: getMenuState(state),
        isInitialized: state.app.isInitialized,
        avatar:  getAvatarSelector(state)
    }
}


export default connect(mapStateToProps, {setToken,setProfileData, deleteProfileData, toggleMenuState, getAvatar})(SideBarContainer)