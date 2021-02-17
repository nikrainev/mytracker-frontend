import React from 'react';
import YourFriends from "./yourFriends";
import {getFriends, getPageSize, getTotalFriends} from "../../../../redux/selectors/profileselectors";
import {getFriendsList, deleteFriend, addFriendsList} from "../../../../redux/profile-reducer";

import {connect} from "react-redux";

class YourFriendsContainer extends React.Component{
    
    componentDidMount() {
        this.props.getFriendsList(1, this.props.pageSize)
    }

    render(){
        return  (
                <YourFriends
                        friends={this.props.friends}
                        pageSize={this.props.pageSize}
                        totalFriends={this.props.totalFriends}
                        deleteFriend={this.props.deleteFriend}
                        addToFriendsList={this.props.addFriendsList}
                />
        )
    }
}

let mapStateToProps = (state)=>{
    return{
        friends: getFriends(state),
        pageSize: getPageSize(state),
        totalFriends: getTotalFriends(state)
    }
}
export default connect(mapStateToProps,{getFriendsList, deleteFriend, addFriendsList})(YourFriendsContainer);