import React from 'react';
import DayusersContainer from "./dayusers/dayusersContainer";
import DaystatContainer from "./daystat/daystatContainer";
const Summary = (props) =>{
    return (

            <>
                <DaystatContainer/>
                <DayusersContainer/>
            </>
    );
}
export default Summary;