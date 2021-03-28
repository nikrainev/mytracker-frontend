import React, {useEffect, useState} from 'react';
import Addcounter from './addcounter/addcounter.jsx';
import YourCounterslistContainer from "./countersLists/yourCounters/yourCountersListContainer";
import FriendsCountersListContainer from "./countersLists/friendsCounters/friendsCountersListContainer";
import {CountersListLoading} from "../../common/loadingSchemes"
import {connect} from "react-redux";
import {compose} from "redux";
import WithAuthRedirect from "../../../hoc/withAuthRedirect";
import {getCounters, clearCountersLists} from "../../../redux/counters-reducer";
import {getYourCounters} from "../../../redux/selectors/counters-selectors";

const Counters = (props) =>{

    const [pageState, setPageState] = useState('fetching')
    useEffect(()=>{
        return( ()=>{
            props.clearCountersLists()
        })
    },[])

    useEffect(()=>{
        if(props.isInitialized){
            props.getCounters()
        }
        else{
            setPageState('fetching')
        }

    }, [props.isInitialized])


    useEffect(()=>{

        if((props.countersListData && props.countersListData.length !== 0) && pageState === 'fetching'){
            setPageState("main")
        }

    },[props.countersListData])
    return (

            <>
                {pageState === 'fetching' ?
                        <CountersListLoading />: <>
                    <Addcounter/>
                    <YourCounterslistContainer pageState={pageState}/>
                    <FriendsCountersListContainer />
                    </>}
           </>
    );
}

const mapStateToProps = (state) => {
    return {
        countersListData: getYourCounters(state),
        isInitialized: state.app.isInitialized,

    }
}
export default compose(connect(mapStateToProps, {getCounters, clearCountersLists}), WithAuthRedirect)(Counters);