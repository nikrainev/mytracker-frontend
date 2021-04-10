import React from 'react';
import {connect} from "react-redux";
import "../App.scss"
import s from "../components/signup/signup.module.scss";
import loading from "../assets/icons/loading.svg";

const mapStateToProps  = (state) =>{
    return {
        isInitialized: state.app.isInitialized
    }
}

const FetchingBlock = () =>{
    return(
            <div className={s.fetching_block}>
                <img src={loading} alt=""/>
            </div>
    )
}

const  WithSignUpStagePreloader = (Component) =>{
    let RedirectComponent = (props) =>{
        if(props.isInitialized){
            return <Component {...props}/>
        }
        else{
            return <FetchingBlock />
        }
    }
    return connect(mapStateToProps)(RedirectComponent)

}
export default  WithSignUpStagePreloader