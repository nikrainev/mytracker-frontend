import React from "react";
import {connect} from "react-redux";
import Registration from "./registration"
const RegistrationContainer = () =>{
    return(
            <Registration />
    )
}

let mapStateToProps = (state) =>{
    return{

    }
}

export default connect(mapStateToProps, {})(RegistrationContainer)