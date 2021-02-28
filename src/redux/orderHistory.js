import * as ActionTypes from './ActionTypes';

const OrderHistory = (state = {
        errMsg: null,
        orders: []
    }, action) => {
    switch(action.type){
        case ActionTypes.USER_ORDER_HISTORY_SUCCESS:
            return {...state, errMsg: null, orders: action.payload};
        case ActionTypes.USER_ORDER_HISTORY_FAILED:
            return {...state, errMsg: action.payload, orders: []};
        case ActionTypes.ADD_ORDER_ITEM_TO_HISTORY:
            let newOrder = action.payload;
            newOrder.id = state.orders.length;
            return {...state, errMsg: null, orders: state.orders.concat(newOrder)};
        default:
            return state;
    }
}

export default OrderHistory;