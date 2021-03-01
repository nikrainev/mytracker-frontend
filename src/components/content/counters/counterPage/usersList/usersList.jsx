import React, {useEffect, useState} from "react";
import mongoDate from "../../../../../utils/mongoDate";
import s from './usersList.module.scss'
import {NavLink} from "react-router-dom";
import {LoadMore} from "../../../../common/loadMore";

const LoadingUser = () =>{
    return(
            <p>Загрузка</p>
    )
}

const NoUsers = () =>{
    return(
            <p>Нет пользователей</p>
    )
}


const ShortUser = (props) =>{
return(
        <NavLink to={'/users/'+props.tysId} className={s.shortUser}>
            <div className={s.col_1}>
                {props.time}
            </div>
            <div className={s.col_2}>
                {props.sessions}
            </div>
            <div className={s.col_3}>
                {props.referrer}
            </div>
            <div className={s.col_4}>
                {props.city}
            </div>
            <div className={s.col_5}>
                {props.country}
            </div>
            <div className={s.col_6}>
                {props.os}
            </div>
        </NavLink>
)
}

const UsersList = (props) => {
    let users
    if(props.usersList !== undefined){
        if(props.usersList !== "no users"){
            users = props.usersList.map((user) => <ShortUser time={mongoDate(user.date).time} sessions={user.sessionsNumber}
                                                             city={user.city} country={user.country}
                                                             os={user.os} tysId={user.tysId}
                                                             referrer={user.referrer}/>)
        }
        else{
            users ="empty"
        }
    }

    return (
            <div className="container">
                Список счётчиков
                <LoadMore pages={users} pageSize={props.pageSize} totalPages={props.totalUsers}
                          pageChanger={props.getMoreUsers} loader={<LoadingUser />} emptyBlock={<NoUsers />} />
            </div>
    )
}





export default UsersList