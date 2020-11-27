import React from 'react';
import s from './dayusers.module.scss';
import Shortuser from "./shortuser/shortuser";
import * as axios from 'axios'

const LoadingShortuser = () =>{
    return (
            <div className={s.loading_shortuser}>

            </div>
    )

}


class Dayusers extends React.Component {
    componentDidMount() {

            axios.get('http://195.161.62.108:3000/users').then(response =>{
                this.props.setUsers(response)
            })



    }

    render(){


    let dayusers = this.props.dayusers;

    let dayUserElements = [];
    let i = 0
    if(dayusers.length == 0){
        while(i <= 5){
            dayUserElements[i] = <LoadingShortuser />
            i++
        }
    }
    else{
        dayUserElements = dayusers.map(dayuser => <Shortuser id={dayuser.id} country={dayuser.country} time={dayuser.time} date={dayuser.date} revenue={dayuser.revenue} />)
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
                </div>
            </div>




    );
}

}


export default Dayusers;