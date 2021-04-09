import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import Registration from "./registration"
import {signUpThunkCreator} from "../../../redux/auth-reducer";

const RegistrationContainer = (props) =>{

    let sendSignUpRequest = (email,login,password) =>{
        props.signUpThunkCreator(email,login,password)
    }

    return(
            <Registration isFetching={props.isFetching}  sendSignUpRequest={sendSignUpRequest} />
    )
}

let mapStateToProps = (state) =>{
    return{
        isFetching: state.auth.isFetching
    }
}

export default connect(mapStateToProps, {signUpThunkCreator})(RegistrationContainer)