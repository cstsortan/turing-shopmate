import { all } from 'redux-saga/effects';
import { getFetchAllDepartmentsWatcher } from './get_all_categories.saga';

export function* categoriesSaga() {
    yield all([
        getFetchAllDepartmentsWatcher(),
    ]);
}