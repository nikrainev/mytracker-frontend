import React, {useState, useEffect} from 'react';
import styled, {css} from 'styled-components'
import mongoDate from "../../../utils/mongoDate";
const Col = styled.div`
 display: block;
 background: #0063b1;
 height: ${props => props.height};
 width: 10px;
 @media screen and (max-width: 1200px){
  width: 6px;
 }
 
`


const ColInfo = styled.div`
  width: 120px;
  height: 65px;
  box-shadow: 0px 0px 5px #c3c3c3;
  display: none;
  border-radius: 5px;
  position: absolute;
  top: 0px;
  z-index: 2;
  margin-top: 20px;
  background: white;
  justify-content: flex-start;
  align-items: flex-start;
  ${(props)=>{
    switch (props.show) {
        case 'showLeft':
            return css`display: flex;
                       right: 0px;
                      `
        case 'showRight':
            return css`display: flex`
        default:
          return css`display: none`
}
}}
`

const ColBlock = styled.div`
height: 100%;
width: 2.0833%;
display: block;
position: relative;
&:hover{
background: #e0e0e0;
}
`



const ColWr = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: flex-end;
position: relative;
cursor: pointer;

`

const ColTime = styled.p`
       font-size: 12px;
    text-align: left;
    padding-top: 3px;
`

const ColNumber = styled.span`
    color: #00A7CF;
    font-size: 24px;
    padding-left: 10px;
    padding-top: 2px;
`

const ColTimesRow = styled.div`
    padding-left: 8px;
    padding-top: 6px;
`

const ColDay = styled.p`
font-size: 14px;
color: gray;
`


const Graphiccol = (props) => {
    let colheight = props.colHeight*110+'px'
    const [infoState, setInfoState] = useState('hidden')

    let changeInfoState = (e) =>{
        if(window.innerWidth - e.clientX < 200){
            setInfoState('showLeft')
        }
        else{
            setInfoState('showRight')
        }
    }


    return(
            <ColBlock onMouseOver={(e)=>{changeInfoState(e)}} onMouseOut={()=>{setInfoState('hidden')}}>
                <ColInfo show={infoState}>
                    <ColNumber>{props.colValue}</ColNumber>
                    <ColTimesRow>
                        <ColDay>{mongoDate(props.colData).comparativeDate}</ColDay>
                        <ColTime>{mongoDate(Date.parse(props.colData)).time + "-" + mongoDate(Date.parse(props.colData)+ 60*60*1000).time}</ColTime>
                    </ColTimesRow>

                </ColInfo>
                <ColWr>
                    <Col height={colheight}/>
                </ColWr>
            </ColBlock>
    )
}
export default Graphiccol;