import React from 'react';
import Addcounter from './addcounter/addcounter.jsx';
import CounterslistContainer from "./counterslist/counterslistContainer";
import {CountersListLoading} from "../../common/loadingSchemes"
import {connect} from "react-redux";
import {compose} from "redux";
import WithAuthRedirect from "../../../hoc/withAuthRedirect";


const Counters = (props) =>{
    return (

            <>
                {props.isInitialized ?
                        <>

                            <Addcounter/>
                            <CounterslistContainer />
                        </>: <CountersListLoading />}
           </>
    );
}

const mapStateToProps = (state) => {
    return {
        isInitialized: state.app.isInitialized
    }
}
export default compose(connect(mapStateToProps), WithAuthRedirect)(Counters);