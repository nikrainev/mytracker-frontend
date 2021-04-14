import React from 'react';
import s from './yourprofile.module.scss'
import {EditInput, EditTextarea} from "../../../common/editinput";

class YourProfile extends React.Component{
    render (){
        return(
                <div className="container">
                    <div className={s.profile_cont}>
                        <div className={s.photo_col}>
                            <div className={s.photo_wr}>
                                <p>Добавить фото</p>
                            </div>
                            <input name="myFile" type="file" />
                        </div>
                        <div className={s.info_col}>
                            <div className={s.info_inputs}>
                                <EditInput inputText={this.props.name} putInfo={this.props.putProfileInfo} name={"name"} placeholder={"Введите ваше имя"}/>
                                <EditInput inputText={this.props.soName} putInfo={this.props.putProfileInfo} name={"soName"} placeholder={"Введите вашу фамилию"}/>
                                <EditInput inputText={this.props.company} putInfo={this.props.putProfileInfo} name={"company"} placeholder={"Введите вашу компанию"}/>
                                <EditTextarea inputText={this.props.description} putInfo={this.props.putProfileInfo} name={"description"} placeholder={"Введите описание"} />
                            </div>
                        </div>

                    </div>
                </div>
        )
    }

}




export default YourProfile;