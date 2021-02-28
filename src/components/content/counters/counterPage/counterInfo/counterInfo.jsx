import React, {useEffect, useState} from "react";


const CounterInfo = (props) => {
    return (

            <div className="container">
                Инфомация о счётчике
                {props.counterId}
            </div>
    )
}





export default CounterInfo