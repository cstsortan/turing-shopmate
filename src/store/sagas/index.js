import {all} from 'redux-saga/effects';
import productsSaga from './products';
import productSaga from './product';
import { authSaga } from './auth';
import { categoriesSaga } from './categories';

export default function* rootSaga() {
    yield all([
        productsSaga(),
        productSaga(),
        authSaga(),
        categoriesSaga(),
    ]);
}
