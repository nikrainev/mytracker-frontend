import React, {useEffect, useState} from "react";
import mongoDate from "../../../../../utils/mongoDate";
import s from './usersList.module.scss'
import {NavLink} from "react-router-dom";
import {LoadMore} from "../../../../common/loadMore";

import styled from 'styled-components'
import AndroidIcon from '../../../../../assets/icons/os/android.svg'
import WindowsIcon from '../../../../../assets/icons/os/windows.svg'
import iOSIcon from '../../../../../assets/icons/os/apple.svg'
import MacOsIcon from '../../../../../assets/icons/os/macos.svg'
import LinuxIcon from '../../../../../assets/icons/os/linux.svg'

const Time = styled.div`
  width: 94px;
  p{
  padding-left: 12px;
  }
  
`

const Sessions = styled.div`
  width: 140px;
`

const Referrer = styled.div`
  width: calc(60% - 401px);
  overflow: hidden;
  position: relative;
  p{
  width: 1000px;
  }
  &:after{
     content: '';
    height: 100%;
    display: block;
    width: 40px;
    background: linear-gradient(to left, #f7f7f7,transparent);
    position: absolute;
    top: 0px;
    right: 0px;
  }
`

const City = styled.div`
  width: 40%;
  overflow: hidden;
  position: relative;
  p{
  width: 1000px;
  margin-left: 20px;
  }
  &:after{
     content: '';
    height: 100%;
    display: block;
    width: 40px;
    background: linear-gradient(to left, #f7f7f7,transparent);
    position: absolute;
    top: 0px;
    right: 0px;
  }
`

const Country = styled.div`
  width: 47px;
`

const Os = styled.div`
  width: 120px;
  img{
  width: 20px;
  }
`

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
    let selectOsIcon = (os) =>{
        switch(os){
            case 'Android':
                return <img src={AndroidIcon} alt=""/>
            case 'Windows':
                return <img src={WindowsIcon} alt=""/>
            case 'iOS':
                return <img src={iOSIcon} alt=""/>
            case 'Mac OS':
                return <img src={MacOsIcon} alt=""/>
            case 'Linux':
                return <img src={LinuxIcon} alt=""/>

            default:
                return <p>Не определено</p>
        }
    }
return(
        <NavLink to={'/users/'+props.tysId} className={s.shortUser}>
            <Time>
                <p>{props.time}</p>
            </Time>
            <Sessions>
                <p>{props.sessions}</p>
            </Sessions>
            <Referrer>
                <p>{props.referrer}</p>
            </Referrer>
            <City>
                <p>{props.city}</p>
            </City>
            <Country>
                <p>{props.country}</p>
            </Country>
            <Os>
                {selectOsIcon(props.os)}
            </Os>
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

                <LoadMore pages={users} pageSize={props.pageSize} totalPages={props.totalUsers}
                          pageChanger={props.getMoreUsers} loader={<LoadingUser />} emptyBlock={<NoUsers />} />
            </div>
    )
}





export default UsersList