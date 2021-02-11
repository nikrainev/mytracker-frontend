import React from "react";
import loadingImg from "../../assets/icons/small-loading.svg";
import doneImg from "../../assets/icons/done.svg";
import s from "./common.module.scss"
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
            {this.state.isFetching === true ? <img className={s.loading_bar} src={loadingImg} alt=""/> : ''}
            {this.state.wasUpdated === true ? <img className={s.done_check} src={doneImg} alt=""/> : ''}
                    {this.state.inputEditMode
                            ?

                                        <div>
                                            <input onChange={this.reloadNameInput} value={this.state.inputText}
                                                   type="text" className='plain_input' placeholder={this.props.placeholder}
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

    formatedText = (text) =>{

        let textarr = text.split('\n');

        const isUrl = /^((ftp|http|https):\/\/)?(www\.)?([A-Za-zА-Яа-я0-9]{1}[A-Za-zА-Яа-я0-9\-]*\.?)*\.{1}[A-Za-zА-Яа-я0-9-]{2,8}(\/([\w#!:.?+=&%@!\-\/])*)?/;

        for (let i = 0; i < textarr.length; i=i+2){
            textarr.splice(i+1,0,<br />)
        }

        for (let lineNumber = 0; lineNumber < textarr.length; lineNumber++){
            if(typeof textarr[lineNumber] === 'string'){
                let line = textarr[lineNumber].split(' ')
                for (let wordNumber = 0; wordNumber < line.length; wordNumber++){
                    if(line[wordNumber] == '') {line[wordNumber] = <span>&nbsp;</span>}

                    if(isUrl.test(line[wordNumber])){
                        line[wordNumber] = <a target="blank" href={'https://'+line[wordNumber]}>{line[wordNumber]}</a>
                    }
                }
                textarr[lineNumber] = line
            }

        }
        return(
                <p>{textarr}</p>
        )
    }

lj

    changeCondition = (inputState,e) =>{
        if(e){
            console.log(e.target)
        }

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
            {this.state.isFetching === true ? <img className={s.loading_bar} src={loadingImg} alt=""/> : ''}
            {this.state.wasUpdated === true ? <img className={s.done_check} src={doneImg} alt=""/> : ''}
            {this.state.inputEditMode
                    ?

                    <div>
                        <textarea onChange={this.reloadNameInput} value={this.state.inputText}
                                  wrap="soft" className='plain_textarea'
                                  type="text"  placeholder={this.props.placeholder}
                                  cols="30" rows="10"
                                  onBlur={() => {this.changeCondition(false)}} autoFocus={true}> </textarea>
                    </div>
                    :
                    <div className={s.withedit_current}>{this.props.inputText === '' ? this.props.placeholder : this.formatedText(this.props.inputText)}</div>

            }



        </div>

    }

}