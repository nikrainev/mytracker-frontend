import {applyMiddleware, combineReducers, compose, createStore} from "redux"
import countersReducer from "./counters-reducer"
import audiencesReducer from "./audiences-reducer"
import summaryReducer from "./summary-reducer"
import profileReducer from './profile-reducer'
import authReducer from "./auth-reducer"
import appReducer from "./app-reducer"
import usersReducer from './users-reducer'
import thunk from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'

let reducers = combineReducers({
    summaryPage: summaryReducer,
    countersPage: countersReducer,
    audiencePage: audiencesReducer,
    profilePage: profileReducer,
    auth: authReducer,
    app: appReducer,
    users: usersReducer,
    form: formReducer
});


const  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
let store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

window.store = store
export default store