import React from "react";
import Sidebar from "./sidebar";
import {connect} from "react-redux";
import {useCookies} from "react-cookie";
import {deleteProfileData, setProfileData, setToken} from "../../redux/auth-reducer";
import {toggleMenuState} from '../../redux/app-reducer'
import {getMenuState} from "../../redux/selectors/app-selectors";


let SideBarContainer = (props) => {
   const [cookies, setCookie, removeCookie] = useCookies(["email", "password"]);

   let logOut = () =>{
       removeCookie("email");
       removeCookie("password")
        props.deleteProfileData()

    }
        return <Sidebar isAuth={props.isAuth}
                       profileLogin={props.profileLogin}
                       logout={logOut}
                       menuState={props.menuState}
                       toggleMenuState={props.toggleMenuState}
        />

}

let mapStateToProps = (state) =>{
    return{
        token: state.auth.token,
        isAuth: state.auth.isAuth,
        profileLogin: state.auth.login,
        menuState: getMenuState(state)
    }
}


export default connect(mapStateToProps, {setToken,setProfileData, deleteProfileData, toggleMenuState})(SideBarContainer)