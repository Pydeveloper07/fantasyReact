import * as ActionTypes from './ActionTypes';

const Cuisines = (state = {
        errMsg: null,
        cuisines: []
    }, action) => {
        switch(action.type){
            case ActionTypes.ADD_CUISINES:
                return {...state, errMsg: null, cuisines: action.payload};
            case ActionTypes.CUISINES_FAILED:
                return {...state, errMsg: action.payload, cuisines: []};
            default:
                return state;
        }
    }

    export default Cuisines;