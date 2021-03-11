import React, { useEffect, useRef, useState} from "react";
import ReactDOM from 'react-dom'
import s from "./common.module.scss";


export const Input = ({input, meta,placeholder, ...props}) =>{
    return (

                <div className={s.input_wr}>
                    <p className={s.placeholder}>{placeholder}</p>
                    <input className={meta.touched && meta.error && s.danger} {...input} { ...props} />
                    {meta.touched && meta.error && <span className={s.input_danger}>{meta.error}</span>}
                </div>
    )
}

export const Textarea = ({input, meta, placeholder, ...props}) =>{
    const textareaRef = useRef(null);
    useEffect(()=>{
        console.log( ReactDOM.findDOMNode(textareaRef.current).style)
    }, [])
    useEffect(() => {
        textareaRef.current.style.height = "50px";
        const scrollHeight = textareaRef.current.scrollHeight;
        textareaRef.current.style.height = scrollHeight + "px";
    }, [input.value]);

    return (

            <div className={s.textarea_wr}>
                <p className={s.placeholder}>{placeholder}</p>
                <textarea ref={textareaRef} cols="2" rows="3"  className={meta.touched && meta.error && s.danger} {...input} { ...props} />
                {meta.touched && meta.error && <span className={s.input_danger}>{meta.error}</span>}
            </div>
    )
}


export const Select = () =>{
    return(
            <p>gj</p>
    )
}


export const PasswordScoreInput = ({input, meta, placeholder, ...props}) =>{
        let strengthValue = 'none'
        let strengthText = ''

        if(input.value === ''){
            strengthValue = 'none'
            strengthText = ''

        }
        else if(input.value.length <= 4 && input.value.length >= 1){
            strengthValue = 'tooWeak'
            strengthText = 'Слишком слабый пароль'
            meta.error = ' '
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
                <p className={s.placeholder}>{placeholder}</p>

                <input className={meta.touched && meta.error && s.danger} {...input} {...props} />
                {meta.touched && meta.error && <span className={s.input_danger}>{meta.error}</span>}
                {strengthValue !== 'none' ?  <div className={s.password_strength}><div className={s[strengthValue]}></div>
                    <p>{strengthText}</p></div> : ''}
            </div>

    )

}



export const Button = () =>{

}