import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import Cuisines from './cuisines';
import Types from './types';
import Foods from './foods';
import Drinks from './drinks';

export const configureStore = () => {
    const store = createStore(combineReducers({
        cuisines: Cuisines,
        types: Types,
        foods: Foods,
        drinks: Drinks
    }), applyMiddleware(thunk, logger));
    return store;
}