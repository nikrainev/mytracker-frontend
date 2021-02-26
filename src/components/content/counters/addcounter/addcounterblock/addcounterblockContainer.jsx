import React, {useEffect, useState} from "react";

import {postCounter} from "../../../../../redux/counters-reducer";
import Addcounterblock from "./addcounterblock";
import {getPixelCode} from  "../../../../../redux/selectors/counters-selectors"
import WithAuthRedirect from "../../../../../hoc/withAuthRedirect";
import {connect} from "react-redux";
import {compose} from "redux";


const AddcounterblockContainer = (props) => {
    let postCounter = (name, domen) =>{
        props.postCounter({name: name, domen: domen})
        setBlockState("fetching")
        console.log(props.pixelCode)
    }

    let makeOneMore = () =>{
        setBlockState("form")
    }

    const [blockState, setBlockState] = useState("form")

    useEffect(()=>{
       if(props.pixelCode !== ""){
           setBlockState("pixelCode")
       }
    },[props.pixelCode])

    return <Addcounterblock postCounter={postCounter}
                            blockState={blockState}
                            makeOneMore={makeOneMore}
                            pixelCode={props.pixelCode}

    />
}

let mapStateToProps = (state) =>{
    return{
      pixelCode: getPixelCode(state)
    }
}



export default compose(connect(mapStateToProps, {postCounter}), WithAuthRedirect)(AddcounterblockContainer);