import React, {useEffect, useState} from "react";
import s from "./success.module.scss"
import successImg from '../../../assets/icons/done.svg'
import {Redirect} from "react-router-dom";
const Success = () =>{
    const [redirect, setRedirect] = useState(false)
    useEffect(()=>{
        setTimeout(()=>{setRedirect(true)},3000)
    },[])


    return(
            <div className={s.successBlock}>
                {redirect && <Redirect to={'/summary'} />}
                <img src={successImg} alt=""/>
                <p>Вы успешно зарегистрировались</p>
            </div>
    )
}


export default Success