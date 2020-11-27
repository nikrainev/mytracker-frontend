import React from 'react';
import s from './sidebar.module.scss';

const Sidebar = () =>{
    return (

        <div className={s.sidebar}>
             <div className={s.sidebar_menu}>
                 <a href="" className={s.link_item}>Сводка</a>
                 <a href="" className={s.link_item}>Посетители</a>
                 <a href="" className={s.link_item}>Конверсии</a>
             </div>
        </div>
    );
}
export default Sidebar;