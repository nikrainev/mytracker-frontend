import React from 'react';
import s from './newFriends.module.scss';

const NewFriends = (props) => {
    return  (
            <div className={s.newFriends}>
                <h2>Заявки в друзья:</h2>
                <div className={s.line}>
                    <div className={s.names_row}>
                        <p className="name">Никита</p>
                        <p className="soname">Крайнев</p>
                    </div>
                    <div className={s.buttons_row}>
                        <button className={s.deny}>Отказать</button>
                        <button className={s.accept}>Принять</button>
                    </div>
                </div>

                <div className={s.line}>
                    <div className={s.names_row}>
                        <p className="name">Никита</p>
                        <p className="soname">Крайнев</p>
                    </div>
                    <div className={s.buttons_row}>
                        <button className={s.deny}>Отказать</button>
                        <button className={s.accept}>Принять</button>
                    </div>
                </div>

                <div className={s.line}>
                    <div className={s.names_row}>
                        <p className="name">Никита</p>
                        <p className="soname">Крайнев</p>
                    </div>
                    <div className={s.buttons_row}>
                        <button className={s.deny}>Отказать</button>
                        <button className={s.accept}>Принять</button>
                    </div>
                </div>
            </div>


    );
}
export default NewFriends;