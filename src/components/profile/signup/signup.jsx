import React from 'react';
import s from './signup.module.scss';
import {NavLink} from "react-router-dom";

const AuthForm = (props) =>{
    return(
            <div className="signup_form">
                <div className={s.input_wr}>
                    <p className={s.input_danger}>Введите логин</p>
                    <input className="plain_input" placeholder='Придумайте Логин' type="text"/>
                </div>
                <div className={s.input_wr}>
                    <p className={s.input_danger}>Введите почту</p>
                    <input className="plain_input" placeholder='Ваша почта' type="text"/>
                </div>
                <div className={s.input_wr}>
                    <p className={s.input_danger}>Введите пароль</p>
                    <input className="plain_input" placeholder='Ваш пароль'  type="password"/>
                </div>
                <div className={s.input_wr}>
                    <p className={s.input_danger}>Повторите пароль</p>
                    <input className="plain_input" placeholder='Повторите пароль' type="password"/>
                </div>
            </div>
    )
}


const SignUpBlock = (props) => {
    let onSendClick = () =>{

    }


    return  (
            <div className="content">
                <div className="container">
                   <AuthForm />
                </div>
            </div>


    );
}
export default SignUpBlock;