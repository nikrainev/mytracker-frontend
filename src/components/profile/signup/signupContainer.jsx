import React from 'react';
import SignUpBlock from "./signup";
import {connect} from "react-redux";
import {setSignUpState, signUpThunkCreator} from "../../../redux/auth-reducer";


class SignUpContainer extends React.Component {
    sendSignUpRequest = (email,login,password) =>{
      this.props.signUpThunkCreator(email,login,password)
    }
    render() {
        return <SignUpBlock

                isFetching={this.props.isFetching}
                signUpState={this.props.signUpState}
                profileId={this.props.profileId}
                email={this.props.email}
                login={this.props.login}
                regDate={this.props.regDate}
                sendSignUpRequest={this.sendSignUpRequest}




        />
    }
}

let mapStateToProps = (state) =>{
    return{
        isFetching: state.auth.isFetching,
        signUpState: state.auth.signUpState,
        profileId: state.auth.profileId,
        email: state.auth.email,
        login: state.auth.login,
        regDate: state.auth.regDate

    }
}

export default SignUpContainer = connect(mapStateToProps, {setSignUpState, signUpThunkCreator})(SignUpContainer)