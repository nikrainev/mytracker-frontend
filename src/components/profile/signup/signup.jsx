import React from 'react';
import s from './signup.module.scss';
import {NavLink} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import {Input, PasswordScoreInput, Textarea} from "../../common/formControls";
import {required, checkLogin, checkEmail, checkPassword, passwordsMatch} from "../../../utils/validation";
import {BackGround} from "../../common/background";

const SignUpForm = (props) =>{
    return (

                <form onSubmit={props.handleSubmit}>
                    <h1 className={s.h1}>Регистрация</h1>
                 {props.error ? <span className={s.form_danger}>{props.error}</span> : ''}
                    <div className={props.isFetching === true ? s.loading_bar + " " + s.active : s.loading_bar}></div>
                    <Field name="login" type="text"  component={Input} placeholder="Придумайте логин" validate={[required, checkLogin]}/>
                    <Field name="email" type="text"  component={Input} placeholder="Ваша почта" validate={[required, checkEmail]}/>
                    <Field name="password" type="password"  component={PasswordScoreInput} placeholder="Придумайте пароль" validate={[required, checkPassword]}/>
                    <Field name="repeatPassword" type="password"  component={Input} placeholder="Повторите пароль" validate={[required, passwordsMatch]}/>
                    <p className={s.dont_reg_yet}>Уже есть аккаунт? <NavLink to='/login'>Войти</NavLink></p>
                    <button className='control_button' disabled={props.submitting || props.error}  type="submit" >Отправить</button>

                </form>

    )
}

const SignUpReduxForm = reduxForm({form: 'signup-form'})(SignUpForm)

const SignUpFormBlock = (props) =>{

    const onSubmit = (values) =>{
        props.sendSignUpRequest( values.email, values.login, values.password)
    }

    return(

            <div className={s.signup_form}>
                <SignUpReduxForm onSubmit={onSubmit} isFetching={props.isFetching}/>
            </div>
    )
}

const ProfileForm = (props)=>{
    return(

                <form className={s.profile_form} onSubmit={props.handleSubmit}>
                    <Field name="name" type="text"  component={Input} placeholder="Имя" validate={[required]}/>
                    <Field name="soName" type="text"  component={Input} placeholder="Фамилия" validate={[required]}/>
                    <Field name="company" type="text"  component={Input} placeholder="Компания" />
                    <Field name="about" type='text' component={Textarea} placeholder="О вас" validate={[required]} />
                    <button className='control_button' disabled={props.submitting || props.error}>Отправить</button>
                </form>

    )
}
const ProfileFormReduxForm = reduxForm({form: 'signupProfile-form'})(ProfileForm)





const ProfileFormBlock = (props)=>{
    return(

                <div className={s.profile_form_wr}>


                    <div className={s.add_photo_row}>
                        <div className={s.photo_cont}></div>
                        <p className={s.add_photo}>Добавить фото</p>
                    </div>
                    <ProfileFormReduxForm />

            </div>

    )
}




const SignUpBlock = (props) => {




    return  (
            <>
            <BackGround />
                <div className="fullpage_container">
                    <div className={s.signup_block}>
                    {props.signUpState === 'signUpForm' ?
                   <ProfileFormBlock profileId={props.profileId} email={props.email}
                                  login={props.login} regDate={props.regDate}/> : <SignUpFormBlock
                        isFetching={props.isFetching} sendSignUpRequest={props.sendSignUpRequest}
                        />
                    }
                    </div>
                </div>
                </>



    );
}
export default SignUpBlock;