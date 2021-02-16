import React from 'react';
import YourFriends from "./yourFriends";
import {getFriends} from "../../../../redux/selectors/profileselectors";
import {getFriendsList, deleteFriend} from "../../../../redux/profile-reducer";
import {connect} from "react-redux";

class YourFriendsContainer extends React.Component{
    componentDidMount() {
        this.props.getFriendsList()
    }

    render(){
        return  (
                <YourFriends
                        friends={this.props.friends}
                        getFriends={this.props.getFriendsList}
                        deleteFriend={this.props.deleteFriend}
                />
        )
    }
}

let mapStateToProps = (state)=>{
    return{
        friends: getFriends(state)
    }
}
export default connect(mapStateToProps,{getFriendsList, deleteFriend})(YourFriendsContainer);