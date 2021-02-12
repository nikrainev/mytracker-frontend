import React from "react";

export const offsetText = (text) =>{
    let textarr = text.split('\n');
    const isUrl = /^((ftp|http|https):\/\/)?(www\.)?([A-Za-zА-Яа-я0-9]{1}[A-Za-zА-Яа-я0-9\-]*\.?)*\.{1}[A-Za-zА-Яа-я0-9-]{2,8}(\/([\w#!:.?+=&%@!\-\/])*)?/;
    for (let i = 0; i < textarr.length; i=i+2){
        textarr.splice(i+1,0,<br />)
    }

    for (let lineNumber = 0; lineNumber < textarr.length; lineNumber++){
        if(typeof textarr[lineNumber] === 'string'){
            let line = textarr[lineNumber].split(' ')
            for (let wordNumber = 0; wordNumber < line.length; wordNumber++){
                if(line[wordNumber] == '') {
                    line[wordNumber] = <span>&nbsp;</span>
                }
                else{
                    line[wordNumber] = line[wordNumber]+' ';
                }

                if(isUrl.test(line[wordNumber])){
                    line[wordNumber] = <a target="blank" href={'https://'+line[wordNumber]}>{line[wordNumber]}</a>
                }
            }
            textarr[lineNumber] = line
        }

    }
    return(
            textarr
    )
}