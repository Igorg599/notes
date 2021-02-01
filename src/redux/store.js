import {createStore, compose} from 'redux';

import rootReducer from './reducers';
import {loadState, saveState} from './localstorage';

const persistedState = loadState();

const composeEnhancers =  compose;


const store = createStore(
    rootReducer,
    persistedState,
    composeEnhancers
);

store.subscribe(() => {
    saveState(store.getState());
})

export default store;