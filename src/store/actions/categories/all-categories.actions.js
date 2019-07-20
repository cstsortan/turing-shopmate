export const FETCH_ALL_CATEGORIES = 'FETCH_CATEGORIES';
export const fetchAllCategories = (payload) => ({
    type: FETCH_ALL_CATEGORIES,
    payload
})

export const FETCH_ALL_CATEGORIES_FAILED = 'FETCH_ALL_CATEGORIES_FAILED'
export const fetchAllCategoriesFailed = (payload) => ({
    type: FETCH_ALL_CATEGORIES_FAILED,
    payload
})

export const FETCH_ALL_CATEGORIES_SUCCESS = 'FETCH_ALL_CATEGORIES_SUCCESS'
export const fetchAllCategoriesSuccess = (payload) => ({
    type: FETCH_ALL_CATEGORIES_SUCCESS,
    payload
})
