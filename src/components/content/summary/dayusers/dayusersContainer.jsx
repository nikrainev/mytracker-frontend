import React from "react";
import Dayusers from "./dayusers";
import {connect} from "react-redux";
import {setUsersActionCreator, loadNewPageActionCreator,setCurrentPageActionCreator, setTotalUsersActionCreator} from '../../../../redux/summary-reducer'
import * as axios from "axios";


class DayusersContainer extends React.Component {

    componentDidMount() {
        axios.get('http://195.161.62.108:3000/users').then(response =>{
            this.props.setTotalUsers(response.data.totalPages)
        })


        axios.get(`http://195.161.62.108:3000/users?page=1&limit=5`).then(response =>{
            this.props.setUsers(response.data.items)
        })

    }

    loadMore = ()=>{

        axios.get(`http://195.161.62.108:3000/users?page=${this.props.currentPage}&limit=${this.props.pageSize}`).then(response =>{

            this.props.loadNewPage(response.data.items)

        })
    }
    render(){

        return <Dayusers
                dayusers={this.props.dayusers}
                loadMore={this.loadMore}
        />
    }

}

let mapStateToProps = (state) =>{
    return{
        dayusers: state.summaryPage.dayusersData,
        currentPage: state.summaryPage.currentPage,
        totalUsers: state.summaryPage.totalUsers,
        pageSize: state.summaryPage.pageSize
    }
}
let mapDispatchToProps =(dispatch) =>{
    return{
     setUsers: (usersData) => {
         dispatch(setUsersActionCreator(usersData))
     },
     loadNewPage: (usersData) =>{
         dispatch(loadNewPageActionCreator(usersData))
     },
     setCurrentPage: () =>{
         dispatch(setCurrentPageActionCreator())
     },
     setTotalUsers:(totalUsers) =>{
         dispatch(setTotalUsersActionCreator(totalUsers))
     }


    }
}

export default  DayusersContainer = connect(mapStateToProps, mapDispatchToProps)(DayusersContainer)

