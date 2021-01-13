import React from 'react';
import s from './signup.module.scss';
import {NavLink} from "react-router-dom";

const SignUpForm = (props) =>{
    let loginInput = React.createRef()
    let emailInput = React.createRef()
    let passwordInput = React.createRef()
    let repeatPasswordInput = React.createRef()
    let onSendClick = () =>{

      if(loginInput.current.value === ''){
          props.setLoginInputDanger('Введите Логин')

      }
      else if(/^[a-z]+([-_]?[a-z0-9]+){0,2}$/i.test(loginInput.current.value) === false ){
          props.setLoginInputDanger('Некорректный логин')
      }
      if(emailInput.current.value === ''){
          props.setEmailInputDanger('Введите Почту')
      }
      else if(/^[0-9a-z_-]+@[0-9a-z_-]+\.[a-z]{2,5}$/i.test(emailInput.current.value) === false){
          props.setEmailInputDanger('Почта некорректная')
      }
      if(passwordInput.current.value === ''){
          props.setPasswordInputDanger('Введите пароль')
      }
      else if(/^[0-9a-z#!_-]/i.test(passwordInput.current.value) === false){
          props.setPasswordInputDanger('Пароль некорректный')
      }
      if(repeatPasswordInput.current.value === ''){
          props.setRepeatPasswordInputDanger('Повторите пароль')
      }
      else if(repeatPasswordInput.current.value !== passwordInput.current.value){
          props.setRepeatPasswordInputDanger('Пароли не совпадают')
      }

      props.toggleSignUpButtonDisability()
        props.sendSignUpRequest(props.emailInput,props.loginInput,props.passwordInput)

    }

    let onLoginChange = () =>{
        if(/^[0-9a-z_-]/i.test(loginInput.current.value.slice(-1)) || loginInput.current.value==''){
            props.reloadLoginInput(loginInput.current.value)
            props.setLoginInputDanger('')
        }
        else{
            props.setLoginInputDanger('Разрешены латинские буквы, цифры и _-')
        }
        props.toggleSignUpButtonDisability()

    }

    let onEmailChange = () =>{
      if(/^[0-9a-z@._-]/i.test(emailInput.current.value.slice(-1)) || emailInput.current.value==''){
          props.reloadEmailInput(emailInput.current.value)
          props.setEmailInputDanger('')
      }
      else{
          props.setEmailInputDanger('Разрешены латинские буквы, цифры и _-@.')
      }
        props.toggleSignUpButtonDisability()

    }


    let onPasswordChange = () =>{

      if(passwordInput.current.value === ''){
        props.setPasswordStrength('none', '')

      }
      else if(passwordInput.current.value.length <= 4 && passwordInput.current.value.length >= 1){

        props.setPasswordStrength('tooWeak', 'Слишком слабый пароль')
      }
      else if(passwordInput.current.value.length <= 6){
          props.setPasswordStrength('weak','Слабый пароль')

      }
      else if(passwordInput.current.value.length <= 8){
          props.setPasswordStrength('medium','Средний пароль')
      }
      else{
          props.setPasswordStrength('good','Хороший пароль')
      }

      if(/^[0-9a-z#!_-]/i.test(passwordInput.current.value.slice(-1)) || passwordInput.current.value==''){
          props.reloadPasswordInput(passwordInput.current.value)
          props.setPasswordInputDanger('')
      }
      else{
          props.setPasswordInputDanger('Разрешены латинские буквы, цифры и #!_-')
      }
        props.toggleSignUpButtonDisability()


    }

    let onPasswordRepeatChange = () =>{
      props.reloadRepeatPasswordChange(repeatPasswordInput.current.value)
      props.setRepeatPasswordInputDanger('')
        props.toggleSignUpButtonDisability()
    }
    return(
            <div className={s.signup_form}>
                <div className={props.isFetching === true ? s.loading_bar + " " + s.active : s.loading_bar}></div>
                <div className={s.input_wr}>
                    <p className={s.input_danger}>{props.loginDanger}</p>
                    <input className="plain_input" placeholder='Придумайте Логин' type="text"
                           onChange={onLoginChange}
                           value={props.loginInput}
                           ref={loginInput}/>
                </div>
                <div className={s.input_wr}>
                    <p className={s.input_danger}>{props.emailDanger}</p>
                    <input className="plain_input" placeholder='Ваша почта' type="text"
                           onChange={onEmailChange}
                           value={props.emailInput}
                           ref={emailInput}/>
                </div>
                <div className={s.input_wr}>
                    <p className={s.input_danger}>{props.passwordDanger}</p>
                    <input className="plain_input" placeholder='Ваш пароль'  type="password"
                           onChange={onPasswordChange}
                           value={props.passwordInput}
                           ref={passwordInput}/>
                    {props.passwordStrength[0] !== 'none' ?  <div className={s.password_strength}><div className={s[props.passwordStrength[0]]}></div>
                        <p>{props.passwordStrength[1]}</p></div> : ''}

                </div>
                <div className={s.input_wr}>
                    <p className={s.input_danger}>{props.repeatPasswordDanger}</p>
                    <input className="plain_input" placeholder='Повторите пароль' type="password"
                           onChange={onPasswordRepeatChange}
                           value={props.repeatPasswordInput}
                           ref={repeatPasswordInput}/>
                </div>
                <button disabled={props.isSignUpButtonDisabled} onClick={onSendClick}>Отправить</button>
                <p className={s.dont_reg_yet}>Уже есть аккаунт? <NavLink to='/login'>Войти</NavLink></p>
            </div>
    )
}

const ProfileForm = (props)=>{
    return(
        <div className={s.profile_form_wr}>
            <div className={s.auth_info}>
                <div className="labeled-line"><p className="line-label">Почта:</p><p className="line-text">{props.email}</p></div>
                <div className="labeled-line"><p className="line-label">Логин:</p><p className="line-text">{props.login}</p></div>
                <div className="labeled-line"><p className="line-label">Дата регистрации:</p><p className="line-text">{props.regDate}</p></div>
                <div className="labeled-line"><p className="line-label">ID</p><p className="line-text">{props.profileId}</p></div>
            </div>
            <div className={s.profile_form}>
                    <div className={s.add_photo_row}>
                         <div className={s.photo_cont}></div>
                         <p className={s.add_photo}>Добавить фото</p>
                    </div>
                    <div className={s.input_wr}>
                        <input className="plain_input" placeholder='Имя' type="text"/>
                    </div>
                    <div className={s.input_wr}>
                        <input className="plain_input" placeholder='Фамилия' type="text"/>
                    </div>
                    <div className={s.input_wr}>
                        <textarea className="plain_textarea" placeholder='Информация о вас' name="" id="" cols="30" rows="10"></textarea>
                    </div>
                    <button>Отправить</button>
                    <NavLink to='/summary'>Пропустить</NavLink>
                </div>


        </div>
    )
}




const SignUpBlock = (props) => {




    return  (
            <div className="content">
                <div className="container">
                    {props.signUpState == 'signUpForm' ?
                   <SignUpForm reloadLoginInput={props.reloadLoginInput} reloadEmailInput={props.reloadEmailInput}
                             reloadPasswordInput={props.reloadPasswordInput} reloadRepeatPasswordChange={props.reloadRepeatPasswordInput}
                             loginInput={props.loginInput} emailInput={props.emailInput}
                             passwordInput={props.passwordInput} repeatPasswordInput={props.repeatPasswordInput}
                             setLoginInputDanger={props.setLoginInputDanger} setEmailInputDanger={props.setEmailInputDanger}
                             setPasswordInputDanger={props.setPasswordInputDanger} setRepeatPasswordInputDanger={props.setRepeatPasswordInputDanger}
                             loginDanger={props.loginDanger} emailDanger={props.emailDanger}
                             passwordDanger={props.passwordDanger} repeatPasswordDanger={props.repeatPasswordDanger}
                             setPasswordStrength={props.setPasswordStrength} passwordStrength={props.passwordStrength}
                             isSignUpButtonDisabled={props.isSignUpButtonDisabled} toggleSignUpButtonDisability={props.toggleSignUpButtonDisability}
                             isFetching={props.isFetching} sendSignUpRequest={props.sendSignUpRequest}
                   /> : <ProfileForm profileId={props.profileId} email={props.email}
                                     login={props.login} regDate={props.regDate}/>
                    }



                </div>
            </div>


    );
}
export default SignUpBlock;