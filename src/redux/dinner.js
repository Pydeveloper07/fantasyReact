import * as ActionTypes from './ActionTypes';

const Dinner = (state = {
        errMsg: null,
        foods: []
    }, action) => { 
        switch(action.type){
            case ActionTypes.ADD_DINNER:
                return {...state, errMsg: null, foods: action.payload};
            case ActionTypes.DINNER_FAILED:
                return {...state, errMsg: action.payload, foods: []};
            default:
                return state;
        }
}

export default Dinner;