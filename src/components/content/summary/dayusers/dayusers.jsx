import React from 'react';
import s from './dayusers.module.scss';
import Shortuser from "./shortuser/shortuser";


const LoadingShortuser = () =>{
    return (
            <div className={s.loading_shortuser}>

            </div>
    )

}


const Dayusers = (props) => {



    let dayusers = props.dayusers;

    let dayUserElements = [];
    let i = 0
    if(dayusers.length == 0){
        while(i <= 5){
            dayUserElements[i] = <LoadingShortuser />
            i++
        }
    }
    else{
        dayUserElements = dayusers.map(dayuser => <Shortuser key={dayuser.id} id={dayuser.id} country={dayuser.country} time={dayuser.time} date={dayuser.date} revenue={dayuser.revenue} />)
    }



    return  (
            <div className="container">
                <div className={s.tablehead}>
                    <div className={s.user_alias}><p>Псевдоним</p></div>
                    <div className={s.user_country}><p>Страна</p></div>
                    <div className={s.user_time}><p>Время на сайте</p></div>
                    <div className={s.user_date}><p>Дата посещения</p></div>
                    <div className={s.user_revenue}><p>Доход</p></div>
                </div>
                <div className="dayuser_list">
                    {dayUserElements}
                    <button className={s.loadmore_button+ " attractive-button"} onClick={() => {props.loadMore()}}>Загрузить ещё</button>
                </div>
            </div>




    );


}


export default Dayusers;