import React from 'react';
import s from './signup.module.scss';
import {NavLink} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import {Input, PasswordScoreInput} from "../../common/formControls";
import {required, checkLogin, checkEmail, checkPassword, passwordsMatch} from "../../../utils/validation";


const SignUpForm = (props) =>{
    return (
            <form onSubmit={props.handleSubmit}>
                {props.error ? <span className={s.form_danger}>{props.error}</span> : ''}
                <div className={props.isFetching === true ? s.loading_bar + " " + s.active : s.loading_bar}></div>
                <Field name="login" type="text"  component={Input} placeholder="Придумайте логин" validate={[required, checkLogin]}/>
                <Field name="email" type="text"  component={Input} placeholder="Ваша почта" validate={[required, checkEmail]}/>
                <Field name="password" type="password"  component={PasswordScoreInput} placeholder="Придумайте пароль" validate={[required, checkPassword]}/>
                <Field name="repeatPassword" type="password"  component={Input} placeholder="Повторите пароль" validate={[required, passwordsMatch]}/>
                <button className='control_button' disabled={props.submitting || props.error}  type="submit" >Отправить</button>
                <p className={s.dont_reg_yet}>Уже есть аккаунт? <NavLink to='/login'>Войти</NavLink></p>
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
                   <SignUpFormBlock
                             isFetching={props.isFetching} sendSignUpRequest={props.sendSignUpRequest}
                   /> : <ProfileForm profileId={props.profileId} email={props.email}
                                     login={props.login} regDate={props.regDate}/>
                    }
                </div>
            </div>


    );
}
export default SignUpBlock;