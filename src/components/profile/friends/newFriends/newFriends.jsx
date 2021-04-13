import React from 'react';
import s from './newFriends.module.scss';
import s2 from './../friends.module.scss'
import openfolder from '../../../../assets/icons/mail-open.svg'
import Proposal from "./proposal/proposal";

const Loader = () =>{
    return (<>
            <div className={s2.loading_profile}> </div>
            <div className={s2.loading_profile}> </div>
            <div className={s2.loading_profile}> </div>
        </>
)
}

const NewFriends = (props) => {

        let proposalsList = []

        if(props.isFetching === false){
            if(props.proposals !== "no proposals"){
                let i = 0
                proposalsList = props.proposals.map((proposal, index)=> <Proposal  {...proposal} {...props} buttonKey={index}/>)
            }else{
                proposalsList = <div className={s.noProposals}>
                    <img src={openfolder} alt=""/>
                    <p>У вас нет заявок</p>
                </div>
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