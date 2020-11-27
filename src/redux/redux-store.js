import {combineReducers, createStore} from "redux";
import countersReducer from "./counters-reducer";
import audiencesReducer from "./audiences-reducer";
import summaryReducer from "./summary-reducer";
import profileReducer from './profile-reducer'
let reducers = combineReducers({
    summaryPage: summaryReducer,
    countersPage: countersReducer,
    audiencePage: audiencesReducer,
    profilePage: profileReducer
});

let store = createStore(reducers);

export default store