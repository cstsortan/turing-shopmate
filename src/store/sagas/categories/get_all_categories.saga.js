import { call, put, takeLatest } from 'redux-saga/effects';
import { FETCH_ALL_CATEGORIES, fetchAllCategoriesFailed, fetchAllCategoriesSuccess } from '../../actions';
import categoriesService from '../../../services/categoriesService';

function* fetchAllDepartments() {
    try {
        const allDepartments = yield call(categoriesService.getFullDepartments);
        yield put(fetchAllCategoriesSuccess({departments: allDepartments}));
    } catch (error) {
        yield put(fetchAllCategoriesFailed({error}));
    }
}

export function* getFetchAllDepartmentsWatcher() {
    yield takeLatest(FETCH_ALL_CATEGORIES, fetchAllDepartments);
}
