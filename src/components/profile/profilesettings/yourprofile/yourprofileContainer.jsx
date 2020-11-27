import React from "react";
import YourProfile from "./yourprofile";
import {reloadInputActionCreator,reloadTextareaActionCreator} from "../../../../redux/profile-reducer";
import {connect} from "react-redux";



let mapStateToProps = (state) =>{
    return{
        userName: state.profilePage.userName,
        userDescription: state.profilePage.userDescription

    }
}
let mapDispatchToProps =(dispatch) =>{
    return{
      reloadInput: (value) =>{
          dispatch(reloadInputActionCreator(value, 'userName'))
      },
        reloadTextarea: (value, inputName) =>{
          dispatch(reloadTextareaActionCreator(value, 'userDescription'))
        }
    }
}

const YourProfileContainer = connect(mapStateToProps, mapDispatchToProps)(YourProfile)

export default YourProfileContainer;