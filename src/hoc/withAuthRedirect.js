import React from 'react';
import {connect} from "react-redux";
import "../App.scss"
import {NavLink, Route, withRouter, Link} from "react-router-dom";
const mapStateToProps  = (state) =>{
    return {
        isAuth: state.auth.isAuth
    }
}

let AccountNotExist = (props) =>{
    return <div className="gotologinblock">

        <h1>Войдите в аккаунт</h1>
        <Link className="control_button" to='/login'>Войти</Link>
    </div>
}




 const WithAuthRedirect = (Component) =>{


    let RedirectComponent = (props) =>{
        if(props.isAuth) return <Component {...props}/>
        else return <AccountNotExist/>
    }

    let ConnectedWithAuthRedirect = connect(mapStateToProps)(RedirectComponent)
    return ConnectedWithAuthRedirect

}
export default WithAuthRedirect