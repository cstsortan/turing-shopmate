import * as actions from '../../actions';

const initialState = {
    categoryId: null,
    departmentId: null,
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case actions.SELECT_CATEGORY:
        return {
            ...state,
            categoryId: payload.categoryId,
            departmentId: payload.departmentId,
        }

    default:
        return state
    }
}
