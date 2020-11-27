import React from 'react';
import Addaudienceblock from "./addaudienceblock";
import {reloadAudienceInputActionCreator,
    reloadAudienceSelectActionCreator,
    addAudienceCounterActionCreator,
    addAudienceActionCreator,
    deleteAudienceCounterActionCreator
} from "../../../../redux/audiences-reducer";
import {connect} from "react-redux";




let mapStateToProps = (state) =>{
    return{
        nameInput: state.audiencePage.audienceNameInput,
        descriptionName: state.audiencePage.audienceDescriptionInput,
        counters: state.audiencePage.audienceCounters,
        countersSelect: state.audiencePage.AudienceCountersSelect,
        selectedCounter: state.audiencePage.audienceCountersSelectSelected
    }
}
let mapDispatchToProps =(dispatch) =>{
    return{
        reloadInput: (value, inputName) => {dispatch(reloadAudienceInputActionCreator(value, inputName))},
        reloadSelect: (counterId) => {dispatch(reloadAudienceSelectActionCreator(counterId))},
        addCounter: () => {dispatch(addAudienceCounterActionCreator())},
        deleteCounter: (counterId) =>{dispatch(deleteAudienceCounterActionCreator(counterId))},
        addAudience:()=> {dispatch(addAudienceActionCreator())}


    }
}

const AddaudienceblockContainer = connect(mapStateToProps, mapDispatchToProps)(Addaudienceblock)

export default AddaudienceblockContainer