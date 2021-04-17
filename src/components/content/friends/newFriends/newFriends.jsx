import React from 'react';
import s from './newFriends.module.scss';
import openFolderIcon from '../../../../assets/icons/mail-open.svg'
import Proposal from "./proposal/proposal";



const NewFriends = (props) => {

        let proposalsList = []


            if(props.proposals !== "no proposals"){
                let i = 0
                proposalsList = props.proposals.map((proposal, index)=> <Proposal  {...proposal} {...props} buttonKey={index}/>)
            }else{
                proposalsList = <div className={s.noProposals}>
                    <img src={openFolderIcon} alt=""/>
                    <p>У вас нет заявок</p>
                </div>
            }






    return  (
            <div className={s.newFriends}>
                <h2>Заявки в друзья:</h2>
                {proposalsList}

            </div>


    );
}
export default NewFriends;