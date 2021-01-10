import React from 'react';
import SignUpBlock from "./signup";
import axios from 'axios'
import {connect} from "react-redux";
import {reloadInput, setSignUpInputDanger, setPasswordStrength, toggleSignUpButtonDisability, toggleIsFetching, setProfileData} from "../../../redux/auth-reducer";
import {signUpApi} from '../../../api/api'

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
        this.props.toggleIsFetching(true)
        signUpApi.postSignUpInfo(email,login,password).then(response => {

            this.props.toggleIsFetching(false)
            console.log(response)
            if(response.data.message === 'user created'){
                this.props.setProfileData(response)
            }

        }).catch(error =>{
            if(error.response.data.message === "Mail exists"){
               this.setEmailInputDanger('Данная почта уже зарегистрирована')
            }
            else if(error.response.data.message === "Login exists"){
                this.setLoginInputDanger('Данный логин уже зарегистрирован')
            }
             console.log(error.response)
        })
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
                setProfileData={this.props.setProfileData}


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
        isFetching: state.auth.isFetching

    }
}

export default SignUpContainer = connect(mapStateToProps, {reloadInput,setSignUpInputDanger, setPasswordStrength,
    toggleSignUpButtonDisability, toggleIsFetching, setProfileData})(SignUpContainer)