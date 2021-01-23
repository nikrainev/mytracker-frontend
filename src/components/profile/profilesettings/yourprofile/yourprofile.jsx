import React from 'react';
import s from './yourprofile.module.scss'

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

    render (){
        console.log('render')
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
                                <div  onClick={() =>{this.nameHandler(true)}}  className="withedit-block">
                                    {this.state.userNameEditMode
                                            ?
                                            <input onChange={this.reloadNameInput} ref={this.name_input} type="text" className='plain_input'
                                                   value={this.state.name} placeholder='Введите ваше имя'
                                                   onBlur={() => {this.nameHandler(false)}} autoFocus={true}/>
                                            :
                                            <div className="withedit-current">{this.props.name}</div>
                                    }


                                </div>
                                <div onClick={() =>{this.soNameHandler(true)}} className="withedit-block">
                                    {this.state.userSoNameEditMode
                                            ?
                                            <input onChange={this.reloadSoNameInput} type="text" className='plain_input'
                                                   placeholder='Введите вашу фамилию' value={this.state.soName}
                                                   onBlur={() => {this.soNameHandler(false)}} autoFocus={true}/>
                                            :
                                            <div className="withedit-current">{this.props.soName}</div>
                                    }



                                </div>
                                <div onClick={() =>{this.companyHandler(true)}} className="withedit-block">
                                    {this.state.userCompanyEditMode
                                            ?
                                            <input onChange={this.reloadCompanyInput} type="text" className='plain_input'
                                                   placeholder='Ваша компания' value={this.state.company}
                                                   onBlur={() => {this.companyHandler(false)}} autoFocus={true}/>
                                            :
                                            <div className="withedit-current">{this.props.company}</div>
                                    }

                                </div>
                                <div onClick={() =>{this.descriptionHandler(true)}} className="withedit-block">
                                    {this.state.userDescriptionEditMode
                                            ?
                                            <textarea onChange={this.reloadDescriptionTextarea}
                                                      ref={this.description_input}
                                                      className='plain_textarea' value={this.state.description}
                                                      id="" cols="30"
                                                      rows="10" placeholder='Добавьте описание о себе'
                                                      onBlur={() => {this.descriptionHandler(false)}} autoFocus={true}> </textarea>
                                            :
                                            <div className="withedit-current">{this.props.description}</div>
                                    }

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