import React from 'react';
import s from './login.module.scss';
import {NavLink} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import {Input} from "../../../components/common/formControls"
import {required} from "../../../utils/validation";
import doneImg from "../../../assets/icons/done.svg";
import styled from "styled-components";
import background from "../../../assets/summary-bg.jpg";

const BackGround = styled.div`
background: url(${background});
display: block;
position: fixed;
top:0;
left: 0;
right: 0;
width: 100%;
height: 100%;
z-index: -1;
background-repeat: no-repeat;
background-size: cover;
`

const LoginForm = (props) =>{

    return (
            <form onSubmit={props.handleSubmit}>
                {props.error ? <span className={s.form_danger}>{props.error}</span> : ''}
                <div className={props.isFetching === true ? s.loading_bar + " " + s.active : s.loading_bar}></div>
                <Field name="emailInput" type="text"  component={Input} placeholder="Введите почту" validate={required}/>
                <Field name="passwordInput" type="password"  component={Input} placeholder="Введите пароль" validate={required}/>
                <button className='control_button' disabled={props.submitting || props.error}  type="submit" >Отправить</button>
                <p className={s.dont_reg_yet}>Ещё нет аккаунта? <NavLink to='signup'>Зарегистрируйтесь</NavLink></p>
            </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login-form'})(LoginForm)

const LoginBlock = (props) => {

    const onSubmit = (values) =>{
        props.sendLoginRequest(values.emailInput, values.passwordInput)

    }
    return  (
            <>
                <BackGround ></BackGround>
          <div className="container">
              <div className="login_block">
                  {props.isAuth == false ?
                          <div className={s.form}>
                              <LoginReduxForm isFetching={props.isFetching} onSubmit={onSubmit}/>
                          </div>
                          :
                          <div className={s.success_auth}><img src={doneImg} alt=""/><p>Вы авторизованы</p></div>

                  }
                      </div>
        </div>
                </>

    );
}
export default LoginBlock;