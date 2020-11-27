import React from 'react';
/*import logo from './logo.svg'; */
import './App.scss';
import Sidebar from "./components/sidebar/sidebar.jsx";
import Navbar from './components/navbar/navbar.jsx';
import Summary from "./components/content/summary/summary";
import Counters from "./components/content/counters/counters";
import Audiences from "./components/content/audiences/audiences";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import store from "./redux/store";
import ProfileSettings from "./components/profile/profilesettings/profilesettings";



const App = (props) =>{


  return (
      <BrowserRouter >
      <div className="app-wrapper">
          <Navbar />
          <div className="row">
              <Sidebar />
              {/* <Redirect exact from='/' to='/summary'  /> */}
              <Route path='/summary'  render={ () => <Summary  /> } />
              <Route path='/counters' render={() => <Counters />}/>
              <Route path='/audiences' render={() => <Audiences />} />
              <Route path='/profile' render={() => <ProfileSettings />} />


          </div>
      </div>
      </BrowserRouter>


    
  );
}


export default App;
