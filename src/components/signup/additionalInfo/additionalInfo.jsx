import React from "react";
import s from "./additionalInfo.module.scss"
import {Field, reduxForm} from "redux-form";
import {Button, FormFetching, Input, Textarea} from "../../common/formControls";
import {minLength, required} from "../../../utils/validation";







const ProfileForm = (props)=>{
    return(

            <form className={s.profile_form} onSubmit={props.handleSubmit}>

                <Field name="name" type="text"  component={Input} placeholder="Имя" validate={[required, minLength]}/>
                <Field name="soName" type="text"  component={Input} placeholder="Фамилия" validate={[required, minLength]}/>
                <Field name="company" type="text"  component={Input} placeholder="Компания" />
                <Field name="about" type='text' component={Textarea} placeholder="О вас"  />
                <Button primary  disabled={props.submitting  || (props.invalid && props.anyTouched) || props.isFetching} type='submit'>Отправить</Button>
            </form>

    )
}
const ProfileFormReduxForm = reduxForm({form: 'signupProfile-form'})(ProfileForm)





const AdditionalInfo = (props)=>{

    const onSubmit = (values) =>{
        props.sendAdditionalInfo(values.name, values.soName, values.company, values.about)
    }

    return(

            <div className={s.profile_form_wr}>
                <div className={s.email}><p>{props.email}</p></div>
                <div className={s.add_photo_row}>
                    <div className={s.photo_cont} />
                    <p className={s.add_photo}>Добавить фото</p>
                </div>
                <FormFetching isFetching={props.isFetching}/>
                <ProfileFormReduxForm onSubmit={onSubmit}  />

            </div>

    )
}


export default AdditionalInfo