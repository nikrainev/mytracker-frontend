import React, {useEffect, useState} from 'react';
import Addcounter from './addcounter/addcounter.jsx';
import YourCounterslistContainer from "./countersLists/yourCounters/yourCountersListContainer";
import FriendsCountersListContainer from "./countersLists/friendsCounters/friendsCountersListContainer";
import {CountersListLoader} from "../../common/loadingschemes/loadingSchemes"
import {connect} from "react-redux";
import {compose} from "redux";
import WithAuthRedirect from "../../../hoc/withAuthRedirect";
import {getCounters, clearCountersLists} from "../../../redux/counters-reducer";
import {getYourTotalCounters} from "../../../redux/selectors/counters-selectors";
import {useDocTitle} from "../../../utils/customHooks";

const Counters = (props) =>{
    const [pageState, setPageState] = useState('fetching')
    const [title, setTitle] = useDocTitle('Счётчики')

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

        if(props.totalCounters !== '' && pageState === 'fetching'){
            setPageState("main")
        }

    },[props.totalCounters])
    return (

            <>
                {pageState === 'fetching' ?
                        <CountersListLoader />: <>
                    <Addcounter/>
                    <YourCounterslistContainer pageState={pageState}/>
                    <FriendsCountersListContainer /></>}
                    </>
    );
}

const mapStateToProps = (state) => {
    return {
        totalCounters: getYourTotalCounters(state),
        isInitialized: state.app.isInitialized,

    }
}
export default compose(connect(mapStateToProps, {getCounters,  clearCountersLists}), WithAuthRedirect)(Counters);