import React from 'react';
import s from './shortuser.module.scss';
import {NavLink} from "react-router-dom";
const Shortuser = (props) =>{
    const mongoDate = (mongoDate) => {
        let daysSeparate = mongoDate.split('T')
        let date = daysSeparate[0];
        let timeSeparate = daysSeparate[1];
        timeSeparate = timeSeparate.split(':')
        let time = timeSeparate.slice(0,2).join(':')
        let seconds = timeSeparate[2].replace('Z','')
        return{
            date: date,
            time: time,
            seconds: seconds
        }
    }



    return  (

                <NavLink to={'/users/'+props.id} className={s.shortuser}>
                    <div className={s.user_alias}>
                        <img src="https://nikrainev.ru/1img/profile.svg" alt=""/>
                    </div>
                    <div className={s.user_country}><p>{props.country}</p></div>
                    <div className={s.user_time}><p>{props.time}</p></div>
                    <div className={s.user_date}><p>{mongoDate(props.date).time}</p></div>
                    <div className={s.user_revenue}><p>{props.revenue}</p></div>
                </NavLink>






    );
}
export default Shortuser;