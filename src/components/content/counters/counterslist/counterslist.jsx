import React from 'react';
import s from './counterslist.module.scss';
import Shortcounter from './shortcounter/shortcounter.jsx';

const LoadingCounters = ()=>{
    return(
            <div className="list">
                <div className={s.loading_counter}></div>
                <div className={s.loading_counter}></div>
                <div className={s.loading_counter}></div>
                <div className={s.loading_counter}></div>
                <div className={s.loading_counter}></div>
            </div>
            )

}



const Counterslist = (props) => {

       let counters =  props.countersListData
       let countersElement = []

       countersElement = counters.map(counter => <Shortcounter id={counter._id}
                                                                   name={counter.name}
                                                                   domen={counter.domen}
                                                                   dayusers={counter.dayusers}
                                                                   allusers={counter.allusers}
                                                                   status={counter.status}/> )



       let pagesCount = Math.ceil(props.totalCounters / props.pageSize)
       let pages =[]
       for(let i=1; i<=pagesCount; i++){
           pages.push(i)
       }
       let pagesButtonsElements = pages.map(page => <span className={props.currentPage === page && "current-page"}
                                                          onClick={() => {props.changePage(page)}}>{page}</span>)



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

                       {props.isFetching ? <LoadingCounters /> : countersElement}
                   </div>
                   <div className="pages-buttons">
                       {pagesButtonsElements}
                   </div>
               </div>


}
export default Counterslist;