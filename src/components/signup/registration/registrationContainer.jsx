import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import Registration from "./registration"
import {signUpThunkCreator} from "../../../redux/auth-reducer";
import WithSignUpStagePreloader from "../../../hoc/withAuthStageRedirect";
import {compose} from "redux";
import {useDocTitle} from "../../../utils/customHooks";

const RegistrationContainer = (props) =>{
    const [title, setTitle] = useDocTitle('Регистрация')

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

export default compose(connect(mapStateToProps, {signUpThunkCreator}), WithSignUpStagePreloader)(RegistrationContainer)