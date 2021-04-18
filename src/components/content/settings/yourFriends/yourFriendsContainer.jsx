import React from 'react';
import YourFriends from "./yourFriends";
import {getFriends, getPageSize, getTotalFriends, getDeletedFriend} from "../../../../redux/selectors/profileselectors";
import {getFriendsList, deleteFriend, addFriendsList, setFriendsList, clearSettingsPage} from "../../../../redux/profile-reducer";
import s from './yourFriends.module.scss'
import {connect} from "react-redux";

class YourFriendsContainer extends React.Component{
    state ={
        friends: []
    }
    componentDidMount() {
        if (this.props.friends !== "no friends") {
        let friendsFetching = this.props.friends.map((friend) => ({
            ...friend, isFetching: false}))
            this.setState({friends: friendsFetching})
        }
        else{
            this.setState({friends: "no friends"})
        }
    }


    componentDidUpdate(prevProps, prevState, snapshot) {

        if(prevProps !== this.props){
            if(prevProps.deletedFriend !== this.props.deletedFriend){
                this.deleteFriendLocal(this.props.deletedFriend[0])
            }

            if(prevProps.friends !== this.props.friends){
                if(typeof this.props.friends === "object"){
                    let friendsFetching = this.props.friends.map((friend)=> ({...friend, isFetching: false}))
                    this.setState({friends: [...this.state.friends, ...friendsFetching]})

                }
                else{
                        this.setState({friends: this.props.friends})
                }
            }


        }
    }

    changeButtonState = (buttonId) =>{
        let copyFriends = {...this.state.friends}
        copyFriends[buttonId].isFetching = true
        this.setState({listButtons: copyFriends})
    }

    componentWillUnmount() {
        this.props.setFriendsList([],undefined)
        this.props.clearSettingsPage()
    }

    deleteFriendLocal = (friendId) =>{
        let friendsCopy = [...this.state.friends]
        friendsCopy.splice(friendId, 1)
        if(friendsCopy.length === 0){
            this.setState({friends: "no friends"})
        }
        else{
            this.setState({friends: friendsCopy})
        }
    }

    deleteFriend = (userId, buttonId) =>{
        this.changeButtonState(buttonId)
        this.props.deleteFriend(userId, buttonId)
    }

    render(){
        return  (
                <div className={`container  ${s.overflow}`}>
                <YourFriends
                        friends={this.state.friends}
                        pageSize={this.props.pageSize}
                        totalFriends={this.props.totalFriends}
                        deleteFriend={this.deleteFriend}
                        addToFriendsList={this.props.addFriendsList}/>
                </div>
        )
    }
}

let mapStateToProps = (state)=>{
    return{
        friends: getFriends(state),
        pageSize: getPageSize(state),
        totalFriends: getTotalFriends(state),
        deletedFriend: getDeletedFriend(state)
    }
}
export default connect(mapStateToProps,{getFriendsList, deleteFriend, addFriendsList, setFriendsList, clearSettingsPage})(YourFriendsContainer);