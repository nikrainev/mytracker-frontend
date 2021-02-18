import React from 'react';
import UsersList from "./usersList";
import {connect} from "react-redux";
import {getProfilesList, postProposal, deleteProposal} from "../../../../redux/profile-reducer";
import {selectProfilesList, getTotalProfiles, getPageSize} from "../../../../redux/selectors/profileselectors"
class UsersListContainer extends React.Component{

    state ={
        listButtons: [],
        profilesList: [],
        currentPage: 1
    }

    componentDidMount() {
        this.props.getProfilesList(1, this.props.pageSize)

    }

    getCurrentPage = (currentPage) =>{
        this.setState({currentPage: currentPage})
    }

    changeButtonState = (buttonId) =>{
        let copyListButtons = {...this.state.listButtons}
        copyListButtons[buttonId].isFetching = true
        this.setState({listButtons: copyListButtons})
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props !== prevProps){
            this.setState({profilesList: this.props.profilesList})
            for(let i = 0; i < this.state.profilesList.length; i++){

                if(this.state.profilesList[i] && this.props.profilesList[i]){

                    if( this.state.profilesList[i].friendStatus !== this.props.profilesList[i].friendStatus){
                        let copyListButtons = {...this.state.listButtons}
                        copyListButtons[i].isFetching = false
                        this.setState({listButtons: copyListButtons})

                    }
                }

            }
            if(this.state.listButtons.length === 0){
                let listButtons = this.props.profilesList.map((profile)=> ({isFetching: false}))
                this.setState({listButtons: listButtons})
            }

        }

    }

    getProfilesList = (page) =>{
        this.props.getProfilesList(page,this.props.pageSize)
    }

    render(){
        return  (
                <UsersList profilesList={this.props.profilesList}
                           totalProfiles={this.props.totalProfiles}
                           pageSize={this.props.pageSize}
                           currentPage={this.state.currentPage}
                           getProfilesList={this.getProfilesList}
                           postProposal={this.props.postProposal}
                           deleteProposal={this.props.deleteProposal}
                           changeButtonState={this.changeButtonState}
                           buttonsStates={this.state.listButtons}
                           getCurrentPage={this.getCurrentPage}
                />
        )
    }

}

let mapStateToProps = (state)=>{
    return{
      profilesList: selectProfilesList(state),
      totalProfiles: getTotalProfiles(state),
      pageSize: getPageSize(state)
    }
}

export default connect(mapStateToProps, {getProfilesList, postProposal, deleteProposal})(UsersListContainer);