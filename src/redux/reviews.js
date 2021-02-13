import * as ActionTypes from './ActionTypes';

const Reviews = (state = {
        isLoading: true,
        errMsg: null,
        reviews: []
    }, action) => {
        switch(action.type){
            case ActionTypes.ADD_REVIEWS:
                return {...state, isLoading: false, errMsg: null, reviews: action.payload};
            case ActionTypes.REVIEWS_LOADING:
                return {...state, isLoading: true, errMsg: null, reviews: []};
            case ActionTypes.REVIEWS_FAILED:
                return {...state, isLoading: false, errMsg: action.payload, reviews: []};
            default: 
                return state;
        }
}

export default Reviews;