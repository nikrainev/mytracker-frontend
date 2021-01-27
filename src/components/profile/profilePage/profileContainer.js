import React from "react";
import Profile from "./profile";
import {connect} from "react-redux";
import WithAuthRedirect from "../../../hoc/withAuthRedirect";
import {compose} from "redux";
class ProfileContainer extends React.Component {
    render(){
        return <Profile profileId={this.props.profileId}
                        email={this.props.email}
                        login={this.props.login}
                        regDate={this.props.regDate}
        />
    }
}

let mapStateToProps = (state) =>{
    return{
        profileId: state.auth.profileId,
        email: state.auth.email,
        login: state.auth.login,
        regDate: state.auth.regDate,

    }
}


export default compose(connect(mapStateToProps), WithAuthRedirect)(ProfileContainer)

