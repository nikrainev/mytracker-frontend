import React from "react";
import s from "./common.module.scss";
import styled from "styled-components"
export const Input = ({input, meta,placeholder, ...props}) =>{
    return (

                <div className={s.input_wr}>
                    <p className={s.placeholder}>{placeholder}</p>
                    <input className={meta.touched && meta.error && s.danger} {...input} { ...props} />
                    {meta.touched && meta.error && <span className={s.input_danger}>{meta.error}</span>}
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
                <input className={meta.touched && meta.error && s.danger} {...input} {...props} />
                {strengthValue !== 'none' ?  <div className={s.password_strength}><div className={s[strengthValue]}></div>
                    <p>{strengthText}</p></div> : ''}
            </div>

    )

}



export const Button = () =>{

}