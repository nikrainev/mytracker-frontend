import React from 'react';
import SignUpBlock from "./signup";
import {connect} from "react-redux";
import {reloadInput, setSignUpInputDanger, setPasswordStrength, toggleSignUpButtonDisability, setSignUpState, signUpThunkCreator} from "../../../redux/auth-reducer";
import LoginBlock from "../login/loginform";

class SignUpContainer extends React.Component {
    reloadLoginInput = (value) =>{

      this.props.reloadInput('loginInput',value)
    }

    reloadEmailInput = (value) =>{
        this.props.reloadInput('emailInput',value)
    }

    reloadPasswordInput = (value) =>{
        this.props.reloadInput('passwordInput',value)
    }
    reloadRepeatPasswordInput = (value) =>{
        this.props.reloadInput('repeatPasswordInput',value)
    }

    setLoginInputDanger = (value) =>{
        this.props.setSignUpInputDanger('loginDanger',value)
    }

    setEmailInputDanger = (value) =>{
        this.props.setSignUpInputDanger('emailDanger',value)
    }

    setPasswordInputDanger = (value) =>{
        this.props.setSignUpInputDanger('passwordDanger',value)
    }
    setRepeatPasswordInputDanger = (value) =>{
        this.props.setSignUpInputDanger('repeatPasswordDanger',value)
    }

    sendSignUpRequest = (email,login,password) =>{
      this.props.signUpThunkCreator(email,login,password)
    }




    render() {
        return <SignUpBlock
                loginInput={this.props.loginInput}
                emailInput={this.props.emailInput}
                passwordInput={this.props.passwordInput}
                repeatPasswordInput={this.props.repeatPasswordInput}
                loginDanger={this.props.loginDanger}
                emailDanger={this.props.emailDanger}
                passwordDanger={this.props.passwordDanger}
                repeatPasswordDanger={this.props.repeatPasswordDanger}
                passwordStrength={this.props.passwordStrength}
                isSignUpButtonDisabled={this.props.isSignUpButtonDisabled}
                isFetching={this.props.isFetching}
                signUpState={this.props.signUpState}
                profileId={this.props.profileId}
                email={this.props.email}
                login={this.props.login}
                regDate={this.props.regDate}
                reloadLoginInput={this.reloadLoginInput}
                reloadEmailInput={this.reloadEmailInput}
                reloadPasswordInput={this.reloadPasswordInput}
                reloadRepeatPasswordInput={this.reloadRepeatPasswordInput}
                setLoginInputDanger={this.setLoginInputDanger}
                setEmailInputDanger={this.setEmailInputDanger}
                setPasswordInputDanger={this.setPasswordInputDanger}
                setRepeatPasswordInputDanger={this.setRepeatPasswordInputDanger}
                setPasswordStrength={this.props.setPasswordStrength}
                toggleSignUpButtonDisability={this.props.toggleSignUpButtonDisability}
                sendSignUpRequest={this.sendSignUpRequest}




        />
    }
}

let mapStateToProps = (state) =>{
    return{
        loginInput: state.auth.loginInput,
        emailInput: state.auth.emailInput,
        passwordInput: state.auth.passwordInput,
        repeatPasswordInput: state.auth.repeatPasswordInput,
        loginDanger: state.auth.signUpInputsDangers.loginDanger,
        emailDanger: state.auth.signUpInputsDangers.emailDanger,
        passwordDanger: state.auth.signUpInputsDangers.passwordDanger,
        repeatPasswordDanger: state.auth.signUpInputsDangers.repeatPasswordDanger,
        passwordStrength: state.auth.passwordStrength,
        isSignUpButtonDisabled: state.auth.isSignUpButtonDisabled,
        isFetching: state.auth.isFetching,
        signUpState: state.auth.signUpState,
        profileId: state.auth.profileId,
        email: state.auth.email,
        login: state.auth.login,
        regDate: state.auth.regDate

    }
}

export default SignUpContainer = connect(mapStateToProps, {reloadInput,setSignUpInputDanger, setPasswordStrength,
    toggleSignUpButtonDisability, setSignUpState, signUpThunkCreator})(SignUpContainer)