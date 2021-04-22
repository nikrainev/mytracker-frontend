import React from 'react';
import s from './yourprofile.module.scss'
import {EditInput, EditTextarea} from "../../../common/editinput";
import AvatarContainer from "../avatar/avatarContainer";

const YourProfile = (props) =>{

        return(
                <div className="container">
                    <div className={s.profile_cont}>
                        <div className={s.photo_col}>
                            <AvatarContainer isRegForm={false} />
                        </div>
                        <div className={s.info_col}>
                            <div className={s.info_inputs}>
                                <EditInput inputText={props.name} putInfo={props.putProfileInfo} name={"name"} placeholder={"Введите ваше имя"}/>
                                <EditInput inputText={props.soName} putInfo={props.putProfileInfo} name={"soName"} placeholder={"Введите вашу фамилию"}/>
                                <EditInput inputText={props.company} putInfo={props.putProfileInfo} name={"company"} placeholder={"Введите вашу компанию"}/>
                                <EditTextarea inputText={props.description} putInfo={props.putProfileInfo} name={"description"} placeholder={"Введите описание"} />
                            </div>
                        </div>

                    </div>
                </div>
        )

}




export default YourProfile;