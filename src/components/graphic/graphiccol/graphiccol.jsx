import React from 'react';
import s from '../graphic.module.scss';
const Graphiccol = (props) => {
    let colheight = {
     height: props.graphicvalue+'px'
    }
    return(
            <div className={s.graphic_col_wr}>
                <div className={s.graphic_col_text}>
                    <p className={s.graphic_col_day}>{props.graphicday}</p>
                    <p className={s.graphic_col_number}>{props.graphicvalue}</p>
                </div>
                <div className={s.graphic_col} style={colheight}></div>
            </div>
    )
}
export default Graphiccol;