import React from "react";
import FriendsCountersList from "./friendsCountersList";
import {connect} from "react-redux";
import {changeFriendsCounters} from "../../../../../redux/counters-reducer";
import {getFriendsCounters, getFriendsTotalCounters, getPageSize} from "../../../../../redux/selectors/counters-selectors";

class FriendsCountersListContainer extends React.Component{
    changePage = (page) =>{
        this.props.changeFriendsCounters(page)
    }
    render(){
      return <FriendsCountersList
              countersListData={this.props.countersListData}
              pageSize={this.props.pageSize}
              totalCounters={this.props.totalCounters}
              changePage={this.changePage}

      />
    }
}

let mapStateToProps = (state) =>{

    return{
        countersListData: getFriendsCounters(state),
        pageSize: getPageSize(state),
        totalCounters: getFriendsTotalCounters(state)
    }
}


export default connect(mapStateToProps, {changeFriendsCounters})(FriendsCountersListContainer)

