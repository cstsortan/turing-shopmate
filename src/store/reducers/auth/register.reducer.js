import { REQUEST_REGISTER, REGISTER_SUCCESSFUL, REGISTER_ERROR, REGISTER_EMAIL_CHANGED, REGISTER_PASSWORD_CHANGED, REGISTER_NAME_CHANGED } from "../../actions/auth/register.actions";

const initialState = {
    isLoading: false,
    email: '',
    password: '',
    name: '',
    error: null,
}

export default (state = initialState, { type, payload }) => {
    if (type === REQUEST_REGISTER) {
        if (!state.email) {
            return {
                ...state,
                error: {
                    code: 'no-email',
                },
            }
        }

        if (!state.email.includes('@') || !state.email.includes('.')) {
            return {
                ...state,
                error: {
                    code: 'invalid-email'
                }
            }
        }
        if (!state.password || !state.password.trim() || state.password.trim().length < 6) {
            return {
                ...state,
                error: {
                    code: 'invalid-password',
                }
            };
        }
        return {
            ...state,
            isLoading: true,
        }
    } else if (type === REGISTER_SUCCESSFUL) {
        return {
            ...state,
            isLoading: false,
            email: '',
            password: '',
            name: '',
            error: null,
        };

    } else if (type === REGISTER_ERROR) {
        return {
            ...state,
            isLoading: false,
            error: payload,
        }
    } else if (type === REGISTER_EMAIL_CHANGED) {
        return {
            ...state,
            email: payload,
        }
    } else if (type === REGISTER_PASSWORD_CHANGED) {
        return {
            ...state,
            password: payload,
        }
    } else if (type === REGISTER_NAME_CHANGED) {
        return {
            ...state,
            name: payload,
        }
    } else {
        return state;
    }
}
