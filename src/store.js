import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from './redux/saga';
import { reducer } from "./redux/reducer";


const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware));


sagaMiddleware.run(rootSaga)


export default store;
