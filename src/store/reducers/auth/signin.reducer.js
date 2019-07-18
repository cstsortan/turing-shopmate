import { SIGNIN_REQUESTED, SIGNIN_FAILED, SIGNIN_SUCCESS, SIGNIN_EMAIL_CHANGED, SIGNIN_PASSWORD_CHANGED } from "../../actions/auth/signin.action";

const initialState = {
    email: 'test1@test.gr',
    password: '123321',
    isLoggingIn: false,
    error: null,
    isLoggedIn: false,
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case SIGNIN_REQUESTED:
        return {
            ...state,
            isLoggingIn: true,
            error: null,
        };

    case SIGNIN_FAILED:
        return {
            ...state,
            isLoggingIn: false,
            error: payload,
        };

    case SIGNIN_SUCCESS:
        return {
            ...state,
            isLoggingIn: false,
            error: null,
            isLoggedIn: true,
        };

    case SIGNIN_EMAIL_CHANGED: 
        return {
            ...state,
            email: payload,
        };
    case SIGNIN_PASSWORD_CHANGED: 
        return {
            ...state,
            password: payload,
        };
    default:
        return state
    }
}
