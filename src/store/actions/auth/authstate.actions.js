export const AUTH_STATE_CHANGED = 'AUTH_STATE_CHANGED';
export const changeAuthState = (payload) => ({
    type: AUTH_STATE_CHANGED,
    payload
});

export const CHECK_AUTH_STATE = 'CHECK_AUTH_STATE';

export const REQUEST_LOGOUT = 'REQUEST_LOGOUT';
export const LOGGED_OUT_COMPLETE = 'LOGGED_OUT_COMPLETE';
