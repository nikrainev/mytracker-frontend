import React from 'react';
import Graphic from "../../../graphic/graphic";
import styled from 'styled-components'

const KeyNumbersWr  = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;
@media screen and (max-width: 500px){
justify-content: space-between;
margin-bottom: 1px;
}
`

const KeyNumberBlock = styled.div`
    overflow: hidden;
    position: relative;
    width: 200px;
    padding-bottom: 200px; // пропорции блока определяются здесь
    margin-right: 11px;
    @media screen and (max-width: 500px){
    width: calc(50% - 6px);
    padding-bottom: calc(50% - 6px);
    margin-right: 0px;
    }
    
`
const KeyNumberContent = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #f4f4f4;
    
`

const KeyNumberName = styled.p`
    font-size: 20px;
    position: absolute;
    right: 16px;
    bottom: 10px;
    @media screen and (max-width: 360px){
    font-size: 16px;
    }
`

const KeyNumber = styled.p`
    font-size: 40px;
    position: absolute;
    left: 16px;
    top: 10px;
`
const Daystat = (props) => {

    return  (
            <>
            <div className='container'>

                        <KeyNumbersWr>
                            <KeyNumberBlock>
                                <KeyNumberContent>
                                    <KeyNumber>{props.summaryInfo.dayClicks}</KeyNumber>
                                    <KeyNumberName>Клики</KeyNumberName>
                                </KeyNumberContent>
                            </KeyNumberBlock>
                            <KeyNumberBlock>
                                <KeyNumberContent>
                                    <KeyNumber>{props.summaryInfo.dayUsers}</KeyNumber>
                                    <KeyNumberName>Пользователи</KeyNumberName>
                                </KeyNumberContent>
                            </KeyNumberBlock>

                        </KeyNumbersWr>



            </div>
            <div className="container">
                <Graphic graphicData={props.graphicData}/>
            </div>
                </>




    )
}
export default Daystat;