import React from 'react';
import s from './newFriends.module.scss';
import s2 from './../friends.module.scss'

const Loader = () =>{
    return (<>
            <div className={s2.loading_profile}> </div>
            <div className={s2.loading_profile}> </div>
            <div className={s2.loading_profile}> </div>
        </>
)
}

const NewFriends = (props) => {
        let acceptProposal = (userId, buttonId) =>{
            props.acceptProposal(userId)
            props.chanhgeButtonsState(buttonId)
        }
        let denyProposal = (userId, buttonId) =>{
            props.denyProposal(userId)
            props.chanhgeButtonsState(buttonId)
        }


        let proposalsList = []
        let buttonSelector = (userId, buttonId) =>{

                if(props.buttonsState[buttonId] && props.buttonsState[buttonId].isFetching === false){
                    return <div className={s.buttons_row}>
                        <button className={s.deny} onClick={() =>{denyProposal(userId, buttonId)}}>Отказать</button>
                        <button className={s.accept} onClick={()=>{acceptProposal(userId, buttonId)}}>Принять</button>
                    </div>
                }
                else {
                    return <p>Загрузка</p>
                }


        }

        if(props.isFetching === false){
            if(props.proposals !== "no proposals"){
                let i = 0
                proposalsList = props.proposals.map((proposal)=> <div className={s.line}>
                    <div className={s.names_row}>
                        <p className="name">{proposal.name}</p>
                        <p className="soname">{proposal.soName}</p>
                    </div>
                    {buttonSelector(proposal.userId, i++)}
                </div>)
            }else{
                proposalsList = <p>У вас ещё нет заявок</p>
            }
        }
        else {
            proposalsList = <Loader />
        }





    return  (
            <div className={s.newFriends}>
                <h2>Заявки в друзья:</h2>
                {proposalsList}

            </div>


    );
}
export default NewFriends;