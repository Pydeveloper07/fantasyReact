import * as ActionTypes from './ActionTypes';

const Tables = (state={
        errMsg: null,
        tables: []
    }, action) => {
        switch(action.type){
            case ActionTypes.TABLES_SUCCESS:
                return {...state, errMsg: null, tables: action.payload};
            case ActionTypes.TABLES_FAILED:
                return {...state, errMsg: action.payload, tables: []};
            default:
                return state;
        }
}

export default Tables;