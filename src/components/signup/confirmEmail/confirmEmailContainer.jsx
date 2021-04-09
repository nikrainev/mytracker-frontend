import React from "react";
import {connect} from "react-redux";
import ConfirmEmail from "./confirmEmail"
import {SendEmail} from '../../../redux/auth-reducer'
const ConfirmEmailContainer = (props) =>{


    return(
            <ConfirmEmail email={props.email} sendEmail={props.SendEmail} isFetching={props.isFetching}/>
    )
}

let mapStateToProps = (state) =>{
    return{
        email: state.auth.email,
        isFetching: state.auth.isFetching
    }
}

export default connect(mapStateToProps, {SendEmail})(ConfirmEmailContainer)