import * as ActionTypes from './ActionTypes';

const Drinks = (state = {
        errMsg: null,
        drinks: []
    }, action) => {
        switch(action.type){
            case ActionTypes.ADD_DRINKS:
                return {...state, errMsg: null, drinks: action.payload};
            case ActionTypes.DRINKS_FAILED:
                return {...state, errMsg: action.payload, drinks: []};
            default:
                return state;
        }
};

export default Drinks;