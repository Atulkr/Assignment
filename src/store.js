import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";

import { dataReducer } from './reducer';

const reducer = combineReducers( {
    newsFeed: dataReducer,
} );

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
export default ( initialState ) => createStore(reducer, initialState, composeEnhancers(applyMiddleware( thunkMiddleware ) ));

