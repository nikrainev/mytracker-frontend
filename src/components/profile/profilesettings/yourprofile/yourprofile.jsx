import React from 'react';
import s from './yourprofile.module.scss'

class YourProfile extends React.Component{
    state = {
        userNameEditMode: false,
        userSoNameEditMode: false,
        userCompanyEditMode: false,
        userDescriptionEditMode: false,
        userName: this.props.userName,
        userSoName: this.props.userSoName,
        userCompany: this.props.userCompany,
        userDescription: this.props.userDescription
    }
    reloadSoNameInput =(e) =>{
        this.setState({userSoName: e.currentTarget.value})
    }



    reloadNameInput = () =>{
        this.props.reloadInput(this.name_input.current.value)
    }
    reloadDescriptionTextarea = () =>{
        this.props.reloadTextarea(this.description_input.current.value)
    }

    editMode1 = "tgh";
    editMode2 = "";
    editMode3 = "";
    editMode4 = "";

    render (){
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
                                <div className={"withedit-block " +this.editMode1} >
                                    <div className="withedit-current">{this.state.userName}</div>
                                    <input onChange={this.reloadNameInput} ref={this.name_input} type="text" className='plain_input'
                                           value={this.state.userName} placeholder='Введите ваше имя'/>
                                </div>
                                <div className="withedit-block">
                                    <div className="withedit-current">{this.state.userSoName}</div>
                                    <input onChange={this.reloadSoNameInput} type="text" className='plain_input'
                                           placeholder='Введите вашу фамилию' value={this.state.userSoName}/>
                                </div>
                                <div className="withedit-block">
                                    <div className="withedit-current">{this.state.userCompany}</div>
                                    <input  type="text" className='plain_input'  placeholder='Ваша компания' value={this.state.userCompany} />
                                </div>
                                <div className="withedit-block">
                                    <div className="withedit-current">{this.state.userDescription}</div>
                                    <textarea onChange={this.reloadDescriptionTextarea} ref={this.description_input}
                                              className='plain_textarea' value={this.state.userDescription} id="" cols="30"
                                              rows="10" placeholder='Добавьте описание о себе'></textarea>
                                </div>



                            </div>
                            <button className='control_button'>Сохранить</button>
                        </div>

                    </div>
                </div>
        )
    }

}




export default YourProfile;