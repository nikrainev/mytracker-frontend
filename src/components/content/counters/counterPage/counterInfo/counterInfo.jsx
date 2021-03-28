import React from "react";
import s from './counterInfo.module.scss'
import PixelCodeBlock from "../../pixelcode/pixelCode";
import styled from "styled-components"

const KeyNumbersWr = styled.div`
display: flex;
justify-content: space-between;
width: 100%;
margin-bottom: 12px;
@media screen and (max-width: 600px) {
  flex-wrap: wrap;
  margin-bottom: 0px;
}
`

const KeyNumberBlock = styled.div`
width: calc(50% - 6px);
display: flex;
justify-content: flex-start;
height: 94px;
background: #f4f4f4;
@media screen and (max-width: 600px) {
  width: 100%;
  margin-bottom: 12px;
}
`

const KeyNumber = styled.div`
width: 94px;
height: 100%;
text-align: center;
display: flex;
justify-content: center;
align-items: center;
p{
font-size: 30px;

}

`

const KeyNumberName = styled.div`
width: calc(100% - 94px);
height: 100%;
display: flex;
align-items: center;
justify-content: flex-start;

p{
padding-right: 10px;
}
`
const CounterDesc = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;
height: 52px;
background: #f4f4f4;
margin-bottom: 12px;
`
const CounterDescLabel = styled.div`
width: 160px;
p{
    font-size: 16px;
    padding-left: 12px;
    color: #616161;
}
@media screen and (max-width: 500px){
  width: 120px;
  p{
    font-size: 14px;
  }
}
`
const CounterDescText = styled.div`
width: calc(100% - 160px);
@media screen and (max-width: 500px){
  width: calc(100% - 120px);
  p{
    font-size: 14px;
  }
}
`


const CounterInfo = (props) => {

    return (
            <>
            <div className="container h1-block"><h1 className="h1">{props.counterInfo.name}</h1></div>

            <div className="container">
                <div className={`${s.row}  row`}>



                    <div className={`${s.counterInfo} col-6`}>
                        <KeyNumbersWr>
                            <KeyNumberBlock>
                                    <KeyNumber><p>{props.counterInfo.dayusers}</p></KeyNumber>
                                    <KeyNumberName><p>Пользователи за день</p></KeyNumberName>
                            </KeyNumberBlock>
                            <KeyNumberBlock>
                                    <KeyNumber><p>{props.counterInfo.allusers}</p></KeyNumber>
                                    <KeyNumberName><p>Пользователей всего</p></KeyNumberName>
                            </KeyNumberBlock>
                        </KeyNumbersWr>

                        <CounterDesc>
                            <CounterDescLabel><p>Id счётчика</p></CounterDescLabel>
                            <CounterDescText><p>{props.counterInfo._id}</p></CounterDescText>
                        </CounterDesc>

                        <CounterDesc>
                            <CounterDescLabel><p>Адрес счётчика</p></CounterDescLabel>
                            <CounterDescText><p>{props.counterInfo.domen}</p></CounterDescText>
                        </CounterDesc>

                        <CounterDesc>
                            <CounterDescLabel><p>Владелец</p></CounterDescLabel>
                            <CounterDescText><p>{props.counterInfo.login}</p></CounterDescText>
                        </CounterDesc>



                    </div>
                    <div className="col-6">
                      <PixelCodeBlock pixelCode={props.counterInfo.pixelCode} />
                    </div>
                </div>
            </div>
                </>
    )
}





export default CounterInfo