import React from 'react';
/*import logo from './logo.svg'; */
import './App.scss';

import SideBarContainer from "./components/sidebar/sidebarContainer";
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
import UserPageContainer from "./components/userPage/userPageContainer";
import NotFoundPage from "./components/content/NotFoundPage/notFoundPage";
import {getMenuState} from "./redux/selectors/app-selectors";
import {compose} from "redux";


class App extends React.Component {

    componentDidMount() {
        this.props.InitializingApp()
    }


    render (){
        return <div className="app-wrapper">

            <div className="row">

                <SideBarContainer />
                <div className={this.props.menuState === "collapsed" ? "content" : "content sidebar_closed"}>
                    <Switch>
                    <Route exact path='/'  render={ () => <Summary  /> } />
                    <Route  path='/summary'  render={ () => <Summary  /> } />
                    <Route  path='/counter/:counterId' render={()=> <CounterPage />} />
                    <Route  path='/counters/' render={() => <Counters />}/>
                    <Route  path='/audiences' render={() => <Audiences />} />
                    <Route  path='/profile' render={() => <ProfileContainer />} />
                    <Route  path='/profilesettings' render={() => <ProfileSettings />} />
                    <Route  path='/login'  render={()=> <LoginContainer />} />
                    <Route  path='/signup' render={()=> <SignUpContainer />} />
                    <Route  path='/friends' render={()=> <FriendsPage />} />
                    <Route  path='/users/:tysId' render={()=><UserPageContainer />} />
                    <Route path='*' render={()=><NotFoundPage />} />
                    </Switch>
            </div>



            </div>
        </div>
    }
}


let mapStateToProps = (state) =>{
    return{
        menuState: getMenuState(state)
    }
}


export default compose(connect(mapStateToProps, {InitializingApp}))(App)


