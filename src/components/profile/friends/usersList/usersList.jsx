import React from 'react';
import s from '../friends.module.scss';
import s2 from './usersList.module.scss'
const UsersList = (props) => {
    return  (
            <div className="usersList">
                <h2>Список пользователей:</h2>
                <div className={s.line}>
                    <div className={s.names_row}>
                        <p className="name">Никита</p>
                        <p className="soname">Крайнев</p>
                    </div>
                    <div className={s.company}>Гуап</div>
                    <div className={s.description}><p className={s.description_p}>dfnbg<br /> ejrwt<br />fhjbr<br /></p></div>
                    <button className={s2.add_button}>Добавить в друзья</button>
                </div>
                <div className={s.line}>
                    <div className={s.names_row}>
                        <p className="name">Никита</p>
                        <p className="soname">Крайнев</p>
                    </div>
                    <div className={s.company}>Гуап</div>
                    <div className={s.description}><p className={s.description_p}>dfnbg<br /> ejrwt<br />fhjbr<br /></p></div>
                    <button className={s2.add_button}>Добавить в друзья</button>
                </div>
                <div className={s.line}>
                    <div className={s.names_row}>
                        <p className="name">Никита</p>
                        <p className="soname">Крайнев</p>
                    </div>
                    <div className={s.company}>Гуап</div>
                    <div className={s.description}><p className={s.description_p}>dfnbg<br /> ejrwt<br />fhjbr<br /></p></div>
                    <button className={s2.add_button}>Добавить в друзья</button>
                </div>
                <button className={s.load_more + " attractive-button"}>Загрузить ещё</button>
            </div>


    );
}
export default UsersList;