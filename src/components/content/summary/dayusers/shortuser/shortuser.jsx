import React from 'react';
import s from './shortuser.module.scss';
import {NavLink} from "react-router-dom";
const Shortuser = (props) =>{
    return  (

                <NavLink to={'/users/'+props.id} className={s.shortuser}>
                    <div className={s.user_alias}>
                        <img src="https://nikrainev.ru/1img/profile.svg" alt=""/>
                    </div>
                    <div className={s.user_country}><p>{props.country}</p></div>
                    <div className={s.user_time}><p>{props.time}</p></div>
                    <div className={s.user_date}><p>{props.date}</p></div>
                    <div className={s.user_revenue}><p>{props.revenue}</p></div>
                </NavLink>






    );
}
export default Shortuser;