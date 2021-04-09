import React, {useEffect, useState, useRef} from "react";
import s from "./confirmEmail.module.scss"
import {Button, FormFetching} from "../../common/formControls";

const ConfirmEmail = (props) =>{
    const [buttonDisabled, setButtonDisabled] = useState(false)
    const [timerSeconds, setTimerSeconds] = useState(30)
    const [showBadge, setShowBadge] = useState(false)
    const [showTimer, setShowTimer] = useState(false)
    const timer = useRef(null)

    let sendMail = () =>{
        props.sendEmail()

        timer.current = setInterval(() => {
            setTimerSeconds((timerSeconds)=>timerSeconds - 1)
        }, 1000)
        setButtonDisabled(true)
        setShowTimer(true)
        }

    useEffect(
            ()=> {
                if(timerSeconds === 0){
                    clearInterval(timer.current)
                    setButtonDisabled(false)
                    setShowTimer(false)
                    setTimerSeconds(30)
                }
                if(timerSeconds === 20){
                    setShowBadge(false)
                }
            },[timerSeconds])

    useEffect(()=>{
        if(buttonDisabled === true && props.isFetching === false){
            setShowBadge(true)
        }
    }, [props.isFetching])


    useEffect(()=>{

    }, )




    return(
            <div className={s.confirm_block}>

                <FormFetching isFetching={props.isFetching}/>
                <h1 className={s.h1}>Подтвердите почту</h1>

                <p>На адрес <b>{props.email}</b> отправлено письмо с инструкцией для его подтверждения.
                    Письмо действительно 1 час с момента отправки.
                </p>
                <p>
                    Если вы не получили письмо, проверьте папку Спам или запросите
                    новое письмо.
                </p>
                <div className={s.button_cont}>

                    <Button disabled={buttonDisabled} onClick={()=>{sendMail()}}>Получить новое письмо</Button>
                    {showBadge ?  <div className={s.sent_badge}>Письмо отправлено</div> : ''}


                </div>
                <div className={s.timer_p}>
                    {showTimer ? <p >Вы сможете отправить новое письмо<br /> через {timerSeconds} секунд</p> : ''}

                </div>


            </div>
    )
}


export default ConfirmEmail