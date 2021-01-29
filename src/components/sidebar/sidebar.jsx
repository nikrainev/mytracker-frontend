import React from 'react';
import s from './sidebar.module.scss';

const Sidebar = () =>{
    let i = 0;
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

    }

    return (

        <div className={s.sidebar} >
             <div className={s.sidebar_menu + " fluent-menu"} onMouseOver={onmouseover} onMouseOut={onmouseout}>
                 <a href="" className={s.link_item + " fluent-line"}>Сводка</a>
                 <a href="" className={s.link_item + " fluent-line"}>Посетители</a>
                 <a href="" className={s.link_item + " fluent-line"}>Конверсии</a>

             </div>
        </div>
    );
}
export default Sidebar;