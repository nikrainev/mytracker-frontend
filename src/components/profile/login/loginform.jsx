import React from 'react';
import s from './login.module.scss';
import {NavLink} from "react-router-dom";

const LoginBlock = (props) => {
    let emailInput = React.createRef()
    let passwordInput = React.createRef()

    let onSendClick = () =>{
        if(emailInput.current.value == ''){
            props.setEmailInputState('empty_danger')
        }
        else if(passwordInput.current.value == ''){
            props.setPasswordInputState('empty_danger')
        }
        else{

            props.sendLoginRequest()

        }

        props.toggleButtonDisability(true)





    }

    let onEmailChange = () =>{
        props.reloadEmailInput(emailInput.current.value)
        props.setEmailInputState('normal')
        props.setLoginFormState('normal')
        props.toggleButtonDisability(false)
    }

    let onPasswordChange = () =>{
        props.reloadPasswordInput(passwordInput.current.value)
        props.setPasswordInputState('normal')
        props.setLoginFormState('normal')
        props.toggleButtonDisability(false)
    }



    return  (
          <div className="container">



              <div className="login_block">
                  {props.isAuth == false ?
                          <div className={s.form}>
                              <div className={s.false_alert}><p>{props.loginFormState === 'normal' ? ' ' : 'Невереные данные'}</p></div>
                              <div className={props.isFetching === true ? s.loading_bar + " " + s.active : s.loading_bar}></div>
                              <div className={props.emailInputState == 'normal' ? s.input_wr : s.input_wr + " " + s.danger}>
                                  <p className={s.input_danger}>Введите почту</p>
                                  <input type="text" placeholder="Введите почту"
                                         onChange={onEmailChange}
                                         value={props.emailInput}
                                         ref={emailInput}/>
                              </div>
                              <div className={props.passwordInputState == 'normal' ? s.input_wr : s.input_wr + " " + s.danger}>
                                  <p className={s.input_danger}>Введите пароль</p>
                                  <input type="password" placeholder="Введите пароль"
                                         onChange={onPasswordChange}
                                         value={props.passwordInput}
                                         ref={passwordInput}/>
                              </div>
                              <button disabled={props.isButtonDisabled} onClick={onSendClick}>Отправить</button>
                              <p className={s.dont_reg_yet}>Ещё нет аккаунта? <NavLink to='signup'>Зарегистрируйтесь</NavLink></p>
                          </div>
                          :
                          <div>Вы авторизованы</div>

                  }
                      </div>
        </div>

    );
}
export default LoginBlock;