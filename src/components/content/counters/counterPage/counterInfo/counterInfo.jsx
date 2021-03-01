import React, {useEffect, useState} from "react";
import s from './counterInfo.module.scss'
import {PixelCodeBlock} from "../../addcounter/addcounterblock/addcounterblock";

const CounterInfo = (props) => {

    return (

            <div className="container">
                <div className="row">
                    <div className={`${s.counterInfo} col-6`}>
                        <div className={s.names}>
                            <div className={s.name}>
                                <p>
                                    {props.counterInfo.name}
                                </p>
                                <span>
                                    Имя счётчика
                                </span>
                            </div>
                            <div className={s.id}>
                                <p>{props.counterInfo._id}</p>
                                <span>tysId</span>
                            </div>
                        </div>
                        <div className={s.domen}>
                            <p>{props.counterInfo.domen}</p>
                            <span>URL счётчика</span>
                        </div>
                        <div className={s.results}>
                            <div className={s.dayusers}>
                                <p>{props.counterInfo.dayusers}</p>
                                <span>Пользователи за день</span>
                            </div>
                            <div className={s.allusers}>
                                <p>{props.counterInfo.allusers}</p>
                                <span>Пользователей всего</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                      <PixelCodeBlock pixelCode={props.counterInfo.pixelCode} />
                    </div>
                </div>
            </div>
    )
}





export default CounterInfo