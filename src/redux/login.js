import * as ActionTypes from './ActionTypes';

const Login = (state = {
        isLoggedIn: localStorage.getItem('token')?true:false,
        errMsg: null,
        user: null
    }, action) => {
    switch(action.type){
        case ActionTypes.LOGIN_SUCCESS:
            return {...state, isLoggedIn: true, errMsg: null, user: action.payload};
        case ActionTypes.LOGIN_FAILURE:
            return {...state, isLoggedIn: false, errMsg: action.payload, user: null};
        case ActionTypes.LOGOUT_SUCCESS:
            return {...state, isLoggedIn: false, errMsg: null, user: null};
        default:
            return state;
    }
}

export default Login;