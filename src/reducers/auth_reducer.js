import { AUTH_USER, AUTH_ERROR, UNAUTH_USER, FETCH_MSG} from '../actions/types';

export default  function (state = [], action) {
    switch (action.type){
        case AUTH_USER:
            return { ...state, error: '', authenticated: true};
        case AUTH_ERROR:
            return { ...state, error: action.payload};
        case UNAUTH_USER:
            return {...state, authenticate: false};
        case FETCH_MSG:
            return { ...state, message: action.payload }
    }
    return state
}

