import * as ActionTypes from './ActionTypes';

const Cart = (state = {
        totalCost: 0,
        numberOfItems: 0,
        items: []
    }, action) => {
        switch(action.type){
            case ActionTypes.INIT_CART:
                return {...state, totalCost: action.payload.totalCost, numberOfItems: action.payload.numberOfItems, items: action.payload.items};
            case ActionTypes.ADD_TO_CART:
                return {...state, totalCost: action.payload.totalCost, numberOfItems: action.payload.numberOfItems, items: action.payload.items};
            default:
                return state;
        }
}

export default Cart;