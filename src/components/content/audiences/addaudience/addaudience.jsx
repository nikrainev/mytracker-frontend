import React from 'react';
import s from './addaudience.module.scss'
import {BrowserRouter, NavLink, Route, withRouter} from "react-router-dom";
import AddaudienceblockContainer from "./addaudienceblockContainer";

const Addcounterbutton =(props)=>{
    return(

            <NavLink to='/audiences/addaudience' className={s.addaudience_button+" attractive-button"}>
                Добавить аудиторию
            </NavLink>


    );
}



const Addaudiences = (props) =>{
    return (

                <div className="container">
                    <Route exact path='/audiences' render={() => <Addcounterbutton />} />
                    <Route path='/audiences/addaudience' render={ () =><AddaudienceblockContainer audienceData={props.audienceData}
                                                                                         dispatch={props.dispatch} />} />
                </div>
           
    );
}


export default Addaudiences;