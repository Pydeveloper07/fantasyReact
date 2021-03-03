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
            let new_table = action.payload;
            return {...state, errMsg: null, tables: state.tables.concat(new_table)};
        default:
            return state;
    }
}

export default UserOrderedTables;