import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';
import rootSaga from './sagas/index';

const sagaMiddleware = createSagaMiddleware();

const enchancer = applyMiddleware(sagaMiddleware);

const store = createStore(rootReducer, composeWithDevTools(enchancer));

sagaMiddleware.run(rootSaga);

export default store;
