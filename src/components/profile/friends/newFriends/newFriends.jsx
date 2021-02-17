import React from 'react';
import s from './newFriends.module.scss';

const NewFriends = (props) => {
        let acceptProposal = (userId) =>{
            props.acceptProposal(userId)
        }
        let denyProposal = (userId) =>{
            props.denyProposal(userId)
        }
        let proposalsList = []

        if(props.proposals !== "no proposals"){
             proposalsList = props.proposals.map((proposal)=> <div className={s.line}>
                <div className={s.names_row}>
                    <p className="name">{proposal.name}</p>
                    <p className="soname">{proposal.soName}</p>
                </div>
                <div className={s.buttons_row}>
                    <button className={s.deny} onClick={() =>{denyProposal(proposal.userId)}}>Отказать</button>
                    <button className={s.accept} onClick={()=>{acceptProposal(proposal.userId)}}>Принять</button>
                </div>
            </div>)
        }else{
           proposalsList = "No proposals"
        }




    return  (
            <div className={s.newFriends}>
                <h2>Заявки в друзья:</h2>
                {proposalsList}

            </div>


    );
}
export default NewFriends;