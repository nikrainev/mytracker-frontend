import React from "react";
import loadingImg from "../../assets/icons/loading.svg";
import doneImg from "../../assets/icons/success-check.svg";
import s from "./common.module.scss"
import {offsetText} from "../../utils/textTransformation";
import {Textarea} from "./formControls";


export class EditInput extends React.Component{
    state = {
        inputText: this.props.inputText,
        inputEditMode: false,
        isFetching: false,
        wasUpdated: false
    }

    changeCondition = (inputState) =>{
        this.setState({inputEditMode: inputState})
        if(!inputState && this.state.inputText !== this.props.inputText){
                this.setState({isFetching: true})
                this.props.putInfo({[this.props.name]: this.state.inputText})
        }
    }
    reloadNameInput =(e) =>{
        this.setState({inputText: e.currentTarget.value})
    }

    componentDidUpdate(prevProps, prevState, snapshot) {

        if(prevProps !== this.props){
            this.setState({inputText: this.props.inputText})
            this.setState({isFetching: false})

            if(prevState.isFetching === true){
                this.setState({wasUpdated: true})
                setTimeout(()=>{this.setState({wasUpdated: false})}, 1000)
            }
        }
    }
    render (){
        return <div  onClick={() =>{this.changeCondition(true)}}  className={s.withedit_block}>
            {this.state.isFetching === true ? <img className={s.loading_editInput} src={loadingImg} alt=""/> : ''}
            {this.state.wasUpdated === true ? <img className={s.done_check} src={doneImg} alt=""/> : ''}
                    {this.state.inputEditMode
                            ?

                                        <div className={s.input_wr + " " + s.editInput}>
                                            <input onChange={this.reloadNameInput} value={this.state.inputText}
                                                   type="text"  placeholder={this.props.placeholder}
                                                   onBlur={() => {this.changeCondition(false)}} autoFocus={true}/>

                                        </div>
                            :
                            <div className={s.withedit_current}>{this.props.inputText === '' ? this.props.placeholder : this.props.inputText}</div>
                    }


                </div>

    }

}


export class EditTextarea extends React.Component{
    state = {
        inputText: this.props.inputText,
        inputEditMode: false,
        isFetching: false,
        wasUpdated: false
    }





    changeCondition = (inputState,e) =>{

        this.setState({inputEditMode: inputState})
        if(!inputState && this.state.inputText !== this.props.inputText){
            this.setState({isFetching: true})
            this.props.putInfo({[this.props.name]: this.state.inputText})
        }
    }
    reloadNameInput =(e) =>{
        this.setState({inputText: e.currentTarget.value})
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps !== this.props){
            this.setState({inputText: this.props.inputText})
            this.setState({isFetching: false})
            
        }

        if(prevState.isFetching === true && prevProps !== this.props){
            this.setState({wasUpdated: true})
            setTimeout(()=>{this.setState({wasUpdated: false})}, 1000)
        }
    }
    render (){
        return <div  onClick={(e) =>{this.changeCondition(true, e)}}  className={s.withedit_block}>
            {this.state.isFetching === true ? <img className={s.loading_editInput} src={loadingImg} alt=""/> : ''}
            {this.state.wasUpdated === true ? <img className={s.done_check} src={doneImg} alt=""/> : ''}
            {this.state.inputEditMode
                    ?

                    <div className={s.withedit_textarea}>
                        <Textarea meta={{error: '', touched:''}} onChange={this.reloadNameInput} input={{value:this.state.inputText}}
                                  wrap="soft"
                                  type="text"  placeholder={this.props.placeholder}
                                  cols="30" rows="10"
                                  onBlur={() => {this.changeCondition(false)}} autoFocus={true}> </Textarea>
                    </div>
                    :
                    <div className={s.withedit_current}>{this.props.inputText === '' ? this.props.placeholder :<p>{offsetText(this.props.inputText)}</p>}</div>

            }



        </div>

    }

}