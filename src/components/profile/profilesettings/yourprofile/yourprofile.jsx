import React from 'react';
import s from './yourprofile.module.scss'
const YourProfile = (props) =>{
    let name_input = React.createRef()
    let description_input = React.createRef()
    let reloadNameInput = () =>{
        props.reloadInput(name_input.current.value)
    }
    let reloadDescriptionTextarea = () =>{
        props.reloadTextarea(description_input.current.value)
    }
    return(
            <div className="container">
               <div className={s.profile_cont}>
                   <div className={s.photo_col}>
                       <div className={s.photo_wr}>
                           <p>Добавить фото</p>
                       </div>
                   </div>
                   <div className={s.info_col}>
                       <div className={s.info_inputs}>
                           <input onChange={reloadNameInput} ref={name_input} type="text" className='plain_input'  value={props.userName}  placeholder='Введите ваше имя'/>
                           <textarea onChange={reloadDescriptionTextarea} ref={description_input} className='plain_textarea' value={props.userDescription} id="" cols="30"  rows="10" placeholder='Добавьте описание о себе'></textarea></div>
                       <button className='control_button'>Сохранить</button>
                   </div>

               </div>
            </div>
    )
}
export default YourProfile;