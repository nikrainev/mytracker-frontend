import React from "react";

import {postCounter} from "../../../../../redux/counters-reducer";
import Addcounterblock from "./addcounterblock";

import WithAuthRedirect from "../../../../../hoc/withAuthRedirect";
import {connect} from "react-redux";
import {compose} from "redux";


class AddcounterblockContainer extends React.Component {
    postCounter = (name, domen) =>{
        this.props.postCounter({name: name, domen: domen})
    }

    render (){
        return <Addcounterblock postCounter={this.postCounter}

        />
    }

}

let mapStateToProps = (state) =>{
    return{

    }
}



export default compose(connect(mapStateToProps, {postCounter}), WithAuthRedirect)(AddcounterblockContainer);