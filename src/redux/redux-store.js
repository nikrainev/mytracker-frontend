import {applyMiddleware, combineReducers, createStore} from "redux";
import countersReducer from "./counters-reducer";
import audiencesReducer from "./audiences-reducer";
import summaryReducer from "./summary-reducer";
import profileReducer from './profile-reducer'
import authReducer from "./auth-reducer";
import thunk from 'redux-thunk'
let reducers = combineReducers({
    summaryPage: summaryReducer,
    countersPage: countersReducer,
    audiencePage: audiencesReducer,
    profilePage: profileReducer,
    auth: authReducer
});

let store = createStore(reducers, applyMiddleware(thunk));
window.store = store
export default store