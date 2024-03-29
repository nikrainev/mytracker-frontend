import React, { useEffect, useRef, useState} from "react";

import s from "./common.module.scss";
import styled from 'styled-components'

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


let ButtonJSX = (props) =>{
    return(
            <button {...props}>
                {props.icon && <IconCont ><img src={props.icon} alt=""/></IconCont>}
                <span>{props.children}</span>
            </button>
    )
}

const IconCont = styled.div`
    width: 16px;
    height: 16px;
    margin-right: 5px;
    img{
        width: 100%;
        
    }
   
`

const ButtonStyled = styled(ButtonJSX)`
    background: ${props=> props.primary ? "#0078d4" : "white" };
    color: ${props=> props.primary ? "#fff" : "#201f1e"};
    font: inherit;
    padding: ${props => props.icon ? "6px 21px 8px 21px" : "8px 21px 9px 21px"};
    font-weight: 600;
    letter-spacing: 0.4px;
    border: 1px solid  ${props => props.primary ? "#0078d4" : "#323130"};
    font-size: 13px;
    outline: none;
    cursor: pointer;
    text-align: center;
    border-radius: 2px;
    margin-bottom: 10px;
    line-height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    
    &:hover{
    background: ${props=> props.primary ? "#106ebe" : "#f3f2f1" };
    color: ${props=> props.primary ? "#fff" : "#201f1e"};
    border: 1px solid  ${props => props.primary ? "#106ebe" : "#323130"};
    }
    &:active{
    background: ${props=> props.primary ? "#005a9e" : "#edebe9" };
    color: ${props=> props.primary ? "#fff" : "#201f1e"};
    border: 1px solid  ${props => props.primary ? "#005a9e" : "#323130"};
    }
`

const DisabledStyled = styled.span`
    padding: 9px 22px 10px 22px;
    font-weight: 600;
    letter-spacing: 0.4px;
    font-size: 13px;
    border-radius: 2px;
    background-color: #f3f2f1;
    color: #a19f9d;
    line-height: 100%;
    margin-bottom: 10px;
    display: block;
    box-sizing: border-box;
    text-align: center;
`

export const Button = (props) =>{

    return (props.disabled  ?<DisabledStyled {...props} /> : <ButtonStyled {...props} />)

}

export const FormFetching = (props) =>{
    return  <div className={props.isFetching === true ? s.loading_bar + " " + s.active : s.loading_bar} />
}