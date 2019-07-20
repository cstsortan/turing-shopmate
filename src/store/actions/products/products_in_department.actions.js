export const GET_PRODUCTS_IN_DEPARTMENT = 'GET_PRODUCTS_IN_DEPARTMENT'
export const getProductsInDepartment = (payload) => ({
    type: GET_PRODUCTS_IN_DEPARTMENT,
    payload
})

export const GET_PRODUCTS_IN_DEPARTMENT_SUCCESS = 'GET_PRODUCTS_IN_DEPARTMENT_SUCCESS'
export const getProductsInDepartmentSuccess = (payload) => ({
    type: GET_PRODUCTS_IN_DEPARTMENT_SUCCESS,
    payload
})

export const GET_PRODUCTS_IN_DEPARTMENT_ERROR = 'GET_PRODUCTS_IN_DEPARTMENT_ERROR';
export const getProductsInDepartmentError = (payload) => ({
    type: GET_PRODUCTS_IN_DEPARTMENT_ERROR,
    payload
})
