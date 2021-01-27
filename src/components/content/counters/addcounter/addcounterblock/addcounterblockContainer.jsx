import React from "react";

import {addCounter, reloadCounterInput, postCounter} from "../../../../../redux/counters-reducer";
import Addcounterblock from "./addcounterblock";

import WithAuthRedirect from "../../../../../hoc/withAuthRedirect";
import {connect} from "react-redux";
import {compose} from "redux";


class AddcounterblockContainer extends React.Component {
    postCounter = (name, domen) =>{
        this.props.postCounter({name: name, domen: domen})
    }
    setNameInput = (value) =>{
        this.props.reloadCounterInput(value,'counterNameInput')

    }
    setDomenInput = (value) =>{
        this.props.reloadCounterInput(value,'counterDomenInput')
    }
    render (){
        return <Addcounterblock counterName={this.props.counterName}
                                counterDomen={this.props.counterDomen}
                                postCounter={this.postCounter}
                                setNameInput={this.setNameInput}
                                setDomenInput={this.setDomenInput}
        />
    }

}

let mapStateToProps = (state) =>{
    return{
        counterName: state.countersPage.counterNameInput,
        counterDomen: state.countersPage.counterDomenInput
    }
}



export default compose(connect(mapStateToProps, {reloadCounterInput, addCounter, postCounter}), WithAuthRedirect)(AddcounterblockContainer);