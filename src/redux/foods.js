import * as ActionTypes from './ActionTypes';

const Foods = (state = {
        errMsg: null,
        foods: []
    }, action) => {
        switch(action.type){
            case ActionTypes.ADD_FOODS:
                return {...state, errMsg: null, foods: action.payload};
            case ActionTypes.FOODS_FAILED:
                return {...state, errMsg: action.payload, foods: []};
            default:
                return state;
        }
}

export default Foods;