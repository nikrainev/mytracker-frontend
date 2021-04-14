import React from 'react';
import s2 from '../friends.module.scss';
import s from './usersList.module.scss'
import {offsetText} from "../../../../utils/textTransformation";
import {Pagination} from "../../../common/pagination/pagination";
import ProfileLine from "../../../profile/profileLine/profileLine";


const LoadingProfile = () =>{
    return <div className={s2.loading_profile}> </div>
}
const UsersList = (props) => {
    let postProposal = (id, buttonId) => {
        props.postProposal(id, props.currentPage)
        props.changeButtonState(buttonId)

    }

    let deleteProposal = (id, buttonId) => {
        props.deleteProposal(id, props.currentPage)
        props.changeButtonState(buttonId)
    }


    let buttonSelector = (status, id, buttonId) => {
        if (props.buttonsStates[buttonId] && props.buttonsStates[buttonId].isFetching === false) {
            switch (status) {
                case 'It is you':
                    return
                case 'proposal sent':
                    return <p onClick={() => {
                        deleteProposal(id, buttonId)
                    }}>Заявка отправлена</p>
                case 'Your friend':
                    return <p>Ваш друг</p>
                case 'plain user':
                    return <button onClick={() => {
                        postProposal(id, buttonId)
                    }} className={s.add_button}>Добавить в друзья</button>
                default:
                    return
            }
        } else {
            return <p>Загрузка</p>
        }


    }

    let profilesArr = props.profilesList.map((profile, index) =>
            <ProfileLine {...profile} buttonsComponent={buttonSelector(profile.friendStatus, profile._id, index)}/>
    )

    return (
            <div className={s.usersList}>
                <h2>Список пользователей:</h2>
                <Pagination pages={profilesArr} pageSize={props.pageSize} totalPages={props.totalProfiles}
                            pageChanger={props.getProfilesList} loader={<LoadingProfile/>}
                            getCurrentPage={props.getCurrentPage}/>
            </div>


    )
}
export default UsersList;