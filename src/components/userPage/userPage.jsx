import React from "react";
import s from './userPage.module.scss'
import mongoDate from "../../utils/mongoDate";
const UserPage = (props) => {
    let userInfo = props.userInfo
       let sessionCount = 1
       let userSessions = props.userSessions.map((session)=>
               <div className={s.session}>
                <span className={s.sessionNumber}>{sessionCount++}</span>
                <p className={s.entryTime}>{mongoDate(session.entryTime).time}</p>
                <p className={s.awayTime}>{mongoDate(session.awayTime).time}</p>
               </div>)


       let DatesMapper = (sessions) =>{
        let datesMap = []
         const millieSecondsCompare = (firstDate, secondDate) =>{
            return (firstDate - secondDate)/(60*60*1000)
         }
         for(let i = 0; sessions.length > i; i++){
             let d = new Date();
             if(sessions[i].awayTime){
                 if(millieSecondsCompare(Date.now(), Date.parse(sessions[i].awayTime)) < (d.getHours() * 3600 + d.getMinutes() * 60 + d.getSeconds())/(3600)){
                     datesMap.push({index: i, date: 'Сегодня'})
                 }
                 else if (millieSecondsCompare(Date.now(), Date.parse(sessions[i].awayTime)) > (d.getHours() * 3600 + d.getMinutes() * 60 + d.getSeconds())/(3600)
                         && millieSecondsCompare(Date.now(), Date.parse(sessions[i].awayTime)) < 24 + (d.getHours() * 3600 + d.getMinutes() * 60 + d.getSeconds())/(3600)){
                     datesMap.push({index: i, date: 'Вчера'})
                 }
                 else {
                     datesMap.push({index: i, date: mongoDate(sessions[i].awayTime).date})
                 }
             }
         }
         let cleanDatesMap = [datesMap[0]]
         for(let i = 1; datesMap.length > i; i++){
             let prevDate = i - 1
             if(datesMap[i].date !== datesMap[prevDate].date){
                 cleanDatesMap.push(datesMap[i])

             }
         }
        return cleanDatesMap
       }
       console.log(DatesMapper(props.userSessions))

       const getSessionsWithDates = (datesMap, sessions) =>{
        let sessionsCopy = [...sessions]
        let datesMapCopy = [...datesMap]
         for(let i = 0; sessionsCopy.length > i; i++){

             for(let ii = 0; datesMapCopy.length > ii; ii++){
                 if((datesMapCopy[ii].index + ii) === i){
                     sessionsCopy.splice(i,0, <div className={s.date_divider}>{datesMapCopy[ii].date}</div> )

                 }
             }

         }
         return sessionsCopy
       }



        return (
                <div className='container'>
                    
                    <div className="row">
                        <div className="col-6">
                            <div className={s.main_info}>
                                <h4 className={s.h4}>Основное:</h4>
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
                            <div className={s.visits}>
                                <h4 className={s.h4}>Посещения:</h4>
                                {getSessionsWithDates(DatesMapper(props.userSessions), userSessions)}


                            </div>
                        </div>
                    </div>

                    <div className={s.device_info}>
                        <h4 className={s.h4}>Устройство:</h4>
                        <div className="row">
                            <div className="col-4">
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
                            <div className="col-4">
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
                            <div className="col-4">
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

                    <div className={s.geo_info}>
                        <h4 className={s.h4}>Расшифровка IP:</h4>
                            <div className="row">
                                <div className="col-4">
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
                                <div className="col-4">
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
                                <div className="col-4">
                                    <h5 className={s.col_head}>Остальное</h5>
                                    <div className={s.label_row}>
                                        <label htmlFor="">Почтовый индекс</label>
                                        <p>{userInfo.data.ipInfo.zip}</p>
                                    </div>
                                    <div className={s.label_row}>
                                        <label htmlFor="">Часовой пояс</label>
                                        <p>{userInfo.data.ipInfo.timezone}</p>
                                    </div>

                                </div>
                            </div>

                    </div>
                    <div className={s.headers_info}>
                        <h4 className={s.h4}>Заголовки:</h4>
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



                </div>
        )

}

export default UserPage