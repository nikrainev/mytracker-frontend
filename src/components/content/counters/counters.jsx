import React, {useEffect} from 'react';
import Addcounter from './addcounter/addcounter.jsx';
import YourCounterslistContainer from "./countersLists/yourCounters/yourCountersListContainer";
import FriendsCountersListContainer from "./countersLists/friendsCounters/friendsCountersListContainer";
import {CountersListLoading} from "../../common/loadingSchemes"
import {connect} from "react-redux";
import {compose} from "redux";
import WithAuthRedirect from "../../../hoc/withAuthRedirect";
import {getCounters} from "../../../redux/counters-reducer";

const Counters = (props) =>{
    useEffect(()=>{
        if (props.isInitialized){
            props.getCounters() }

    },[props.isInitialized])
    return (

            <>
                {props.isInitialized ?
                        <>

                            <Addcounter/>
                            <YourCounterslistContainer />
                            <FriendsCountersListContainer />
                        </>: <CountersListLoading />}
           </>
    );
}

const mapStateToProps = (state) => {
    return {
        isInitialized: state.app.isInitialized
    }
}
export default compose(connect(mapStateToProps, {getCounters}), WithAuthRedirect)(Counters);