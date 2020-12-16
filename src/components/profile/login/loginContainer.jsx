import React from 'react';
import s from './login.module.scss';
import {NavLink} from "react-router-dom";
import LoginBlock from "./loginform";
import axios from 'axios'
import {connect} from "react-redux";
import {setProfileData, reloadInput, setToken, setInputState,
    toggleIsFetching, setLoginFormState, toggleLoginButtonDisability} from "../../../redux/auth-reducer";


class LoginContainer extends React.Component {


    sendLoginRequest = () =>{
        this.props.toggleIsFetching(true)
        axios.post('http://nikrainev.ru:3000/auth/login',{"email":this.props.emailInput, "password":this.props.passwordInput})
                .then(response => {

                    this.props.setToken(response.data.token)
                    this.props.toggleIsFetching(false)
                    if(response.data.message == "Auth successful"){
                        document.cookie = 'token='+response.data.token+'; max-age=360000'
                        document.cookie = 'email='+this.props.emailInput+'; max-age=360000'
                        document.cookie = 'password='+this.props.passwordInput+'; max-age=360000'
                    }
                })
                .catch(error => {
                    this.props.toggleIsFetching(false)
                    this.props.setLoginFormState('false_alert')
                    if(error.response.data.message === "Auth failed"){

                    }

                })


    }
    reloadEmailInput = (value) =>{
        this.props.reloadInput('emailInput',value)
    }
    reloadPasswordInput = (value) =>{
        this.props.reloadInput('passwordInput',value)
    }

    setEmailInputState = (value) =>{
        this.props.setInputState('emailInputState',value)
    }
    setPasswordInputState = (value) =>{
        this.props.setInputState('passwordInputState',value)
    }


    render() {
        return <div className="content">
            <LoginBlock emailInput={this.props.emailInput}
                       passwordInput={this.props.passwordInput}
                       emailInputState={this.props.emailInputState}
                       passwordInputState={this.props.passwordInputState}
                       isFetching={this.props.isFetching}
                       loginFormState={this.props.loginFormState}
                       isButtonDisabled={this.props.isLoginButtonDisabled}
                       isAuth={this.props.isAuth}
                       reloadEmailInput={this.reloadEmailInput}
                       reloadPasswordInput={this.reloadPasswordInput}
                       sendLoginRequest={this.sendLoginRequest}
                       setEmailInputState={this.setEmailInputState}
                       setPasswordInputState={this.setPasswordInputState}
                       setLoginFormState={this.props.setLoginFormState}
                       toggleButtonDisability={this.props.toggleLoginButtonDisability}




            />
        </div>
    }
}

let mapStateToProps = (state) =>{
    return{
        emailInput: state.auth.emailInput,
        passwordInput: state.auth.passwordInput,
        isAuth: state.auth.isAuth,
        emailInputState: state.auth.emailInputState,
        passwordInputState: state.auth.passwordInputState,
        isFetching: state.auth.isFetching,
        loginFormState: state.auth.loginFormState,
        isLoginButtonDisabled: state.auth.isLoginButtonDisabled
    }
}

export default LoginContainer = connect(mapStateToProps,
        {setProfileData,reloadInput,setToken,setInputState,
            toggleIsFetching,setLoginFormState, toggleLoginButtonDisability})(LoginContainer)