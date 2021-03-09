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
import UndefinedOsIcon from '../../../../../assets/icons/os/undefined.svg'
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
  width: calc(60% - 404px);
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
      width: 120px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`

const Os = styled.div`
  width: 47px;
  img{
  width: 20px;
    margin: auto;
    display: block;
  }
`

const ShortUserLine = styled(NavLink)`
   display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  background: #f7f7f7;
  margin-bottom: 10px;
  cursor: pointer;
  color: black;
  text-decoration: none;
  height: 47px;
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
                return <img src={AndroidIcon} alt="Android" />
            case 'Windows':
                return <img src={WindowsIcon} alt="Windows" />
            case 'iOS':
                return <img src={iOSIcon} alt="iOS" />
            case 'Mac OS':
                return <img src={MacOsIcon} alt="Mac OS" />
            case 'Linux':
                return <img src={LinuxIcon} alt="Linux" />
            default:
                return <img src={UndefinedOsIcon} alt="undefined" />
        }
    }
return(
        <ShortUserLine to={'/users/'+props.tysId} className={s.shortUser}>
            <Time>
                <p>{props.time}</p>
            </Time>
            <Sessions>
                <p>{props.sessions}</p>
            </Sessions>
            <Referrer>
                <p>{props.referrer}</p>
            </Referrer>
            <Country>
                <i className={s.flag+' '+s['flag-'+props.country]} > </i>
                <p>{props.country}</p>
            </Country>
            <City>
                <p>{props.city}</p>
            </City>

            <Os>
                {selectOsIcon(props.os)}
            </Os>
        </ShortUserLine>
)
}

const UsersList = (props) => {
    let users = []
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