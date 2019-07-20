import * as actions from '../../actions';

const initialState = {
    isLoading: false,
    departments: {},
    categories: {},
    error: null,
}

export default (state = initialState, { type, payload }) => {
    if (type === actions.FETCH_ALL_CATEGORIES) {
        return {
            ...state,
            isLoading: true,
            error: null,
        };
    } else if (type === actions.FETCH_ALL_CATEGORIES_FAILED) {
        return {
            ...state,
            isLoading: false,
            error: payload,
        }
    } else if (type === actions.FETCH_ALL_CATEGORIES_SUCCESS) {
        let departments = {};
        let categories = {};
        for (const department of payload.departments) {
            departments[department.department_id] = department;
            if (department.categories) {
                for (const category of department.categories) {
                    categories[category.category_id] = category;;
                }
            }
        }
        return {
            ...state,
            isLoading: false,
            error: null,
            departments,
            categories,
        }
    } else {
        return state;
    }
}
