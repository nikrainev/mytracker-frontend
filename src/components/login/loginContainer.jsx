import React from 'react';
import LoginBlock from "./loginform";
import {connect} from "react-redux";
import {loginThunkCreator} from "../../redux/auth-reducer";

class LoginContainer extends React.Component {

    sendLoginRequest = (email, password) => {
        this.props.loginThunkCreator(email, password)
    }



    render() {
        return <LoginBlock
                       isFetching={this.props.isFetching}
                       isAuth={this.props.isAuth}
                       sendLoginRequest={this.sendLoginRequest}
            />

    }
}

let mapStateToProps = (state) =>{
    return{
        isAuth: state.auth.isAuth,
        isFetching: state.auth.isFetching,
    }
}

export default LoginContainer = connect(mapStateToProps,
        {loginThunkCreator})(LoginContainer)