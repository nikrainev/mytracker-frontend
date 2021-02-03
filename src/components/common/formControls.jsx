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

