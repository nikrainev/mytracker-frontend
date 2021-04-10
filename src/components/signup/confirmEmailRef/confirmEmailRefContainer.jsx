import React, {useEffect} from "react";
import {useParams} from "react-router-dom";
import {connect} from "react-redux";
import ConfirmEmailRef from "./confirmEmailRef"
import {ConfirmEmail} from "../../../redux/auth-reducer";
import {useDocTitle} from "../../../utils/customHooks";
const ConfirmEmailContainerRef = (props) =>{
    let {confirmToken} = useParams()
    const [title, setTitle] = useDocTitle('Подтверждение почты')
    useEffect(()=>{
        props.ConfirmEmail(confirmToken)
    }, [])

    return(
            <ConfirmEmailRef {...props} />
    )
}

let mapStateToProps = (state) =>{
    return{
        confirmResult: state.auth.confirmEmailResult,
        isAuth: state.auth.isAuth,
        isInitialized: state.app.isInitialized

    }
}

export default connect(mapStateToProps, {ConfirmEmail})(ConfirmEmailContainerRef)