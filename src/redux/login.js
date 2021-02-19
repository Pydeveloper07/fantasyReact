import * as ActionTypes from './ActionTypes';

const Login = (state = {
        isLoggedIn: localStorage.getItem('token')?true:false,
        errMsg: null,
        user: null
    }, action) => {
    switch(action.type){
        case ActionTypes.LOGIN_SUCCESS:
            return {...state, isLoggedIn: true, errMsg: null};
        case ActionTypes.LOGIN_FAILURE:
            return {...state, isLoggedIn: false, errMsg: action.payload, user: null};
        case ActionTypes.LOGOUT_SUCCESS:
            return {...state, isLoggedIn: false, errMsg: null, user: null};
        case ActionTypes.ADD_USER:
            return {...state, user: action.payload};
        case ActionTypes.USER_FAILED:
            return {...state, user:null}
        
        default:
            return state;
    }
}

export default Login;