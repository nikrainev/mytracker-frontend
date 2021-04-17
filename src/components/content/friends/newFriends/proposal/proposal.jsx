import React, {useEffect} from 'react';
import s from "../newFriends.module.scss";
import {Button} from "../../../../common/formControls";
import acceptIcon from '../../../../../assets/icons/accept.svg'
import dismissIcon from '../../../../../assets/icons/dismiss.svg'
import loadingButton from '../../../../../assets/icons/loading.svg'
import ProfileLine from "../../../../profile/profileLine/profileLine";



const Proposal = (props) => {
    let acceptProposal = (userId, buttonId) =>{
        props.acceptProposal(userId)
        props.chanhgeButtonsState(buttonId)
    }
    let denyProposal = (userId, buttonId) =>{
        props.denyProposal(userId)
        props.chanhgeButtonsState(buttonId)
    }

    let buttonSelector = (userId, buttonId) =>{

        if(props.buttonsState[buttonId] && props.buttonsState[buttonId].isFetching === false){
            return <div className={s.buttons_row}>
                <Button icon={dismissIcon} onClick={() =>{denyProposal(userId, buttonId)}}>Отказать</Button>
                <Button icon={acceptIcon} onClick={()=>{acceptProposal(userId, buttonId)}}>Принять</Button>
            </div>
        }
        else {
            return <div className={s.loader}><img src={loadingButton} alt=""/></div>
        }


    }
    console.log(props)


    return  (
            <ProfileLine {...props} _id={props.userId}  buttonsComponent={buttonSelector(props.userId, props.buttonKey)}/>
    )
}


export default Proposal