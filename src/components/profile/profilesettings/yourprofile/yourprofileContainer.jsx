import React from "react";
import YourProfile from "./yourprofile";
import {getProfileInfo, putProfileInfo} from "../../../../redux/profile-reducer";
import {connect} from "react-redux";



class YourProfileContainer extends React.Component {

    componentDidMount() {

      this.props.getProfileInfo()

    }
    render() {
        return <YourProfile name={this.props.name} soName={this.props.soName}
                            company={this.props.company} description={this.props.description}
                            putProfileInfo={this.props.putProfileInfo}

        />
    }
}
const mapStateToProps = (state) =>{
    return{
        name: state.profilePage.name,
        soName: state.profilePage.soName,
        company: state.profilePage.company,
        description: state.profilePage.description

    }
}



export default connect(mapStateToProps, {getProfileInfo, putProfileInfo})(YourProfileContainer);