import React from 'react';
import s from './navbar.module.scss';
import {NavLink} from "react-router-dom";
import Navbar from "./navbar";
import axios from 'axios'
import {connect} from "react-redux";
import {setToken, setProfileData, deleteProfileData} from "../../redux/auth-reducer";

class NavbarContainer extends React.Component {

    getCookie = (name) =>{
        let matches = document.cookie.match(new RegExp(
                "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        ));
        return matches ? decodeURIComponent(matches[1]) : undefined;
    }


    componentDidMount() {
        let getAuth = () =>{
            axios.get('http://nikrainev.ru:3000/auth/me', {headers:{"Authorization": "Bearer "+ this.props.token}})
                    .then(response => {
                     this.props.setProfileData(response.data)
                    })
        }

        if (this.getCookie('email') && this.getCookie('password')){
            axios.post('http://nikrainev.ru:3000/auth/login',{"email":this.getCookie('email'), "password":this.getCookie('password')})
                    .then(response => {
                        this.props.setToken(response.data.token)

                        getAuth()
                    })

        }


    }

    render() {
        return <Navbar isAuth={this.props.isAuth}
                       profileLogin={this.props.profileLogin}
                       logout={this.props.deleteProfileData}
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