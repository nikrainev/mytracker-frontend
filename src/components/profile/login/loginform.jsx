import React from 'react';
import s from './login.module.scss';

const LoginForm = (props) => {
    let emailInput = React.createRef()
    let passwordInput = React.createRef()
    let updateEmailInput = () =>{
       props.reloadInput('emailInput',emailInput.current.value)

    }
    let updatePasswordInput = () =>{
        props.reloadInput('passwordInput',passwordInput.current.value)
    }

    return  (
          <div className="container">
              <div className={s.form}>
                  <input type="text" placeholder="Введите почту" onChange={updateEmailInput} value={props.emailInput} ref={emailInput}/>
                  <input type="password" placeholder="Введите пароль" onChange={updatePasswordInput} value={props.passwordInput} ref={passwordInput}/>
                  <button onClick={props.sendLoginRequest}>Отправить</button>
              </div>
          </div>


    );
}
export default LoginForm;