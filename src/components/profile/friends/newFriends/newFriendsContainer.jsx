import React from 'react';
import NewFriends from "./newFriends";

import {connect} from "react-redux";
import {getProposalsList} from "../../../../redux/selectors/profileselectors";
import {getProposals, acceptProposal, denyProposal} from "../../../../redux/profile-reducer";

class NewFriendsContainer extends React.Component{
    state = {
        isFetching: false,
        buttonsState: []
    }
    componentDidMount() {
     this.setState({isFetching: true})
     this.props.getProposals()
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps !== this.props){
            this.setState({isFetching: false})
            if(typeof this.props.proposals == 'object'){
                let listButtons = this.props.proposals.map((profile)=> ({isFetching: false}))
                this.setState({buttonsState: listButtons})
            }

        }
    }

    changeButtonState = (buttonId) =>{
        let copyButtonsState = {...this.state.buttonsState}
        copyButtonsState[buttonId].isFetching = true
        this.setState({buttonsState: copyButtonsState})
    }

    render(){
        return  (
                <NewFriends proposals={this.props.proposals}
                            acceptProposal={this.props.acceptProposal}
                            denyProposal={this.props.denyProposal}
                            isFetching={this.state.isFetching}
                            buttonsState={this.state.buttonsState}
                            chanhgeButtonsState={this.changeButtonState}

                />
        )
    }

}

let mapStateToProps = (state)=>{
    return{
       proposals: getProposalsList(state)
    }
}

export default connect(mapStateToProps, {getProposals, acceptProposal, denyProposal})(NewFriendsContainer);