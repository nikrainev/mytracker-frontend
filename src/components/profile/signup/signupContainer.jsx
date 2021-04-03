import React from 'react';
import SignUpBlock from "./signup";
import {connect} from "react-redux";


const SignUpContainer = (props) => {


        return <SignUpBlock regStage={props.regStage}/>

}

let mapStateToProps = (state) =>{
    return{
        regStage: state.auth.stage
    }
}

export default  connect(mapStateToProps, {})(SignUpContainer)