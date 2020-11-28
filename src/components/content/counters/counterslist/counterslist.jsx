import React from 'react';
import s from './counterslist.module.scss';
import Shortcounter from './shortcounter/shortcounter.jsx';
import * as axios from "axios";



class Counterslist extends React.Component {
    componentDidMount() {

        axios.get(`http://195.161.62.108:3000/counters?page=${this.props.currentPage}`).then(response =>{

            this.props.setCounters(response)
            this.props.setTotalCounters(response)
        })




    }
    changePage = (page) =>{
        this.props.setCurrentPage(page)
        axios.get(`http://195.161.62.108:3000/counters?page=${page}`).then(response =>{

            this.props.setCounters(response)
        })
    }

   render (){
       let counters =  this.props.countersListData
       let countersElement = []
       console.log(counters)
       if (counters.length == 0){

       }
       else{
           countersElement = counters.map(counter => <Shortcounter  name={counter.name} domen={counter.domen} dayusers={counter.dayusers} total={counter.allusers} status={counter.status}/> )

       }

       let pagesCount = Math.ceil(this.props.totalCounters / this.props.pageSize)
       let pages =[]
       for(let i=1; i<=pagesCount; i++){
           pages.push(i)
       }
       let pagesButtonsElements = pages.map(page => <span className={this.props.currentPage === page && "current-page"}
                                                          onClick={() => {this.changePage(page)}}>{page}</span>)



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
                   <div className="list">
                       {countersElement}
                   </div>
                   <div className="pages-buttons">
                       {pagesButtonsElements}
                   </div>
               </div>

   }

}
export default Counterslist;