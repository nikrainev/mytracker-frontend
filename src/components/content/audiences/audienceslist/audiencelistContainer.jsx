import React from "react";
import Audienceslist from "./audienceslist";
import {connect} from "react-redux";



let mapStateToProps = (state) =>{
    return{
        audiences: state.audiencePage.audiencelistData

    }
}
let mapDispatchToProps = (dispatch) =>{
    return{
    }
}

const AudiecelistContainer = connect(mapStateToProps, mapDispatchToProps)(Audienceslist)

export default AudiecelistContainer;