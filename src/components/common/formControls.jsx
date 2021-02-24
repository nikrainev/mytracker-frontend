import React from "react";
import s from "../profile/login/login.module.scss";
export const Input = ({input, meta, ...props}) =>{
    return (

                <div className={s.input_wr}>
                    {meta.touched && meta.error && <span className={s.input_danger}>{meta.error}</span>}
                    <input className="plain_input" {...input} {...props} />
                </div>
    )
}

export const Select = () =>{
    return(
            <p>gj</p>
    )
}


export const PasswordScoreInput = ({input, meta, ...props}) =>{
        let strengthValue = 'none'
        let strengthText = ''

        if(input.value === ''){
            strengthValue = 'none'
            strengthText = ''
        }
        else if(input.value.length <= 4 && input.value.length >= 1){
            strengthValue = 'tooWeak'
            strengthText = 'Слишком слабый пароль'
        }
        else if(input.value.length <= 6){
            strengthValue = 'weak'
            strengthText = 'Слабый пароль'
        }
        else if(input.value.length <= 8){
            strengthValue = 'medium'
            strengthText = 'Средний пароль'
        }
        else{
            strengthValue = 'good'
            strengthText = 'Хороший пароль'
        }

    return (

            <div className={s.input_wr}>
                {meta.touched && meta.error && <span className={s.input_danger}>{meta.error}</span>}
                <input className="plain_input" {...input} {...props} />
                {strengthValue !== 'none' ?  <div className={s.password_strength}><div className={s[strengthValue]}></div>
                    <p>{strengthText}</p></div> : ''}
            </div>

    )

}
