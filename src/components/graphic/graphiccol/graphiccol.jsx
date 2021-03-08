import React, {useState, useEffect} from 'react';
import styled, {css} from 'styled-components'

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
  ${(props)=>{
    switch (props.show) {
        case 'showLeft':
            return css`display: block;
                       left: -110px`
        case 'showRight':
            return css`display: block`
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
`



const ColWr = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: flex-end;
position: relative;
cursor: pointer;
&:hover{
background: #e0e0e0;
}
`

const ColTime = styled.div`
    font-size: 11px;
    text-align: center;
    padding-top: 9px;
`

const ColNumber = styled.div`
    color: #00A7CF;
    font-size: 24px;
    padding-left: 10px;
    padding-top: 2px;
`






const Graphiccol = (props) => {
    let colheight = props.graphicvalue+'px'
    const [infoState, setInfoState] = useState('hidden')
    let changeInfoState = (e) =>{
        console.log(window.innerWidth - e.clientX)
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
                    <ColTime>{props.graphicday}</ColTime>
                    <ColNumber>{props.graphicvalue}</ColNumber>
                </ColInfo>
                <ColWr>
                    <Col height={colheight}/>
                </ColWr>
            </ColBlock>
    )
}
export default Graphiccol;