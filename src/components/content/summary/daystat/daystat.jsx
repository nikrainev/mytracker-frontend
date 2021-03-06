import React from 'react';
import s from './daystat.module.scss';
import Graphic from "../../../graphic/graphic";
import styled from 'styled-components'

const KeyNumbersWr  = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`

const KeyNumberBlock = styled.div`
    overflow: hidden;
    position: relative;
    width: calc(33.33% - 8px);
    padding-bottom: calc(33.3% - 8px); // пропорции блока определяются здесь
    background: red;
`
const KeyNumberContent = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #f00;
`

const KeyNumberName = styled.p`
font-size: 20px;
`

const KeyNumber = styled.p`
font-size: 40px;
`
const Daystat = (props) => {

    return  (
            <div className={s.container + ' container'}>
                <div className="row">
                    <div className="col-6">
                        <KeyNumbersWr>
                            <KeyNumberBlock><KeyNumberContent><KeyNumber>Клики</KeyNumber>{props.summaryInfo.dayClicks}</KeyNumberContent></KeyNumberBlock>
                            <KeyNumberBlock><KeyNumberContent><KeyNumber>Пользователи</KeyNumber>{props.summaryInfo.totalUsers}</KeyNumberContent></KeyNumberBlock>
                            <KeyNumberBlock><KeyNumberContent><KeyNumber>Конверсии</KeyNumber>{props.summaryInfo.dayClicks}</KeyNumberContent></KeyNumberBlock>
                        </KeyNumbersWr>
                    </div>
                    <div className="col-6">

                            <Graphic graphicData={props.graphicData}/>


                    </div>
                </div>
            </div>


    )
}
export default Daystat;