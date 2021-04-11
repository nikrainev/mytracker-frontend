import React from 'react';
import {connect} from "react-redux";
import "../App.scss"
import {Redirect} from "react-router-dom";
const mapStateToProps  = (state) =>{
    return {
        stage: state.auth.stage,
        isInitialized: state.app.isInitialized
    }
}


const WithAuthRedirect = (Component) =>{


    let RedirectComponent = (props) =>{
        if(props.isInitialized){
            if(props.stage === 'registered') return <Component {...props}/>
            else if(props.stage === 'confirm email' || props.stage === 'additional_information') return <Redirect to='signup' />
            else return <Redirect to='/login' />
        }
        else{
            return <Component {...props}/>
        }

    }


    return connect(mapStateToProps)(RedirectComponent)

}
export default WithAuthRedirect