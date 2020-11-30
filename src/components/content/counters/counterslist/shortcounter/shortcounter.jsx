import React from 'react';
import s from './shortcounter.module.scss';
import {NavLink} from "react-router-dom";

const Shortcounter = (props) =>{
    return(
                    <NavLink to={'/counters/'+props.id} className={s.short_counter}>
                        <div className={s.name}>
                            <p>{props.name}</p>
                        </div>
                        <div className={s.domen}>
                            <p>{props.domen}</p>
                        </div>
                        <div className={s.dayusers}>
                            <p>{props.dayusers}</p>
                        </div>
                        <div className={s.totalusers}>
                            <p>{props.allusers}</p>
                        </div>

                        <div className={s.status+" "+ s[props.status]}>
                            <p><span className={s.work}>Активен</span><span className={s.notwork}>Не активен</span></p>
                        </div>
                    </NavLink>
            )

}



export default Shortcounter;