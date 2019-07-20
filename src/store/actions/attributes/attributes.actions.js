export const FETCH_ATTRIBUTES = 'FETCH_ATTRIBUTES'
export const fetchAttributes = (payload) => ({
    type: FETCH_ATTRIBUTES,
    payload
})

export const FETCH_ATTRIBUTES_ERROR = 'FETCH_ATTRIBUTES_ERROR'
export const fetchAttributesError = (payload) => ({
    type: FETCH_ATTRIBUTES_ERROR,
    payload
})

export const FETCH_ATTRIBUTES_SUCCESS = 'FETCH_ATTRIBUTES_SUCCESS'
export const fetchAttributesSuccess = (payload) => ({
    type: FETCH_ATTRIBUTES_SUCCESS,
    payload
})
