import React from 'react';
import s from './addaudience.module.scss'
import {BrowserRouter, NavLink, Route} from "react-router-dom";
import AddaudienceblockContainer from "./addaudienceblockContainer";

const Addcounterbutton =()=>{
    return(
            <NavLink to='/audiences/addaudience' className={s.addaudience_button+" attractive-button"}>
                Добавить аудиторию
            </NavLink>
    );
}

const Addaudiences = (props) =>{
    return (
            <BrowserRouter>
                <div className="container">
                    <Route exact path='/audiences' render={() => <Addcounterbutton />} />
                    <Route path='/audiences/addaudience' render={ () =><AddaudienceblockContainer audienceData={props.audienceData}
                                                                                         dispatch={props.dispatch} />} />
                </div>
            </BrowserRouter>
    );
}


export default Addaudiences;