import React from "react";
import s from './userPage.module.scss'
import mongoDate from "../../utils/mongoDate";
const UserPage = (props) => {
    let userInfo = props.userInfo




        return (
                <div className='container'>
                    Страница пользователя
                    {JSON.stringify(props.userInfo, '', ' ')}
                    <div className="row">
                        <div className="col-6">
                            <div className="main-info">
                                <h4>Основное:</h4>
                                <div className={s.label_row}>
                                    <label htmlFor="">tysId</label>
                                    <p>{userInfo._id}</p>
                                </div>
                                <div className={s.label_row}>
                                    <label htmlFor="">URL</label>
                                    <p>{userInfo.referer}</p>
                                </div>
                                <div className={s.label_row}>
                                    <label htmlFor="">Ip</label>
                                    <p>{userInfo.data.ipInfo.query}</p>
                                </div>
                                <div className={s.label_row}>
                                    <label htmlFor="">Страна</label>
                                    <p>{userInfo.data.ipInfo.country}</p>
                                </div>
                                <div className={s.label_row}>
                                    <label htmlFor="">Город</label>
                                    <p>{userInfo.data.ipInfo.city}</p>
                                </div>


                            </div>
                        </div>
                        <div className="col-6">
                            <div className="visits">
                                <h4>Посещения</h4>
                                {console.log(props.userSessions)}


                            </div>
                        </div>
                    </div>

                </div>
        )

}

export default UserPage