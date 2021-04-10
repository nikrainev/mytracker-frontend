import React from "react";
import {connect} from "react-redux";
import ConfirmEmail from "./confirmEmail"
import {SendEmail} from '../../../redux/auth-reducer'
import {compose} from "redux";
import WithSignUpStagePreloader from "../../../hoc/withAuthStageRedirect";
import {useDocTitle} from "../../../utils/customHooks";
const ConfirmEmailContainer = (props) =>{
    const [title, setTitle] = useDocTitle('Подтвердиет почту')

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

export default compose(connect(mapStateToProps, {SendEmail}), WithSignUpStagePreloader)(ConfirmEmailContainer)