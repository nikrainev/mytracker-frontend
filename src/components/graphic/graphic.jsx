import React from 'react';
import Graphiccol from "./graphiccol/graphiccol";
import styled from 'styled-components'

let GraphicWr = styled.div`
width: 100%;
height: 250px;
background: #f4f4f4;
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
    display: flex;
    justify-content: space-between;
    width: calc(100% - 24px);
    align-items: flex-start;
    border-top: 1px solid gray;
    margin: auto;
    margin-top: 8px;
    padding-top: 3px;
    p{
     color: gray;
    }
`

const Graphic = (props) => {
    let graphicColElements = props.graphicData.map(coldata => <Graphiccol graphicday={coldata.day} graphicvalue={coldata.value}/>)

    return  (
            <GraphicWr>
               <GraphicColsWR>
                   {graphicColElements}
               </GraphicColsWR>

              <GraphicBottom>
                  <p>48 часов назад</p>
                  <p>Сейчас</p>
              </GraphicBottom>
            </GraphicWr>


    )
}
export default Graphic;