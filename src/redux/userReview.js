import * as ActionTypes from './ActionTypes';

const UserReview = (state = {
        review: null,
        errMsg: null
    }, action) => {
        switch(action.type){
            case ActionTypes.ADD_USER_REVIEW:
                return {...state, review: action.payload, errMsg: null};
            case ActionTypes.USER_REVIEW_FAILED:
                return {...state, review: null, errMsg: action.payload};
            default:
                return state;
        }
}

export default UserReview;