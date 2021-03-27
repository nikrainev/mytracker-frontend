import React from "react";
import YourCountersList from "./yourCountersList";
import {connect} from "react-redux";
import {changeYourCounters} from "../../../../../redux/counters-reducer";
import {getYourCounters, getYourTotalCounters, getPageSize} from "../../../../../redux/selectors/counters-selectors";

class YourCountersListContainer extends React.Component{


    changePage = (page) =>{
        this.props.changeYourCounters(page)
    }
    render(){
      return <YourCountersList
              countersListData={this.props.countersListData}
              pageSize={this.props.pageSize}
              totalCounters={this.props.totalCounters}
              changePage={this.changePage}

      />
    }
}

let mapStateToProps = (state) =>{

    return{
        countersListData: getYourCounters(state),
        pageSize: getPageSize(state),
        totalCounters: getYourTotalCounters(state)
    }
}


export default connect(mapStateToProps, {changeYourCounters})(YourCountersListContainer)

