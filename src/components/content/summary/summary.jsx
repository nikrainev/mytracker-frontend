import React from 'react';
import DayusersContainer from "./dayusers/dayusersContainer";
import DaystatContainer from "./daystat/daystatContainer";
const Summary = (props) =>{
    return (

            <div className='content'>


                <DaystatContainer/>
                <DayusersContainer/>

            </div>
    );
}
export default Summary;