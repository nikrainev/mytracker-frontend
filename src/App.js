import React from 'react';
/*import logo from './logo.svg'; */
import './App.scss';
import Sidebar from "./components/sidebar/sidebar.jsx";
import NavbarContainer from './components/navbar/navbarContainer.jsx';
import Summary from "./components/content/summary/summary";
import Counters from "./components/content/counters/counters";
import Audiences from "./components/content/audiences/audiences";
import { BrowserRouter, Route } from "react-router-dom";
import ProfileSettings from "./components/profile/profilesettings/profilesettings";
import LoginContainer from "./components/profile/login/loginContainer"
import ProfileContainer from "./components/profile/profilePage/profileContainer";

const App = ()=> {

    return (
            <BrowserRouter >
                <div className="app-wrapper">
                    <NavbarContainer />
                    <div className="row">
                        <Sidebar />
                        {/* <Redirect exact from='/' to='/summary'  /> */}
                        <Route path='/summary'  render={ () => <Summary  /> } />
                        <Route path='/counters' render={() => <Counters />}/>
                        <Route path='/audiences' render={() => <Audiences />} />
                        <Route path='/profile' render={() => <ProfileContainer />} />
                        <Route path='/profilesettings' render={() => <ProfileSettings />} />
                        <Route path='/login' render={()=> <LoginContainer />} />


                    </div>
                </div>

            </BrowserRouter>

    )


}


export default App;
