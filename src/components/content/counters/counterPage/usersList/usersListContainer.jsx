import React from "react";
import UsersList from "./usersList";
import {connect} from "react-redux";
import {getCurrentCounterPageSize, getTotalUsers} from '../../../../../redux/selectors/counters-selectors'
import {getMoreUsers} from "../../../../../redux/counters-reducer";


const UsersListContainer = (props) => {


    return <UsersList  usersList={props.counterUsers}
                       pageSize={props.pageSize}
                       counterId={props.counterId}
                       totalUsers={props.totalUsers}
                       getMoreUsers={props.getMoreUsers}
    />
}

let mapStateToProps = (state) =>{
    return{
        pageSize: getCurrentCounterPageSize(state),
        totalUsers: getTotalUsers(state)
    }
}



export default connect(mapStateToProps, {getMoreUsers})(UsersListContainer);