import React from 'react';
import s from './notFoundPage.module.scss';
import notFoundGif from '../../../assets/notFound.gif'
import  {NavLink} from "react-router-dom";


const NotFoundPage = (props) => {




    return  (
            <div className={s.container}>
                <div className={s.row}>
                    <div className={s.gif_cont}>
                        <img src={notFoundGif} alt=""/>
                    </div>
                    <div className={s.text}>
                        <h1>Упс! Что-то пошло не так</h1>
                        <NavLink to={'/'} >Вернуться на главную страницу</NavLink>
                    </div>
                </div>


            </div>



    );
}
export default NotFoundPage;