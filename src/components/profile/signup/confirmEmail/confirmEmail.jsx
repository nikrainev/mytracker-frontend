import React from "react";
import s from "./confirmEmail.module.scss"
import {Button} from "../../../common/formControls";

const ConfirmEmail = (props) =>{
    return(
            <div className={s.confirm_block}>
                <h1 className={s.h1}>Подтвердите почту</h1>
                <p>На адрес <b>{props.email}</b> отправлено письмо с инструкцией для его подтверждения.
                    Письмо действительно 1 час с момента отправки.
                </p>
                <p>
                    Если вы не получили письмо, проверьте папку Спам или запросите
                    новое письмо.
                </p>
                <Button>Получить новое письмо</Button>
            </div>
    )
}


export default ConfirmEmail