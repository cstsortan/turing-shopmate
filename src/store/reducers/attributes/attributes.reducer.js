import * as actions from '../../actions'

const initialState = {
    isLoading: false,
    data: [],
    error: null,
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case actions.FETCH_ATTRIBUTES:
        return {
            ...state,
            isLoading: true,
            error: null,
        }
    
    case actions.FETCH_ALL_CATEGORIES_SUCCESS:
        return {
            ...state,
            isLoading: false,
            data: payload,
            error: null,
        }

    case actions.FETCH_ALL_CATEGORIES_FAILED:
        return {
            ...state,
            isLoading: false,
            error: payload
        }

    default:
        return state
    }
}
