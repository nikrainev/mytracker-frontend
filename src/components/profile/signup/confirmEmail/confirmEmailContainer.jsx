import React from "react";
import {connect} from "react-redux";
import ConfirmEmail from "./confirmEmail"
const ConfirmEmailContainer = () =>{
    return(
            <ConfirmEmail />
    )
}

let mapStateToProps = (state) =>{
    return{

    }
}

export default connect(mapStateToProps, {})(ConfirmEmailContainer)