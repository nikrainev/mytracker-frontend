import React from 'react';
import NewFriends from "./newFriends";

import {connect} from "react-redux";
import {getProposalsList} from "../../../../redux/selectors/profileselectors";
import {getProposals, acceptProposal, denyProposal} from "../../../../redux/profile-reducer";

class NewFriendsContainer extends React.Component{
    componentDidMount() {
     this.props.getProposals()
    }

    render(){
        return  (
                <NewFriends proposals={this.props.proposals}
                            acceptProposal={this.props.acceptProposal}
                            denyProposal={this.props.denyProposal}

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