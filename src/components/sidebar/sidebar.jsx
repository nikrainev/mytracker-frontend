import React, {useEffect, useState} from 'react';
import s from './sidebar.module.scss';
import {NavLink} from "react-router-dom";

import hamburgerIcon from '../../assets/icons/menu/hamburger.svg'
import summaryIcon from '../../assets/icons/menu/summary.svg'
import eyeIcon from '../../assets/icons/menu/eye.svg'
import auditoriesIcon from '../../assets/icons/menu/auditories.svg'
import friendsIcon from '../../assets/icons/menu/friend.svg'
import settingsIcon from '../../assets/icons/menu/settings.svg'
import shortMenuIcon from '../../assets/icons/menu/short-menu.svg'
import profileIcon from '../../assets/icons/menu/profile.svg'
let Sidebar = (props) =>{

    /* let i = 0;
    let setBorders = () =>{
        let allelements = document.querySelectorAll(".fluent-line")
        for(let i = 0; i < allelements.length; i++){
            if(!allelements[i].classList.contains('loaded_fluent')){
                allelements[i].insertAdjacentHTML('beforeend', '<div class="f_topborder"><div class="f_borderbeam"></div></div>');
                allelements[i].insertAdjacentHTML('beforeend', '<div class="f_rightborder"><div class="f_borderbeam"></div></div>');
                allelements[i].insertAdjacentHTML('beforeend', '<div class="f_bottomborder"><div class="f_borderbeam"></div></div>');
                allelements[i].insertAdjacentHTML('beforeend', '<div class="f_leftborder"><div class="f_borderbeam"></div></div>');
                allelements[i].classList.add('loaded_fluent')
            }

        }

    }

    let setOpacity = (event, lineElem) =>{
        let targetCoords = lineElem.getBoundingClientRect();
        let procent = Math.round((event.clientY - targetCoords.top)*(100/92))
        procent = 100 - Math.abs(procent)
        procent = procent+"%"
        return procent
    }

    let getElementIndex = (elem) =>{
        elem = elem.tagName ? elem : document.querySelector(elem) // можно добавить еще проверок
        return [].indexOf.call(elem.parentNode.children, elem)
    }

    let onmouseover = (event) =>{

          setBorders()
          event.target.onmousemove = (event) =>{
              if(event.target.classList.contains('fluent-line')){

              let alllines = document.querySelectorAll('.fluent-line')

              for(i=0; i < alllines.length; i++){
                  let topBeam = alllines[i].querySelector(".f_topborder").children[0];
                  let bottomBeam = alllines[i].querySelector(".f_bottomborder").children[0];
                  if(getElementIndex(event.target)){
                      topBeam.style.opacity = setOpacity(event, topBeam)
                      bottomBeam.style.opacity = setOpacity(event, bottomBeam)
                  }
                  else{
                      topBeam.style.opacity = 0
                      bottomBeam.style.opacity = 0
                  }
              }



              let width = event.target.offsetWidth;
              let targetCoords = event.target.getBoundingClientRect();
              let xCoord = event.clientX - targetCoords.left;
              let yCoord = event.clientY - targetCoords.top;
              let horizontProcent = Math.round(100*(xCoord/width))
              let horizontProcent2 = 100 - horizontProcent
              horizontProcent=horizontProcent+"%"
              let bottomborder = event.target.querySelector(".f_bottomborder");
              bottomborder.children[0].style.left=horizontProcent;
              let topborder = event.target.querySelector(".f_topborder");
              topborder.children[0].style.left=horizontProcent;


              let nextline = event.target.nextSibling
              let prevline = event.target.previousSibling

              if(nextline){

                  let bottomborder = nextline.querySelector(".f_bottomborder");
                  bottomborder.children[0].style.left=horizontProcent;
                  let topborder = nextline.querySelector(".f_topborder");
                  topborder.children[0].style.left=horizontProcent;

              }
              if(prevline){
                  let bottomborder = prevline.querySelector(".f_bottomborder");
                  bottomborder.children[0].style.left=horizontProcent;
                  let topborder = prevline.querySelector(".f_topborder");
                  topborder.children[0].style.left=horizontProcent;
              }




          }

      }

    }

    let onmouseout = () =>{

    } */

    let logout = () =>{
        props.logout()
    }




    return (


        <div className={props.menuState === 'collapsed' ? s.sidebar : s.sidebar + " " + s.sidebar_closed} > {console.log(props)}
        <div className={s.sidebar_top}>
            <div className={s.logo}>Трекер</div>
            <div className={s.hamburger} onClick={()=>{props.toggleMenuState()}}>
                <img src={hamburgerIcon} alt=""/>
            </div>
             <div className={s.sidebar_menu + " fluent-menu"} onMouseOver={onmouseover} onMouseOut={onmouseout}>
                 <NavLink to={'/summary'} activeClassName={s.active} className={s.link_item + " fluent-line"}>
                    <div className={s.menu_icon}><img src={summaryIcon} alt=""/></div>
                    <p>Сводка</p>
                 </NavLink>
                 <NavLink to={'/counters'} activeClassName={s.active} className={s.link_item + " fluent-line"}>
                     <div className={s.menu_icon}><img src={eyeIcon} alt=""/></div>
                     <p>Счётчики</p>
                 </NavLink>
                 <NavLink to={'/audiences'} activeClassName={s.active} className={s.link_item + " fluent-line"}>
                     <div className={s.menu_icon}><img src={auditoriesIcon} alt=""/></div>
                     <p>Аудитории</p>
                 </NavLink>
                 <NavLink to={'/friends'} activeClassName={s.active} className={s.link_item + " fluent-line"}>
                     <div className={s.menu_icon}><img src={friendsIcon} alt=""/></div>
                     <p>Друзья</p>
                 </NavLink>
                 <NavLink to={'/profilesettings'} activeClassName={s.active} className={s.link_item + " fluent-line"}>
                     <div className={s.menu_icon}><img src={settingsIcon} alt=""/></div>
                     <p>Настройки</p>
                 </NavLink>
             </div>
        </div>
            <div className={props.menuState === 'collapsed' ? s.profile_cont : s.profile_cont + " " + s.sidebar_closed}>
              <div className="dropdown-menu">
                  <div className='dropdown-menu-dots'><img  src={shortMenuIcon} alt=""/></div>
                  <div className="dropdown-menu-content">
                      {props.isAuth === true ?
                              <div className="dropdown-menu-link" onClick={logout}>Выйти</div> :
                              <NavLink to="/login" className='dropdown-menu-link' activeClassName='active'>Войти</NavLink>}
                  </div>
              </div>
               <div className={s.empty_img}>
                   <img src={profileIcon} alt=""/>
               </div>
                <div className={s.user_login}>
                    {props.isAuth === true ? <NavLink to="/profile" >{props.profileLogin}</NavLink> : "Профиль" }
                </div>

            </div>
        </div>
    );
}
export default Sidebar;