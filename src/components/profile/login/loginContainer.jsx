import React from 'react';
import s from './login.module.scss';
import {NavLink} from "react-router-dom";
import LoginForm from "./loginform";
import axios from 'axios'
import {connect} from "react-redux";
import {setProfileData, reloadInput, setToken} from "../../../redux/auth-reducer";

class LoginContainer extends React.Component {

    sendLoginRequest = () =>{
        axios.post('http://nikrainev.ru:3000/auth/login',{"email":this.props.emailInput, "password":this.props.passwordInput})
                .then(response => {
                    this.props.setToken(response.data.token)
                    console.log(response.data.token)
                })
    }
    render() {
        return <div className="content">
            <LoginForm emailInput={this.props.emailInput}
                       passwordInput={this.props.passwordInput}
                       reloadInput={this.props.reloadInput}
                       sendLoginRequest={this.sendLoginRequest}
            />
        </div>
    }
}

let mapStateToProps = (state) =>{
    return{
        emailInput: state.auth.emailInput,
        passwordInput: state.auth.passwordInput,
        token: state.auth.token
    }
}

export default LoginContainer = connect(mapStateToProps,{setProfileData,reloadInput,setToken})(LoginContainer)