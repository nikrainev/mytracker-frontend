import React from "react";
import Counterslist from "./counterslist";
import {connect} from "react-redux";
import {setCountersActionCreator, setCurrentPageActionCreator, setTotalCountersActionCreator} from "../../../../redux/counters-reducer";
import * as axios from "axios";

class CounterslistContainer extends React.Component{
    componentDidMount() {

        axios.get(`http://195.161.62.108:3000/counters?page=${this.props.currentPage}&limit=${this.props.pageSize}`).then(response =>{

            this.props.setCounters(response)
            this.props.setTotalCounters(response)
        })




    }
    changePage = (page) =>{
        this.props.setCurrentPage(page)
        axios.get(`http://195.161.62.108:3000/counters?page=${page}&limit=${this.props.pageSize}`).then(response =>{

            this.props.setCounters(response)
        })
    }
    render(){
      return <Counterslist
              countersListData={this.props.countersListData}
              pageSize={this.props.pageSize}
              totalCounters={this.props.totalCounters}
              currentPage={this.props.currentPage}
              changePage={this.changePage}

      />
    }
}

let mapStateToProps = (state) =>{
    return{
        countersListData: state.countersPage.counterslistData,
        pageSize: state.countersPage.pageSize,
        totalCounters: state.countersPage.totalCounters,
        currentPage: state.countersPage.currentPage

    }
}
let mapDispatchToProps =(dispatch) =>{
    return{
       setCounters: (countersData) =>{
           dispatch(setCountersActionCreator(countersData))
       },
       setCurrentPage: (currentPage) =>{
           dispatch(setCurrentPageActionCreator(currentPage))
       },
       setTotalCounters: (totalCounters) =>{
           dispatch(setTotalCountersActionCreator(totalCounters))
       }
    }
}

export default CounterslistContainer = connect(mapStateToProps, mapDispatchToProps)(CounterslistContainer)

