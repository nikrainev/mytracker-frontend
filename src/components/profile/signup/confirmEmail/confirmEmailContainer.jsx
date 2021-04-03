import React from "react";
import {connect} from "react-redux";
import ConfirmEmail from "./confirmEmail"
const ConfirmEmailContainer = (props) =>{


    return(
            <ConfirmEmail email={props.email}/>
    )
}

let mapStateToProps = (state) =>{
    return{
        email: state.auth.email
    }
}

export default connect(mapStateToProps, {})(ConfirmEmailContainer)