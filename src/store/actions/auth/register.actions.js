export const REQUEST_REGISTER = 'REQUEST_REGISTER'
export const requestRegister = (payload) => ({
    type: REQUEST_REGISTER,
    payload
})

export const REGISTER_SUCCESSFUL = 'REGISTER_SUCCESSFUL'
export const registerSuccessful = (payload) => ({
    type: REGISTER_SUCCESSFUL,
    payload
})

export const REGISTER_ERROR = 'REGISTER_ERROR'
export const registerError = (payload) => ({
    type: REGISTER_ERROR,
    payload
})

export const REGISTER_EMAIL_CHANGED = 'REGISTER_EMAIL_CHANGED'
export const registerEmailChanged = (payload) => ({
    type: REGISTER_EMAIL_CHANGED,
    payload
})

export const REGISTER_PASSWORD_CHANGED = 'REGISTER_PASSWORD_CHANGED'
export const registerPasswordChanged = (payload) => ({
    type: REGISTER_PASSWORD_CHANGED,
    payload
})

export const REGISTER_NAME_CHANGED = 'REGISTER_NAME_CHANGED'
export const registerNameChanged = (payload) => ({
    type: REGISTER_NAME_CHANGED,
    payload
})


