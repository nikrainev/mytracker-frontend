import React from 'react';
import s from './navbar.module.scss';
import {NavLink} from "react-router-dom";

const Navbar = (props) => {

    let logout = () =>{
      props.logout()
    }
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

                    <NavLink to="/profile" className={s.link_item}>{props.isAuth == true ? props.profileLogin : "Профиль" }</NavLink>
                    <div className='dropdown_block'>
                        <NavLink to="/profilesettings" className='dropdown_link' activeClassName='active'>Настройки</NavLink>
                        <NavLink to="/share" className='dropdown_link' activeClassName='active'>Поделиться</NavLink>
                        {props.isAuth == true ? <div className="dropdown_link" onClick={logout}>Выйти</div> : <NavLink to="/login" className='dropdown_link' activeClassName='active'>Войти</NavLink>}

                    </div>
                </div>
            </div>


        </nav>



    );
}
export default Navbar;