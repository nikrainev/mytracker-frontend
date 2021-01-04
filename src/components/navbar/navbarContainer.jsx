import React from 'react';
import Navbar from "./navbar";
import axios from 'axios'
import {connect} from "react-redux";
import {setToken, setProfileData, deleteProfileData} from "../../redux/auth-reducer";
import {authAPI} from '../../api/api'

class NavbarContainer extends React.Component {

    getCookie = (name) =>{
        let matches = document.cookie.match(new RegExp(
                "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        ));
        return matches ? decodeURIComponent(matches[1]) : undefined;
    }
    logOut = () =>{
        document.cookie = 'token='+this.props.token+'; max-age=-1'
        document.cookie = 'email='+this.props.emailInput+'; max-age=-1'
        document.cookie = 'password='+this.props.passwordInput+'; max-age=-1'
        this.props.deleteProfileData()

    }



    componentDidMount() {
        let getAuth = () =>{
                   authAPI.getAuthInfo().then(response => {
                     this.props.setProfileData(response)
                    })
        }

        if (this.getCookie('email') && this.getCookie('password')){
            authAPI.postLoginInfo(this.getCookie('email'), this.getCookie('password')).then(response => {
                        this.props.setToken(response.token)
                        getAuth()
                    })

        }


    }

    render() {
        return <Navbar isAuth={this.props.isAuth}
                       profileLogin={this.props.profileLogin}
                       logout={this.logOut}
        />
    }
}

let mapStateToProps = (state) =>{
    return{
        token: state.auth.token,
        isAuth: state.auth.isAuth,
        profileLogin: state.auth.login
    }
}


export default NavbarContainer = connect(mapStateToProps, {setToken,setProfileData, deleteProfileData})(NavbarContainer)