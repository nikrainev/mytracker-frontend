import React from 'react';
import s2 from '../friends.module.scss';
import s from './usersList.module.scss'
import {Pagination} from "../../../common/pagination/pagination";
import ProfileLine from "../../../profile/profileLine/profileLine";
import {Button} from "../../../common/formControls";
import loadingIcon from "../../../../assets/icons/loading.svg"

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
                    return <Button onClick={() => {
                        deleteProposal(id, buttonId)
                    }}>Заявка отправлена</Button>
                case 'Your friend':
                    return <div className={s.yourfriend}><p>Ваш друг</p></div>
                case 'plain user':
                    return <Button primary onClick={() => {
                    postProposal(id, buttonId)
                }}>Добавить в друзья</Button>
                default:
                    return
            }
        } else {
            return <div className={s.fetching}><img src={loadingIcon} alt=""/></div>
        }


    }

    let profilesArr = props.profilesList.map((profile, index) =>
            <ProfileLine  {...profile} key={profile._id} buttonsComponent={<div className={s.buttons_cont}>{buttonSelector(profile.friendStatus, profile._id, index)}</div>}/>
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