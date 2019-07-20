import { takeLatest, call, put } from 'redux-saga/effects';
import * as actions from '../../actions';
import productsService from '../../../services/productsService';

function* getProductsInDepartment({payload}) {
    const categoryId = payload.categoryId;
    try {
        const res = yield call(productsService.getProductsInCategory, {category_id: categoryId});
        yield put(actions.getProductsInDepartmentSuccess(res));
    } catch (error) {
        yield put(actions.getProductsInDepartmentError());
    }
}

export function* getProductsInDepartmentWatcher() {
    yield takeLatest(actions.GET_PRODUCTS_IN_DEPARTMENT, getProductsInDepartment);
}
