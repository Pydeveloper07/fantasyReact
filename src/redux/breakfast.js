import * as ActionTypes from './ActionTypes';

const Breakfast = (state = {
        errMsg: null,
        foods: []
    }, action) => { 
        switch(action.type){
            case ActionTypes.ADD_BREAKFAST:
                return {...state, errMsg: null, foods: action.payload};
            case ActionTypes.BREAKFAST_FAILED:
                return {...state, errMsg: action.payload, foods: []};
            default:
                return state;
        }
}

export default Breakfast;