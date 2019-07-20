import {combineReducers} from 'redux';
import alerts from './alerts';
import products from './products';
import product from './product';
import auth from './auth';
import categories from './categories';
import attributes from './attributes';

const createReducer = (asyncReducers) =>
    combineReducers({
        alerts,
        products,
        product,
        auth,
        categories,
        attributes,
        ...asyncReducers
    });

export default createReducer;
