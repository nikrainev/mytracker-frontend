import React from 'react';
import LoginBlock from "./loginform";
import {connect} from "react-redux";
import {setProfileData, reloadInput, setToken, setInputState,
    toggleIsFetching, setLoginFormState, toggleLoginButtonDisability, loginThunkCreator} from "../../../redux/auth-reducer";

class LoginContainer extends React.Component {

    sendLoginRequest = (email, password) => {
        this.props.loginThunkCreator(email, password)
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
            toggleIsFetching,setLoginFormState, toggleLoginButtonDisability, loginThunkCreator})(LoginContainer)