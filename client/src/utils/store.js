import {createStore, combineReducers, applyMiddleware} from "redux";
import logger from "redux-logger";
import promise from "redux-promise-middleware";

import portfolio from "../reducers/portfolioReducer";

export default createStore(
    combineReducers({
        portfolio
    })
);