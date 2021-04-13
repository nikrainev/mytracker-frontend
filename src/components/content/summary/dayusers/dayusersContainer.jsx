import React from "react";
import {connect} from "react-redux";
import {getPageSize, getSummaryUsers, getTotalUsers} from "../../../../redux/selectors/summary-selectors";
import {getMoreUsers} from "../../../../redux/summary-reducer";
import UsersList from "../../../../components/content/counters/counterPage/usersList/usersList";


const DayUsersContainer = (props) => {

    return <UsersList  usersList={props.summaryUsers}
                       pageSize={props.pageSize}
                       totalUsers={props.totalUsers}
                       getMoreUsers={props.getMoreUsers}

    />
}

let mapStateToProps = (state) =>{
    return{
        pageSize: getPageSize(state),
        totalUsers: getTotalUsers(state),
        summaryUsers: getSummaryUsers(state),
    }
}



export default connect(mapStateToProps, {getMoreUsers})(DayUsersContainer);

