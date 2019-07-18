export const SIGNIN_REQUESTED = 'SIGNIN_REQUESTED';

/**
 * Action creator to signin
 * @param {email, password} payload The signin credentials
 */
export const requestSignin = (payload) => ({
    type: SIGNIN_REQUESTED,
    payload
});

export const SIGNIN_SUCCESS = 'SIGNIN_SUCCESS';

export const SIGNIN_FAILED = 'SIGNIN_FAILED';

export const signinSuccess = (payload) => ({
    type: SIGNIN_SUCCESS,
    payload
});

export const SIGNIN_EMAIL_CHANGED = 'SIGNIN_EMAIL_CHANGED';
export const signinEmailChanged = (payload) => ({
    type: SIGNIN_EMAIL_CHANGED,
    payload
});

export const SIGNIN_PASSWORD_CHANGED = 'SIGNIN_PASSWORD_CHANGED';
export const signinPasswordChanged = (payload) => ({
    type: SIGNIN_PASSWORD_CHANGED,
    payload
});
