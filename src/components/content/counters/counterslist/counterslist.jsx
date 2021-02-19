import React from 'react';
import s from './counterslist.module.scss';
import Shortcounter from './shortcounter/shortcounter.jsx';
import {Pagination} from "../../../common/pagination";
import plus from "../../../../assets/icons/plus.svg"
const LoadingCounter = ()=>{
    return <div className={s.loading_counter}> </div>

}

const EmptyBlock = () =>{
    return <div className={s.noCounters}>
        <img src={plus} alt=""/>
        <p>У вас ещё нет счётчиков,<br /> добавьте свой первый счётчик</p>

    </div>
}



const Counterslist = (props) => {

       let countersElement = []

       if(props.countersListData.length !== 0){
           countersElement = props.countersListData.map(counter => <Shortcounter id={counter._id}
                                                                   name={counter.name}
                                                                   domen={counter.domen}
                                                                   dayusers={counter.dayusers}
                                                                   allusers={counter.allusers}
                                                                   status={counter.status}/> )
       }
       else{
           countersElement = 'empty'
       }


       let firstLoader = []
            for(let i=0; i < props.pageSize; i++){
            firstLoader.push(<LoadingCounter />)
        }
       return <div className="container">
                   <div className={s.table_head}>
                       <div className={s.name}>
                           <p>Название счётчика</p>
                       </div>
                       <div className={s.domen}>
                           <p>Адрес</p>
                       </div>
                       <div className={s.dayusers}>
                           <p>Пользователи за день</p>
                       </div>
                       <div className={s.totalusers}>
                           <p>Пользователей всего</p>
                       </div>
                       <div className={s.status}>
                           <p>Статус</p>
                       </div>
                   </div>
                   <div className={s.list}>

                     <Pagination pages={countersElement} pageSize={props.pageSize} totalPages={props.totalCounters}
                           pageChanger={props.changePage} loader={<LoadingCounter />} emptyBlock={<EmptyBlock />}/>
                   </div>

               </div>


}
export default Counterslist;