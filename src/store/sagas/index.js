import {all} from 'redux-saga/effects';
import productsSaga from './products';
import productSaga from './product';
import { authSaga } from './auth';
import { categoriesSaga } from './categories';
import { attributesSaga } from './attributes';

export default function* rootSaga() {
    yield all([
        productsSaga(),
        productSaga(),
        authSaga(),
        categoriesSaga(),
        attributesSaga(),
    ]);
}
