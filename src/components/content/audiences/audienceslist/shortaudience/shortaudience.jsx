import React from 'react';
import s from './shortaudience.module.scss';
const Shortaudience = (props) =>{
    let counters = props.countersNames.map(counter => <div className={s.counter}><p>{counter.counterName}</p></div>)
    let totalUsers = () =>{
        if (1000<props.totalUsers<10000){
            return (props.totalUsers/1000).toFixed(1)+'K'
        }
        else if(10000<props.totalUsers<1000000){
            return (props.totalUsers/1000).toFixed(1)+'K'
        }
    }

    return (

            <div className={s.short_audience}>
              <div className={s.audience_name}>
                  <p>{props.name}</p>
              </div>
                <div className={s.body}>
                    <div className={s.description}>
                        <p>{props.description}</p>
                    </div>
                    <div className={s.counters}>
                        {counters}
                    </div>
                    <div className={s.info}>
                        <div className={s.info_block}>
                            <span>{totalUsers()}</span>
                            <p>Пользователи</p>
                        </div>
                        <div className={s.info_block}>
                            <span>{props.usersnow}</span>
                            <p>За день</p>
                        </div>
                        <div className={s.info_block}>
                            <span>{props.status}</span>
                            <p>Статус</p>
                        </div>
                    </div>
                </div>

            </div>


    );
}
export default Shortaudience;