import React from 'react';
import s from "./profileLine.module.scss";
import emptyAvatar from '../../../assets/icons/menu/profile.svg'

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
                <p>{props.description}</p>
            </div>
            <div className={s.buttons}>
                {props.buttonsComponent}
            </div>

        </div>
    )
}


export default ProfileLine