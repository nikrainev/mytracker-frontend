import React from "react";
import s from './userPage.module.scss'
import mongoDate from "../../utils/mongoDate";
const UserPage = (props) => {
    let userInfo = props.userInfo




    let users = []
    let lastDivider = ''
    props.userSessions.forEach((item, index)=>{
        if(item.awayTime && mongoDate(item.awayTime).comparativeDate !== lastDivider){
            lastDivider = mongoDate(item.awayTime).comparativeDate
            users.push({divider: mongoDate(item.awayTime).comparativeDate}, item)

        }
        else{
            users.push(item)
        }

    })
    let sessionCount = 0
    users = users.map((user) => {
        if(user.divider) {
            return <div className={s.date_divider}>{user.divider}</div>
        }
        else{
            return <div className={s.session}>
                <span className={s.sessionNumber}>{++sessionCount}</span>
                <div className={s.session_line}>
                    {user.entryTime ? <p className={s.time}>{mongoDate(user.entryTime).time}</p> : <p className={s.notdefined}>Не определено</p>}
                    <div className={s.time_line}></div>
                    {user.awayTime ? <p className={s.time}>{mongoDate(user.awayTime).time}</p> : <p className={s.notdefined}>Не определено</p>}
                </div>

            </div>}
    })





        return (
                <>
                <div className="container h1-block">
                    <h1 className='h1'>Пользователь <span className={s.tysId}>{userInfo._id}</span></h1>
                </div>
                <div className='container'>


                    <div className={s.row}>
                        <div className={s.block + " " + s.col_6}>

                                <h3 className={s.h3}>Основное:</h3>

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
                        <div className={s.block + " " + s.col_6}>

                                <h3 className={s.h3}>Посещения:</h3>
                            <div className={s.sessions_cont}>
                                {users}
                            </div>



                        </div>
                    </div>

                    <div className={s.device_info}>
                        <h4 className={s.h4}>Устройство:</h4>
                        <div className={s.row}>
                            <div className={s.block + " " + s.col_4}>
                                <h5 className={s.col_head}>Браузер</h5>
                                <div className={s.label_row}>
                                    <label htmlFor="">Имя</label>
                                    <p>{userInfo.data.device.browser.name}</p>
                                </div>
                                <div className={s.label_row}>
                                    <label htmlFor="">Версия</label>
                                    <p>{userInfo.data.device.browser.version}</p>
                                </div>
                                <div className={s.label_row}>
                                    <label htmlFor="">Осн. версия</label>
                                    <p>{userInfo.data.device.browser.majorVersion}</p>
                                </div>

                            </div>
                            <div className={s.block + " " + s.col_4}>
                                <h5 className={s.col_head}>ОС</h5>
                                <div className={s.label_row}>
                                    <label htmlFor="">Название</label>
                                    <p>{userInfo.data.device.os.name}</p>
                                </div>
                                <div className={s.label_row}>
                                    <label htmlFor="">Версия</label>
                                    <p>{userInfo.data.device.os.version}</p>
                                </div>

                            </div>
                            <div className={s.block + " " + s.col_4}>
                                <h5 className={s.col_head}>Об утстройстве</h5>
                                <div className={s.label_row}>
                                    <label htmlFor="">Производитель</label>
                                    <p>{userInfo.data.device.device.vendor}</p>
                                </div>
                                <div className={s.label_row}>
                                    <label htmlFor="">Модель</label>
                                    <p>{userInfo.data.device.device.model}</p>
                                </div>
                                <div className={s.label_row}>
                                    <label htmlFor="">Тип</label>
                                    <p>{userInfo.data.device.device.type}</p>
                                </div>
                                <div className={s.label_row}>
                                    <label htmlFor="">Процессор</label>
                                    <p>{userInfo.data.device.cpu.architecture}</p>
                                </div>

                            </div>

                        </div>
                    </div>

                    <section>
                        <h4 className={s.h4}>Расшифровка IP:</h4>
                            <div className={s.row}>
                                <div className={s.block + " " + s.col_4}>
                                    <h5 className={s.col_head}>География</h5>
                                    <div className={s.label_row}>
                                        <label htmlFor="">Код страны</label>
                                        <p>{userInfo.data.ipInfo.countryCode}</p>
                                    </div>
                                    <div className={s.label_row}>
                                        <label htmlFor="">Регион</label>
                                        <p>{userInfo.data.ipInfo.regionName}</p>
                                    </div>
                                    <div className={s.label_row}>
                                        <label htmlFor="">Прим. широта</label>
                                        <p>{userInfo.data.ipInfo.lat}</p>
                                    </div>
                                    <div className={s.label_row}>
                                        <label htmlFor="">Прим. долгота</label>
                                        <p>{userInfo.data.ipInfo.lon}</p>
                                    </div>

                                </div>
                                <div className={s.block + " " + s.col_4}>
                                    <h5 className={s.col_head}>Оператор</h5>
                                    <div className={s.label_row}>
                                        <label htmlFor="">Провайдер</label>
                                        <p>{userInfo.data.ipInfo.isp}</p>
                                    </div>
                                    <div className={s.label_row}>
                                        <label htmlFor="">Организация</label>
                                        <p>{userInfo.data.ipInfo.org}</p>
                                    </div>
                                    <div className={s.label_row}>
                                        <label htmlFor="">AS</label>
                                        <p>{userInfo.data.ipInfo.as}</p>
                                    </div>

                                </div>
                                <div className={s.block + " " + s.col_4}>
                                    <h5 className={s.col_head}>Остальное</h5>
                                    <div className={s.label_row}>
                                        <label htmlFor="">Индекс</label>
                                        <p>{userInfo.data.ipInfo.zip}</p>
                                    </div>
                                    <div className={s.label_row}>
                                        <label htmlFor="">Часовой пояс</label>
                                        <p>{userInfo.data.ipInfo.timezone}</p>
                                    </div>

                                </div>
                            </div>

                    </section>
                    <section>
                        <h4 className={s.h4}>Заголовки:</h4>

                        <div className={s.block + " " + s.col_12}>
                            <div className={s.label_row}>
                                <label htmlFor="">user_agent</label>
                                <p>{userInfo.data.headers.user_agent}</p>
                            </div>
                            <div className={s.label_row}>
                                <label htmlFor="">accept</label>
                                <p>{userInfo.data.headers.accept}</p>
                            </div>
                            <div className={s.label_row}>
                                <label htmlFor="">languages</label>
                                <p>{userInfo.data.headers.languages}</p>
                            </div>
                        </div>

                    </section>
                </div>
                    </>
        )

}

export default UserPage