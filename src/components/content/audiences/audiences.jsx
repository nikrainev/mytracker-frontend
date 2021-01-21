import React from 'react';
import Addaudiences from "./addaudience/addaudience";
import AudiecelistContainer from "./audienceslist/audiencelistContainer";
import {NavLink} from "react-router-dom";
const Audiences = (props) =>{
    return (
            <div className="content">
                <Addaudiences />
                <AudiecelistContainer />
            </div>

    );
}
export default Audiences;