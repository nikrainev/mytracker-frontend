import React from 'react';
import LoginBlock from "./loginform";
import {connect} from "react-redux";
import {loginThunkCreator} from "../../redux/auth-reducer";
import {useDocTitle} from "../../utils/customHooks";

let LoginContainer = (props) => {
    const [title, setTitle] = useDocTitle('Вход')
    let sendLoginRequest = (email, password) => {
        props.loginThunkCreator(email, password)
    }




        return <LoginBlock
                       isFetching={props.isFetching}
                       isAuth={props.isAuth}
                       sendLoginRequest={sendLoginRequest}
            />


}

let mapStateToProps = (state) =>{
    return{
        isAuth: state.auth.isAuth,
        isFetching: state.auth.isFetching,
    }
}

export default connect(mapStateToProps, {loginThunkCreator})(LoginContainer)