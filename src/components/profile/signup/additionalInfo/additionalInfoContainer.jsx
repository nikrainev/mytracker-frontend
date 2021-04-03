import React from "react";
import {connect} from "react-redux";
import AdditionalInfo from "./additionalInfo"
const AdditionalInfoContainer = () =>{
    return(
       <AdditionalInfo />
    )
}

let mapStateToProps = (state) =>{
    return{

    }
}

export default connect(mapStateToProps, {})(AdditionalInfoContainer)