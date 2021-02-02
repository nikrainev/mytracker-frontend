import React from 'react';
import s from './yourprofile.module.scss'
import {EditInput, EditTextarea} from "../../../common/editinput";

class YourProfile extends React.Component{


    state = {
        userNameEditMode: false,
        userSoNameEditMode: false,
        userCompanyEditMode: false,
        userDescriptionEditMode: false,
        name: this.props.name,
        soName: this.props.soName,
        company: this.props.company,
        description: this.props.description
    }



    reloadNameInput =(e) =>{
        this.setState({name: e.currentTarget.value})
    }
    reloadSoNameInput =(e) =>{
        this.setState({soName: e.currentTarget.value})
    }
    reloadCompanyInput =(e) =>{
        this.setState({company: e.currentTarget.value})
    }
    reloadDescriptionTextarea =(e) =>{
        this.setState({description: e.currentTarget.value})
    }

    rewriteTextarea = () =>{
        this.setState({description: this.props.description.split('\n').join('<br />')})
    }






    nameHandler = (inputState) =>{
     this.setState({userNameEditMode: inputState})
        if(!inputState && this.state.name !== this.props.name){
          this.props.putProfileInfo({name: this.state.name})
        }

    }

    soNameHandler = (inputState) =>{
     this.setState({userSoNameEditMode: inputState})
        if(!inputState && this.state.soName !== this.props.soName){
            this.props.putProfileInfo({soName: this.state.soName})
        }
    }

    companyHandler = (inputState) =>{
    this.setState({userCompanyEditMode: inputState})
        if(!inputState && this.state.company !== this.props.company){
            this.props.putProfileInfo({company: this.state.company})
        }
    }

    descriptionHandler = (inputState) =>{
    this.setState({userDescriptionEditMode: inputState})
        if(!inputState && this.state.description !== this.props.description){
            this.props.putProfileInfo({description: this.state.description})
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps !== this.props){
         this.setState({name: this.props.name,
             soName: this.props.soName,
             company: this.props.company,
             description: this.props.description})
        }
    }
    componentDidMount() {
        this.rewriteTextarea()
    }


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
                                <EditInput inputText={this.props.name} putInfo={this.props.putProfileInfo} name={"name"} placeholder={"Введите ваше имя"}/>
                                <EditInput inputText={this.props.soName} putInfo={this.props.putProfileInfo} name={"soName"} placeholder={"Введите вашу фамилию"}/>
                                <EditInput inputText={this.props.company} putInfo={this.props.putProfileInfo} name={"company"} placeholder={"Введите вашу компанию"}/>
                                <EditTextarea inputText={this.props.description} putInfo={this.props.putProfileInfo} name={"description"} placeholder={"Введите описание"} />



                            </div>
                            <button className='control_button'>Сохранить</button>
                        </div>

                    </div>
                </div>
        )
    }

}




export default YourProfile;