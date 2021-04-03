import React from "react";
import s from "./additionalInfo.module.scss"
import {Field, reduxForm} from "redux-form";
import {Button, Input, Textarea} from "../../../common/formControls";
import {required} from "../../../../utils/validation";







const ProfileForm = (props)=>{
    return(

            <form className={s.profile_form} onSubmit={props.handleSubmit}>
                <Field name="name" type="text"  component={Input} placeholder="Имя" validate={[required]}/>
                <Field name="soName" type="text"  component={Input} placeholder="Фамилия" validate={[required]}/>
                <Field name="company" type="text"  component={Input} placeholder="Компания" />
                <Field name="about" type='text' component={Textarea} placeholder="О вас" validate={[required]} />
                <Button primary className='control_button' disabled={props.submitting || props.error}>Отправить</Button>
            </form>

    )
}
const ProfileFormReduxForm = reduxForm({form: 'signupProfile-form'})(ProfileForm)





const AdditionalInfo = (props)=>{
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


export default AdditionalInfo