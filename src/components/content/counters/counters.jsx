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
import {useDocTitle, usePagePreloader} from "../../../utils/customHooks";

const Counters = (props) =>{
    const [pageState] = usePagePreloader(props.isInitialized, props.totalCounters, props.getCounters, props.clearCountersLists)
    const [title, setTitle] = useDocTitle('Счётчики')


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
        totalCounters: getYourTotalCounters(state)
    }
}
export default compose(connect(mapStateToProps, {getCounters,  clearCountersLists}), WithAuthRedirect)(Counters);