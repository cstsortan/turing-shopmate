import { AUTH_STATE_CHANGED } from "../../actions/auth";

const initialState = {
    isLoading: true,
    user: null,
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case AUTH_STATE_CHANGED:
        return {
            isLoading: false,
            user: payload,
        }

    default:
        return state
    }
}
