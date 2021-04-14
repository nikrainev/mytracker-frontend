import React from 'react';
import s from './notFoundPage.module.scss';
import notFoundGif from '../../../assets/notFound.gif'
import  {NavLink} from "react-router-dom";
import {useDocTitle} from "../../../utils/customHooks";


const NotFoundPage = (props) => {
    const [title, setTitle] = useDocTitle('404 - страница не найдена')




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