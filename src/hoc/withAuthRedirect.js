import React from 'react';
import {connect} from "react-redux";
import "../App.scss"
import {Redirect} from "react-router-dom";
const mapStateToProps  = (state) =>{
    return {
        isAuth: state.auth.isAuth,
        isInitialized: state.app.isInitialized
    }
}


const WithAuthRedirect = (Component) =>{


    let RedirectComponent = (props) =>{
        if(props.isInitialized){
            if(props.isAuth) return <Component {...props}/>
            else return <Redirect to='/login' />
        }
        else{
            return <Component {...props}/>
        }

    }


    return connect(mapStateToProps)(RedirectComponent)

}
export default WithAuthRedirect