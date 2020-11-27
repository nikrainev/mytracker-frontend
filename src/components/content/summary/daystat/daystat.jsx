import React from 'react';
import s from './daystat.module.scss';
import Graphic from "../../../graphic/graphic";
const Daystat = (props) => {

    return  (
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <div className={s.day_stat}>
                            <p>Клики<br />120</p>
                            <p>Пользователи<br />65</p>
                            <p>Конверсии<br />2</p>
                        </div>
                    </div>
                    <div className="col-6">

                            <Graphic graphicData={props.graphicData}/>


                    </div>
                </div>
            </div>


    )
}
export default Daystat;