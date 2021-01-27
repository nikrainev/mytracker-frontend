import React from "react";
import Counterslist from "./counterslist";
import {connect} from "react-redux";
import {setCounters, setCurrentPage, setTotalCounters,toggleIsFetching, getCounters} from "../../../../redux/counters-reducer";
import WithAuthRedirect from "../../../../hoc/withAuthRedirect";
import {compose} from   "redux"
class CounterslistContainer extends React.Component{
    componentDidMount() {
       this.props.getCounters()
    }

    changePage = (page) =>{
        this.props.setCurrentPage(page)
        this.props.getCounters()
    }
    render(){
      return <Counterslist
              countersListData={this.props.countersListData}
              pageSize={this.props.pageSize}
              totalCounters={this.props.totalCounters}
              currentPage={this.props.currentPage}
              isFetching={this.props.isFetching}
              changePage={this.changePage}

      />
    }
}

let mapStateToProps = (state) =>{
    return{
        countersListData: state.countersPage.counterslistData,
        pageSize: state.countersPage.pageSize,
        totalCounters: state.countersPage.totalCounters,
        currentPage: state.countersPage.currentPage,
        isFetching: state.countersPage.isFetching

    }
}


export default CounterslistContainer = compose(connect(mapStateToProps, {setCounters, setCurrentPage,setTotalCounters,
    toggleIsFetching, getCounters}), WithAuthRedirect)(CounterslistContainer)

