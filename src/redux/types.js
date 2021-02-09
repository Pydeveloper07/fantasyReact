import * as ActionTypes from './ActionTypes';

const Types = (state = {
        errMsg: null,
        types: []
    }, action) => {
        switch(action.type){
            case ActionTypes.ADD_TYPES:
                return {...state, errMsg: null, types: action.payload};
            case ActionTypes.TYPES_FAILED:
                return {...state, errMsg: action.payload, types: []};            
            default: return state;
        }
    }

export default Types;