import React from 'react';
import s from './addcounter.module.scss';
import { BrowserRouter, NavLink, Route} from "react-router-dom";
import AddcounterblockContainer from "./addcounterblock/addcounterblockContainer";
const Addcounterbutton =()=>{
    return(
            <NavLink to='/counters/addcounter' className={s.addcounter_button+" attractive-button"}>
                Добавить счётчик
            </NavLink>
    );
}
const Addcounter = (props) =>{
    return (


            <div className="container">
                <Route exact path='/counters' render={() => <Addcounterbutton />} />
                <Route path='/counters/addcounter' render={ () => <AddcounterblockContainer countersData={props.countersData} dispatch={props.dispatch} />} />
            </div>

    );
}
export default Addcounter;