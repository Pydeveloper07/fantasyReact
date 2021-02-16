import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {createForms} from 'react-redux-form';
import Cuisines from './cuisines';
import Types from './types';
import Foods from './foods';
import Drinks from './drinks';
import Breakfast from './breakfast';
import Dinner from './dinner';
import Supper from './supper';
import Reviews from './reviews';
import Login from './login';
import {InitialSignup} from './forms';

export const configureStore = () => {
    const store = createStore(combineReducers({
        cuisines: Cuisines,
        types: Types,
        foods: Foods,
        drinks: Drinks,
        breakfast: Breakfast,
        dinner: Dinner,
        supper: Supper,
        reviews: Reviews,
        login: Login,
        ...createForms({
            signup: InitialSignup
        }) 
    }), applyMiddleware(thunk, logger));
    return store;
}