import {combineReducers} from 'redux';
import alerts from './alerts';
import products from './products';
import product from './product';
import auth from './auth';

const createReducer = (asyncReducers) =>
    combineReducers({
        alerts,
        products,
        product,
        auth,
        ...asyncReducers
    });

export default createReducer;
