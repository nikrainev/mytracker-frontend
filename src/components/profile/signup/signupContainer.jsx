import React from 'react';
import SignUpBlock from "./signup";
import axios from 'axios'
import {connect} from "react-redux";
import {reloadInput, setSignUpInputDanger} from "../../../redux/auth-reducer";


class SignUpContainer extends React.Component {





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

        />
    }
}

let mapStateToProps = (state) =>{
    return{
        loginInput: state.auth.loginInput,
        emailInput: state.auth.emailInput,
        passwordInput: state.auth.passwordInput,
        repeatPasswordInput: state.auth.repeatPasswordInput,
        loginDanger: state.auth.loginDanger,
        emailDanger: state.auth.emailDanger,
        passwordDanger: state.auth.passwordDanger,
        repeatPasswordDanger: state.auth.repeatPasswordDanger

    }
}

export default SignUpContainer = connect(mapStateToProps, {reloadInput,setSignUpInputDanger})(SignUpContainer)