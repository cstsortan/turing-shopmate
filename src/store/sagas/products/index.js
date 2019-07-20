import { all } from 'redux-saga/effects';
import { getAllProductsWatcher } from './get_all_products.saga';
import { getProductsInDepartmentWatcher } from './get_products_in_department.saga';

export default function* productsSaga() {
    yield all([
        getAllProductsWatcher(),
        getProductsInDepartmentWatcher(),
    ]);
}