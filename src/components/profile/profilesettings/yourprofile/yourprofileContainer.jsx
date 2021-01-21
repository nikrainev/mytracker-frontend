import React from "react";
import YourProfile from "./yourprofile";
import {reloadTextareaActionCreator} from "../../../../redux/profile-reducer";
import {connect} from "react-redux";



class YourProfileContainer extends React.Component {


    render() {
        return <YourProfile userName={this.props.userName} userSoName={this.props.userSoName}
                            userCompany={this.props.userCompany} userDescription={this.props.userDescription}

        />
    }
}
const mapStateToProps = (state) =>{
    return{
        userName: state.profilePage.userName,
        userSoName: state.profilePage.userName,
        userCompany: state.profilePage.userCompany,
        userDescription: state.profilePage.userDescription

    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        reloadTextarea: (value, inputName) =>{
            dispatch(reloadTextareaActionCreator(value, 'userDescription'))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(YourProfileContainer);