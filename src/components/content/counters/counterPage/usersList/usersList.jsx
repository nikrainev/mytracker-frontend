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

import NoUsersIcon from '../../../../../assets/icons/emptyUsers.svg'
const Time = styled.div`
  width: 94px;
  p{
  padding-left: 12px;
  }
  @media screen and (max-width: 1400px){
  width: 80px;
  }
  @media screen and (max-width: 500px){
  width: 64px;
  }
`

const Sessions = styled.div`
  width: 140px;
  @media screen and (max-width: 1400px){
  width: 47px;
  }
  @media screen and (max-width: 500px){
  width: 30px;
  }
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
  @media screen and (max-width: 1400px){
  width: calc(70% - 257px);
  }
  @media screen and (max-width: 750px){
  width: calc(100% - 200px);
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
  @media screen and (max-width: 1400px){
  width: 30%;
  }
  @media screen and (max-width: 750px){
  display: none;
  }
`

const Country = styled.div`
      width: 120px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    @media screen and (max-width: 750px){
    width: 80px;
    }
    @media screen and (max-width: 500px){
    width: 64px;
    }
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

const LoadingUser = styled.div`
    width: 100%;
    background: #f7f7f7;
    margin-bottom: 10px;
    height: 47px;
    display: block;
    animation: loadingScheme 1s infinite ;
  
  @keyframes loadingScheme {
    0%{background: #efefef}
    50%{background: #dcdcdc}
    100%{background: #efefef}
  }
`

const ListDivider = styled.div`
    height: 46px;
    border-bottom: 1px solid #dadada;
    margin-bottom: 10px;
        display: flex;
    align-items: flex-end;
    p{
    margin-bottom: 5px;
    }
`

const Visits = styled.span`
    background: #2980ea;
    border-radius: 50%;
    color: #fff;
    width: 18px;
    height: 18px;
    text-align: center;
    font-size: 12px;
    line-height: 16px;
    overflow: hidden;
    display: block;
`

const NoUsersBlock = styled.div`
    background: #f7f7f7;
    padding: 15px;
    width: calc(100% - 30px);
    display: flex;
    justify-content: flex-start;
    align-items: center;
    img{
    width: 47px;
   
    }
    div{
    width: 70px;
    }
    p{
    width: calc(100% - 70px);
    }
`



const NoUsers = () =>{
    return(
            <NoUsersBlock>
                <div>
                    <img src={NoUsersIcon} alt=""/>
                </div>
                <p>У Вас ещё нет пользователей, подождите или добавьте новый счётчик</p>
            </NoUsersBlock>

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
                <Visits>{props.sessions}</Visits>
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
        if(props.usersList !== "no users" && props.usersList !== "you do not have counters"){

            let lastDivider = ''
            props.usersList.forEach((item, index)=>{
                if(mongoDate(item.date).comparativeDate !== lastDivider){
                    lastDivider = mongoDate(item.date).comparativeDate
                    users.push({divider: mongoDate(item.date).comparativeDate}, item)

                }
                else{
                    users.push(item)
                }

            })
            users = users.map((user, index) => {
                if(user.divider) {
                    return <ListDivider key={index}><p>{user.divider}</p></ListDivider>
                }
                else{
                return <ShortUser key={user.tysId} time={mongoDate(user.date).time} sessions={user.sessionsNumber}
                                  city={user.city} country={user.country}
                                  os={user.os} tysId={user.tysId}
                                  referrer={user.referrer}/>}
                })
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