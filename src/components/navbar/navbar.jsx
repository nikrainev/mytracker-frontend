import React from 'react';
import s from './navbar.module.scss';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return  (

        <nav className={s.navbar}>
            <div className={s.logo}>
                Трекер
            </div>

            <div className={s.navbar_menu}>

                <NavLink className={s.link_item} to="/summary" activeClassName={s.active}>Общее</NavLink>
                <NavLink className={s.link_item} to="/counters" activeClassName={s.active}>Счётчики</NavLink>
                <NavLink className={s.link_item} to="/audiences" activeClassName={s.active}>Аудитории</NavLink>

            </div>
            <div className={s.profile}>
                <div className='dropdown'>
                    <a href="" className={s.link_item}>Профиль</a>
                    <div className='dropdown_block'>
                        <NavLink to="/profile" className='dropdown_link' activeClassName='active'>Настройки</NavLink>
                        <a href="" className='dropdown_link' activeClassName='active'>Поделиться</a>
                        <a href="" className='dropdown_link' activeClassName='active'>Выйти</a>
                    </div>
                </div>
            </div>

        </nav>

    );
}
export default Navbar;