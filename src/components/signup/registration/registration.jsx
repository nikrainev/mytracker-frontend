import React from "react";
import s from "./registration.module.scss"
import {Field, reduxForm} from "redux-form";
import {Button, Input, PasswordScoreInput} from "../../common/formControls";
import {checkEmail, checkLogin, checkPassword, passwordsMatch, required} from "../../../utils/validation";
import {NavLink} from "react-router-dom";

const SignUpForm = (props) =>{
    return (

            <form onSubmit={props.handleSubmit}>
                <h1 className={s.h1}>Регистрация</h1>
                {props.error ? <span className={s.form_danger}>{props.error}</span> : ''}
                <div className={props.isFetching === true ? s.loading_bar + " " + s.active : s.loading_bar} />
                <Field name="login" type="text"  component={Input} placeholder="Придумайте логин" validate={[required, checkLogin]}/>
                <Field name="email" type="text"  component={Input} placeholder="Ваша почта" validate={[required, checkEmail]}/>
                <Field name="password" type="password"  component={PasswordScoreInput} placeholder="Придумайте пароль" validate={[required, checkPassword]}/>
                <Field name="repeatPassword" type="password"  component={Input} placeholder="Повторите пароль" validate={[required, passwordsMatch]}/>
                <p className={s.dont_reg_yet}>Уже есть аккаунт? <NavLink to='/login'>Войти</NavLink></p>
                <Button className={s.button} primary  disabled={props.submitting  || (props.invalid && props.anyTouched) || props.isFetching}  type="submit" >Отправить</Button>

            </form>

    )
}

const SignUpReduxForm = reduxForm({form: 'signup-form'})(SignUpForm)

const Registration = (props) =>{

    const onSubmit = (values) =>{
        props.sendSignUpRequest( values.email, values.login, values.password)
    }

    return(

            <div className={s.signup_form}>
                <SignUpReduxForm onSubmit={onSubmit} isFetching={props.isFetching}/>
            </div>
    )
}




export default Registration