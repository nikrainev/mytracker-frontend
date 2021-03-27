import React, {useState, useEffect, useRef} from 'react';
import s from '../addcounter.module.scss';
import {Field, reduxForm} from "redux-form";
import {Input, Button} from "../../../../common/formControls";
import {required} from "../../../../../utils/validation";
import loader_icon from "../../../../../assets/icons/loading.svg"

const AddCounterForm = (props) =>{

    return (

            <div className={s.addcounter_form}>
                <form onSubmit={props.handleSubmit}>
                    {props.error ? <span className={s.form_danger}>{props.error}</span> : ''}
                    <div className={props.isFetching === true ? s.loading_bar + " " + s.active : s.loading_bar}></div>
                    <Field name="counterName" type="text"  component={Input} placeholder="Название счётчика" validate={required}/>
                    <Field name="counterDomen" type="text"  component={Input} placeholder="Домен" validate={required}/>
                    <Button >Отправить</Button >
                    <button className='control_button' disabled={props.submitting || props.error}  type="submit" >Отправить</button>
                </form>
            </div>
    )
}



const AddCounterReduxForm = reduxForm({form: 'addcounter-form'})(AddCounterForm)


const PixelCodeBlock = (props) =>{

    const [copySuccess, setCopySuccess] = useState('');
    const textAreaRef = useRef(null);

    let copyToClipboard = (e) =>{
        textAreaRef.current.select();
        document.execCommand('copy');
        e.target.focus();
        setCopySuccess('copied');
        setTimeout(()=>{setCopySuccess('')}, 3000)
    };



    return(
            <div className={s.codeBlock}>
                <textarea onClick={(e)=>{e.target.select()}} ref={textAreaRef} value={props.pixelCode} name="" id="" cols="30" rows="10" className={s.codeTextarea}> </textarea>
                    <div className={s.copyButton_wr}>
                        <button className="control_button" onClick={copyToClipboard}>Скопировать код</button>
                        {copySuccess === 'copied' ? <div className={s.copied_label}>Скопировано</div> : ''}
                    </div>

            </div>
    )
}

const FetchingForm = (props) => {
    return(
            <div className={s.form_fetching}>
                <img src={loader_icon} alt=""/>
            </div>
    )
}

const Addcounterblock = (props) => {
    const onSubmit = (values) => {
        props.postCounter(values.counterName, values.counterDomen)
    }


    const blockSelector = () =>{
        switch (props.blockState) {
            case "form": return <AddCounterReduxForm onSubmit={onSubmit}/>
            case "fetching": return <FetchingForm />
            case "pixelCode": return <PixelCodeBlock pixelCode={props.pixelCode}/>
        }
    }
    const textSelector = () =>{
        switch (props.blockState) {
            case "form": return <p>Добавьте ваш счётчик <br /><br /> Выбирите название для счётчика и укажите URL с которого хотите получать данные</p>
            case "fetching": return ''
            case "pixelCode": return <div className={s.last_text}><p>Скопируйте код и вставьте его на ваш сайт через редактор кода.<br /><br />Сразу после этого в разделе данного счётчика
                начнёт отображаться статистика о новых посетителях</p><button onClick={()=>{props.makeOneMore()}} className="attractive-button">Создать другой счётчик</button></div>
        }
    }


    return (
            <>
            <div className="h1-block">
                <h1 className="h1">Счётчики</h1>
            </div>
            <div className="row">
                <div className="col-6">
                {textSelector()}
            </div>
            <div className="col-6">
              {blockSelector()}
            </div>
            </div>
            </>
    )
}
export default Addcounterblock;
export {PixelCodeBlock}