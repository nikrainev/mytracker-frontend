import React from 'react';
import s from './avatar.module.scss'
import profileIcon from '../../../../assets/icons/menu/profile.svg'

const Avatar = (props) =>{

    return(

            <div className={s.avatarBlock}>
                <div className={s.photo_wr}>
                    <img src={profileIcon} alt=""/>
                </div>
                <p className={s.p}>Добавить фото</p>

            </div>


    )

}




export default Avatar;