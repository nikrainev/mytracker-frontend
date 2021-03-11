import React from 'react';
import s from './addaudience.module.scss'
import {BrowserRouter, NavLink, Route, withRouter} from "react-router-dom";
import AddaudienceblockContainer from "./addaudienceblockContainer";
import addIcon from "../../../../assets/icons/h1-block/add.svg";

const Addcounterbutton =(props)=>{
    return(
            <div className="h1-block">
                <h1 className="h1">Аудитории</h1>
                <div className="h1-buttons">
                    <NavLink to='/audiences/addaudience' className="h1-button">
                        <div className="h1-button-icon">
                            <img src={addIcon} alt=""/>
                        </div>
                        <p className="h1-button-text">Добавить аудиторию</p>
                    </NavLink>
                </div>
            </div>
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