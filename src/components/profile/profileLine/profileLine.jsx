import React, {useEffect, useState, useRef} from 'react';
import s from "./profileLine.module.scss";
import emptyAvatar from '../../../assets/icons/menu/profile.svg'
import {offsetText} from '../../../utils/textTransformation'

const Description = (props) =>{

    const blockRef = useRef(0)
    const openRef = useRef(0)
    const [descriptionVisibility, setDescriptionVisibility] = useState(false)


        const handleOutsideClick = (e) => {

            if(e.target.id === openRef.current.id) return ;
            if(blockRef.current && e.target.closest(`.${blockRef.current.className}`)) return;

                setDescriptionVisibility(false)


        }


    useEffect(() => {
        document.addEventListener('click', handleOutsideClick);
        return () => {
            document.removeEventListener('click', handleOutsideClick);
        }}, [])



    let onClickHandler = () =>{
        setDescriptionVisibility((descriptionVisibility)=> !descriptionVisibility)
    }


    return(

            <div className={s.description_wr}>

                {descriptionVisibility &&
                        <div ref={blockRef} className={s.description_block}>
                            <div className={s.company_line}><span>Компания:</span><p>{props.company}</p></div>
                            <p>{offsetText(props.description)}</p>
                        </div>}

                <p ref={openRef} onClick={()=>{onClickHandler()}}  id={props.id} className={s.info_p}>О пользователе</p>
            </div>

    )
}





const ProfileLine = (props) => {
    return  (
        <div key={props.key} className={s.line}>
            <div className={s.names_row} >
                <div className={s.avatar_cont}>
                    {props.avatar === 'none' ? <img className={s.emptyAvatar} src={emptyAvatar} alt=""/> : <img className={s.avatar} src={props.avatar} alt=""/>}
                </div>
                <p>{props.name}</p>
                <p>{props.soName}</p>
            </div>
            <div className={s.company}>
                <p>{props.company}</p>
            </div>
            <div className={s.description}>
                {(props.company || props.description) && <Description id={props._id} company={props.company}  description={props.description}/>}
            </div>
            <div className={s.buttons}>
                {props.buttonsComponent}
            </div>

        </div>
    )
}


export default ProfileLine