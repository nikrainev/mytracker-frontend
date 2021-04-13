import React from 'react';
import s from '../counterslist.module.scss';
import Shortcounter from '../shortcounter/shortcounter.jsx';
import {Pagination} from "../../../../common/pagination/pagination";
import plus from "../../../../../assets/icons/plus.svg"
const LoadingCounter = ()=>{
    return <div className={s.loading_counter}> </div>

}

const EmptyBlock = () =>{
    return <div className={s.noCounters}>
        <img src={plus} alt=""/>
        <p>У ваших друзей ещё нет счётчиков</p>

    </div>
}


const FriendsCountersList = (props) =>{
    let countersElement = []

    if(props.countersListData.length !== 0){
        countersElement = props.countersListData.map(counter => <Shortcounter id={counter._id}
                                                                              name={counter.name}
                                                                              domen={counter.domen}
                                                                              dayusers={counter.dayusers}
                                                                              allusers={counter.allusers}
                                                                              status={counter.status}
                                                                              login={counter.login}
        /> )
    }
    else{
        countersElement = 'empty'
    }
    return(


            <div className="container">
                <div className={s.list_head}><p>Счётчики ваших друзей</p></div>

                <Pagination pages={countersElement} pageSize={props.pageSize} totalPages={props.totalCounters}
                            pageChanger={props.changePage} loader={<LoadingCounter />} emptyBlock={<EmptyBlock />}/>
            </div>
    )
}



export default FriendsCountersList;