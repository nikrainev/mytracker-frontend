import React from 'react';
/*import logo from './logo.svg'; */
import './App.scss';
import Sidebar from "./components/sidebar/sidebar.jsx";
import NavbarContainer from './components/navbar/navbarContainer.jsx';
import Summary from "./components/content/summary/summary";
import Counters from "./components/content/counters/counters";
import Audiences from "./components/content/audiences/audiences";
import  {Route, Switch} from "react-router-dom";
import ProfileSettings from "./components/profile/profilesettings/profilesettings";
import LoginContainer from "./components/profile/login/loginContainer"
import ProfileContainer from "./components/profile/profilePage/profileContainer";
import SignUpContainer from "./components/profile/signup/signupContainer"
import FriendsPage from "./components/profile/friends/friends";
import CounterPage from "./components/content/counters/counterPage/counterPage";
import {InitializingApp} from "./redux/app-reducer";
import {connect} from "react-redux";
class App extends React.Component {
    componentDidMount() {
        this.props.InitializingApp()
    }

    render (){
        return <div className="app-wrapper">
            <NavbarContainer />
            <div className="row">
                <Sidebar />
                {/* <Redirect exact from='/' to='/summary'  /> */}

                <Route path='/summary'  render={ () => <Summary  /> } />
                <Switch>
                    <Route path='/counter/:counterId' render={()=> <CounterPage />} />
                </Switch>
                <Route path='/counters' render={() => <Counters />}/>

                <Route path='/audiences' render={() => <Audiences />} />
                <Route path='/profile' render={() => <ProfileContainer />} />
                <Route path='/profilesettings' render={() => <ProfileSettings />} />
                <Route exact path='/login'  render={()=> <LoginContainer />} />
                <Route path='/signup' render={()=> <SignUpContainer />} />
                <Route path='/friends' render={()=> <FriendsPage />} />


            </div>
        </div>
    }
}


let mapStateToProps = (state) =>{
    return{

    }
}


export default connect(mapStateToProps, {InitializingApp})(App)


