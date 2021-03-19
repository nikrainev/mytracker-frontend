import React, {useState, useEffect, useRef} from 'react';
import Graphiccol from "./graphiccol/graphiccol";
import styled from 'styled-components'
import ReactDOM from "react-dom";

let GraphicWr = styled.div`
width: 100%;
height: 250px;
background: #f4f4f4;
position: relative;
`

let GraphicColsWR = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    height: 200px;
    width: calc(100% - 24px);
    margin: auto;
    
`

let GraphicBottom = styled.div`
    position: relative;
    width: calc(100% - 24px);
    border-top: 1px solid gray;
    margin: auto;
    margin-top: 8px;
    padding-top: 3px;
    
    p{
     color: gray;
     position: absolute;
     font-size: 16px;
     @media screen and (max-width: 500px){
     font-size: 13px;
     }
    }
    div{
            width: 9px;
            height: 9px;
            border-radius: 50%;
            display: block;
            background: gray;
            position: absolute;
            top: -5px;
    }
`

let GraphicName = styled.h2`
    display: block;
    position: absolute;
    left: 14px;
    top: 8px;
    font-size: 20px;
    visibility: ${props => (props.hide ? `hidden` : `visible`)};;
   
`

let NowP = styled.p`
  left: 0%;
   &:before{
   left: 1.04%;
   }
`

let Hours24P = styled.p`
left: 49%;
&:before{
   left: -4px;
   }

`

let Hours48P = styled.p`
right: 0%;
&:before{
   right: 4px;
   }
`

let NowDot = styled.div`
  left: calc(1.04% - 5px);
`

let Hours24Dot = styled.div`
  left: calc(49.04% - 5px);
`

let Hours48Dot = styled.div`
  right: calc(1.04% - 5px);
`


const Graphic = (props) => {
    const [hideH, setHideH] = useState(false)
    const hideRef = useRef(false)
    const hRef = useRef(null);

    const changeHState = (e) =>{


        if(hRef.current.getBoundingClientRect().x + hRef.current.getBoundingClientRect().width > e.clientX - 50){

            //hideRef.current = true
            setHideH(true)

        }
        else if( hRef.current.getBoundingClientRect().x + hRef.current.getBoundingClientRect().width < e.clientX - 50){
            //hideRef.current = false
            setHideH(false)
        }
        else{

        }

    }




    let maxUsersCount = props.graphicData.map((coldata) => (coldata.usersCount))
    maxUsersCount = Math.max.apply(null, maxUsersCount)

    let graphicColElements = props.graphicData.map((coldata, index) => <Graphiccol key={coldata.hour} colData={coldata.hour} colHeight={coldata.usersCount / maxUsersCount}
                                                                                   colValue={coldata.usersCount}/>)

    return  (
            <GraphicWr onMouseLeave={()=>{setHideH(false)}}>

                <GraphicName ref={hRef} hide={hideH}>Пользователи в час</GraphicName>
               <GraphicColsWR onMouseMove={(e)=>{changeHState(e)}}>
                   {graphicColElements}
               </GraphicColsWR>

              <GraphicBottom>
                  <NowDot />
                  <Hours24Dot />
                  <Hours48Dot />
                  <NowP>48 часов назад</NowP>
                  <Hours24P>24 часа назад</Hours24P>
                  <Hours48P>Сейчас</Hours48P>
              </GraphicBottom>
            </GraphicWr>


    )
}
export default React.memo(Graphic);