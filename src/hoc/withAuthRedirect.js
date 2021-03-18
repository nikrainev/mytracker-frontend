import React from 'react';
import {connect} from "react-redux";
import "../App.scss"
import {Redirect} from "react-router-dom";
const mapStateToProps  = (state) =>{
    return {
        isAuth: state.auth.isAuth
    }
}






const WithAuthRedirect = (Component) =>{


    let RedirectComponent = (props) =>{
        if(props.isAuth) return <Component {...props}/>
        else return <Redirect to='/login' />
    }

    let ConnectedWithAuthRedirect = connect(mapStateToProps)(RedirectComponent)
    return ConnectedWithAuthRedirect

}
export default WithAuthRedirect