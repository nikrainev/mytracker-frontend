import React from "react";
import s from "./confirmEmail.module.scss"
import {Button} from "../../../common/formControls";

const ConfirmEmailRef = (props) =>{
    return(
            <div className={s.confirm_block}>
                <h1 className={s.h1}>Подтверждение почты</h1>

            </div>
    )
}


export default ConfirmEmailRef