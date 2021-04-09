import React from "react";
import {connect} from "react-redux";
import AdditionalInfo from "./additionalInfo"
import {SendAdditionalInfo} from '../../../redux/auth-reducer'
const AdditionalInfoContainer = (props) =>{
    return(
       <AdditionalInfo email={props.email} sendAdditionalInfo={props.SendAdditionalInfo}/>
    )
}

let mapStateToProps = (state) =>{
    return{
        email: state.auth.email
    }
}

export default connect(mapStateToProps, {SendAdditionalInfo})(AdditionalInfoContainer)