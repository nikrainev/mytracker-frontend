import React from 'react';
import SignUpBlock from "./signup";
import {connect} from "react-redux";


const SignUpContainer = (props) => {


        return <SignUpBlock regStage={props.regStage} isInitialized={props.isInitialized}/>

}

let mapStateToProps = (state) =>{
    return{
        regStage: state.auth.stage,
        isInitialized: state.app.isInitialized
    }
}

export default  connect(mapStateToProps, {})(SignUpContainer)