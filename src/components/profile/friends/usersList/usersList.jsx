import React from 'react';
import s2 from '../friends.module.scss';
import s from './usersList.module.scss'
import {offsetText} from "../../../../utils/textTransformation";
import {Pagination} from "../../../common/pagination";


const LoadingProfile = () =>{
    return <div className={s2.loading_profile}> </div>
}
const UsersList = (props) => {
    let postProposal = (id, buttonId) =>{
       props.postProposal(id, props.currentPage)
       props.changeButtonState(buttonId)

    }

    let deleteProposal = (id, buttonId) =>{
       props.deleteProposal(id, props.currentPage)
        props.changeButtonState(buttonId)
    }


    let buttonSelector = (status,id, buttonId) =>{
        if(props.buttonsStates[buttonId] && props.buttonsStates[buttonId].isFetching === false){
            switch (status){
                case 'It is you': return
                case 'proposal sent': return <p onClick={()=>{deleteProposal(id, buttonId)}}>Заявка отправлена</p>
                case 'Your friend': return <p>Ваш друг</p>
                case 'plain user':return <button onClick={()=>{postProposal(id, buttonId)}} className={s.add_button}>Добавить в друзья</button>
                default: return
            }
        }
        else {
            return <p>Загрузка</p>
        }


    }
    let i = 0
    let profilesArr = props.profilesList.map((profile) =>
            <div className={s2.line}>
                <div className={s2.names_row}>
                   <p className="name">{profile.name}</p>
                   <p className="soname">{profile.soName}</p>
                </div>
                <div className={s2.company}>{profile.company}</div>
                <div className={s2.description}><p className={s2.description_p}>{offsetText(profile.description)}</p></div>
                {buttonSelector(profile.friendStatus, profile._id, i++)}
            </div>
    )

    return  (
            <div className="usersList">
                <h2>Список пользователей:</h2>
                 <Pagination pages={profilesArr} pageSize={props.pageSize} totalPages={props.totalProfiles}
                             pageChanger={props.getProfilesList} loader={<LoadingProfile />} getCurrentPage={props.getCurrentPage}/>
            </div>


    );
}
export default UsersList;