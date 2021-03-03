import * as ActionTypes from './ActionTypes';

const Message = (state = {
        type: "",
        content: ""
    }, action) => {
    switch(action.type){
        case ActionTypes.SET_MESSAGE:
            return {...state, type: action.payload.type, content: action.payload.content};
        default:
            return state;
    }
}

export default Message;