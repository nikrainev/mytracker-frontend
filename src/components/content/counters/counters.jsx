import React from 'react';
import Addcounter from './addcounter/addcounter.jsx';
import CounterslistContainer from "./counterslist/counterslistContainer";

const Counters = (props) =>{
    return (

            <div className='content'>
             <Addcounter/>
             <CounterslistContainer />



            </div>
    );
}
export default Counters;