import React, {useRef, useState} from "react";
import s from "./pixelCode.module.scss";
import {Button} from "../../../common/formControls";

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
                    <Button primary onClick={copyToClipboard}>Скопировать код</Button>
                    {copySuccess === 'copied' ? <div className={s.copied_label}>Скопировано</div> : ''}
                </div>

            </div>
    )
}

export default PixelCodeBlock