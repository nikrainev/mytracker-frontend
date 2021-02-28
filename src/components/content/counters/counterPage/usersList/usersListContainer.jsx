import React, {useEffect, useState} from "react";
import UsersList from "./usersList";
import {connect} from "react-redux";



const UsersListContainer = (props) => {


    return <UsersList  usersList={props.counterUsers.usersPage}
                       counterId={props.counterId}/>
}

let mapStateToProps = (state) =>{
    return{

    }
}



export default connect(mapStateToProps, {})(UsersListContainer);