import React, {useEffect, useState} from "react";
import s from "./confirmEmailRef.module.scss"
import loading from '../../../assets/icons/loading.svg'
import {BackGround} from "../../common/background";
import clockImg from '../../../assets/icons/clockError.svg'
import errorImg from '../../../assets/icons/error.svg'
import successImg from '../../../assets/icons/done.svg'
import {NavLink, Redirect} from "react-router-dom";
const FetchingBlock = () =>{
    return(
            <div className={s.fetching_block}>
                <img src={loading} alt=""/>
            </div>
    )
}

const ExpiredBlock = (props) =>{
    return(
            <div className={s.block}>
                <img src={clockImg} alt=""/>
                <p>Прошло больше часа, cсылка больше не действительна. <NavLink to={props.isAuth ? '/signup' : '/login' }>Отправьте</NavLink> новое письмо</p>
            </div>
    )
}

const ErrorBlock = () =>{
    return(
            <div className={s.block}>
                <img src={errorImg} alt=""/>
                <p>Ошибка</p>
            </div>
    )
}



const SuccessBlock = (props) =>{
    const [redirect, setRedirect] = useState(false)
    useEffect(()=>{
        setTimeout(()=>{setRedirect(true)},3000)
    },[])


    return(
            <div className={s.block}>
                {redirect && <Redirect to={props.isAuth ? '/signup' : '/login' } />}
                <img src={successImg} alt=""/>
                <p>Почта успешно подтверждена</p>
                <NavLink to={props.isAuth ? '/signup' : '/login' }>Продолжить регистрацию</NavLink>
            </div>

    )
}


const FalseStageBlock = (props) =>{



    return(

           <Redirect to={props.isAuth ? '/signup' : '/login' } />
            )

}
const ConfirmEmailRef = (props) =>{
    const [pageState, setPageState] = useState('fetching')


    useEffect(()=>{
        if(props.confirmResult !== '' && props.isInitialized){
            setPageState(props.confirmResult)
        }

    }, [props.confirmResult, props.isInitialized])
    let blockSelector = (pageState) =>{
        switch (pageState) {
            case 'fetching':{
                return <FetchingBlock />
            }
            case 'jwt expired':{
                return <ExpiredBlock {...props}/>
            }
            case 'incorrect token':{
                return  <ErrorBlock />
            }
            case 'false stage':{
                return <FalseStageBlock {...props}/>
            }
            case 'email confirmed':{
                return <SuccessBlock {...props} />
            }
            default:{
                return  <ErrorBlock />
            }

        }
    }

    return(
            <>
                <BackGround />
                <div className="fullpage_container" >
                    <div className={s.confirm_block}>
                        {blockSelector(pageState)}
                    </div>
                </div>
            </>
    )
}


export default ConfirmEmailRef