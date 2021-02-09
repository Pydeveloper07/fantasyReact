import * as ActionTypes from './ActionTypes';

const Supper = (state = {
        errMsg: null,
        foods: []
    }, action) => { 
        switch(action.type){
            case ActionTypes.ADD_SUPPER:
                return {...state, errMsg: null, foods: action.payload};
            case ActionTypes.SUPPER_FAILED:
                return {...state, errMsg: action.payload, foods: []};
            default:
                return state;
        }
}

export default Supper;