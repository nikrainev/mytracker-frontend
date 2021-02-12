import React from 'react';
import s from '../friends.module.scss';
import s2 from './usersList.module.scss'
import {offsetText} from "../../../../utils/textTransformation";
import {Pagination} from "../../../common/pagination";


const LoadingProfile = () =>{
    return <div className={s2.loading_profile}> </div>
}
const UsersList = (props) => {

    let buttonSelector = (status) =>{
        switch (status){
            case 'It is you': return
            case 'proposal sent': return <p>Заявка отправлена</p>
            case 'Your friend': return <p>Ваш друг</p>
            case 'plain user':return <button className={s2.add_button}>Добавить в друзья</button>
            default: return
        }

    }
    let profilesArr = props.profilesList.map((profile) =>
            <div className={s.line}>
                <div className={s.names_row}>
                   <p className="name">{profile.name}</p>
                   <p className="soname">{profile.soName}</p>
                </div>
                <div className={s.company}>{profile.company}</div>
                <div className={s.description}><p className={s.description_p}>{offsetText(profile.description)}</p></div>
                {buttonSelector(profile.friendStatus)}
            </div>
    )

    return  (
            <div className="usersList">
                <h2>Список пользователей:</h2>
                 <Pagination pages={profilesArr} pageSize={props.pageSize} totalPages={props.totalProfiles}
                             pageChanger={props.getProfilesList} loader={<LoadingProfile />}/>
            </div>


    );
}
export default UsersList;