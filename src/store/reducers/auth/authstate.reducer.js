import { AUTH_STATE_CHANGED, LOGGED_OUT_COMPLETE, REQUEST_LOGOUT } from "../../actions/auth";

const initialState = {
    isLoading: true,
    user: null,
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case AUTH_STATE_CHANGED:
        return {
            ...state,
            isLoading: false,
            user: payload,
        };

    case REQUEST_LOGOUT:
        return {
            ...state,
            isLoading: true,
        };

    case LOGGED_OUT_COMPLETE:
        return {
            ...state,
            isLoading: false,
            user: null,
        };

    default:
        return state
    }
}
