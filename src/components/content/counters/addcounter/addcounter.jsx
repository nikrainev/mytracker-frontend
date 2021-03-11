import React from 'react';
import s from './addcounter.module.scss';
import { BrowserRouter, NavLink, Route} from "react-router-dom";
import AddcounterblockContainer from "./addcounterblock/addcounterblockContainer";
import addIcon from "../../../../assets/icons/h1-block/add.svg";
const Addcounterbutton =()=>{
    return(
            <div className="h1-block">
                <h1 className="h1">Счётчики</h1>

                <div className="h1-buttons">
                    <NavLink to="/counters/addcounter" className="h1-button">
                        <div className="h1-button-icon">
                            <img src={addIcon} alt=""/>
                        </div>
                        <p className="h1-button-text">Добавить счётчик</p>
                    </NavLink>
                </div>
            </div>

    );
}
const Addcounter = (props) =>{
    return (

            <div className="container">
                <Route exact path='/counters' render={() => <Addcounterbutton />} />
                <Route exact path='/counters/addcounter' render={ () => <AddcounterblockContainer countersData={props.countersData} dispatch={props.dispatch} />} />
            </div>

    );
}
export default Addcounter;