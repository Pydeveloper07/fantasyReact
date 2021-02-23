import * as ActionTypes from './ActionTypes'

const UserOrderedTables = (state = {
        errMsg: null,
        tables: []
    }, action) => {
    switch(action.type){
        case ActionTypes.USER_ORDERED_TABLES_SUCCESS:
            return {...state, errMsg: null, tables: action.payload};
        case ActionTypes.USER_ORDERED_TABLES_FAILED:
            return {...state, errMsg: action.payload, tables: []};
        case ActionTypes.ADD_ORDERED_TABLE:
            return {...state, errMsg: null, tables: state.tables.concat(action.payload)};
        default:
            return state;
    }
}

export default UserOrderedTables;