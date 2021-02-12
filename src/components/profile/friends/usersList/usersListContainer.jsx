import React from 'react';
import UsersList from "./usersList";
import {connect} from "react-redux";
import {getProfilesList} from "../../../../redux/profile-reducer";
import {selectProfilesList, getTotalProfiles, getPageSize} from "../../../../redux/selectors/profileselectors"
class UsersListContainer extends React.Component{
    componentDidMount() {
        this.props.getProfilesList(1,5)
    }

    getProfilesList = (page) =>{
        this.props.getProfilesList(page,this.props.pageSize)
    }

    render(){
        return  (
                <UsersList profilesList={this.props.profilesList}
                           totalProfiles={this.props.totalProfiles}
                           pageSize={this.props.pageSize}
                           getProfilesList={this.getProfilesList}
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

export default connect(mapStateToProps, {getProfilesList})(UsersListContainer);