import * as ActionTypes from './ActionTypes';

const Reviews = (state = {
        isLoading: true,
        errMsg: null,
        reviews: []
    }, action) => {
        switch(action.type){
            case ActionTypes.ADD_REVIEW_SUCCESS:
                var newReview = action.payload;
                return {...state, isLoading: false, errMsg: null, reviews: state.reviews.concat(newReview)};
            case ActionTypes.ADD_REVIEW_FAILED:
                return {...state, isLoading: null, errMsg: action.payload};
            case ActionTypes.UPDATE_REVIEW_SUCCESS:
                var updatedReview = action.payload;
                var reviews = state.reviews;
                for (var i=0; i<reviews.length; i++){
                    if (reviews[i].id === updatedReview.id){
                        reviews[i] = updatedReview;
                        break;
                    }
                }
                return {...state, isLoading: false, errMsg: null, reviews: reviews};
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