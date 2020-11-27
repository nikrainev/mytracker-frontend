import React from 'react';
import s from './graphic.module.scss';
import Graphiccol from "./graphiccol/graphiccol";
import Shortuser from "../content/summary/dayusers/shortuser/shortuser";
const Graphic = (props) => {
    let graphicColElements = props.graphicData.map(coldata => <Graphiccol graphicday={coldata.day} graphicvalue={coldata.value}/>)

    return  (
            <div className={s.graphic}>
                <div className={s.graphic_cols}>
                    {graphicColElements}
                </div>
              <div className={s.graphic_bottom}>
                  <p>48 часов назад</p>
                  <p>Сейчас</p>
              </div>
            </div>


    )
}
export default Graphic;