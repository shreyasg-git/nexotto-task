import { combineReducers, createStore, applyMiddleware } from "redux";

import createSagaMiddleware from "@redux-saga/core";
import { watcherSaga } from "./sagas/rootSaga";
import userReducer from "./reducers/userReducer";
import authReducer from "./reducers/authReducer";
const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

const reducer = combineReducers({
  user: userReducer,
  isAuthenticated: authReducer,
});

const store = createStore(reducer, {}, applyMiddleware(...middlewares));

sagaMiddleware.run(watcherSaga);

export default store;
