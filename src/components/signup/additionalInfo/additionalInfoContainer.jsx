import React from "react";
import {connect} from "react-redux";
import AdditionalInfo from "./additionalInfo"
import {SendAdditionalInfo} from '../../../redux/auth-reducer'
import WithSignUpStagePreloader from "../../../hoc/withAuthStageRedirect";
import {compose} from "redux";
const AdditionalInfoContainer = (props) =>{
    return(
       <AdditionalInfo isFetching={props.isFetching} email={props.email} sendAdditionalInfo={props.SendAdditionalInfo}/>
    )
}

let mapStateToProps = (state) =>{
    return{
        email: state.auth.email,
        isFetching: state.auth.isFetching
    }
}

export default compose(connect(mapStateToProps, {SendAdditionalInfo}),  WithSignUpStagePreloader)(AdditionalInfoContainer)