import { call, put, takeLatest } from 'redux-saga/effects'
import * as actions from '../../actions'
import attributesService from '../../../services/attributesService';

function* fetchAllAttributes() {
    try {
        const data = yield call(attributesService.getAttributes);
        yield put(actions.fetchAttributesSuccess(data));
    } catch (error) {
        yield put(actions.fetchAttributesError(error));
    }
}

export function* getFetchAttributesWatcher() {
    yield takeLatest(actions.FETCH_ATTRIBUTES, fetchAllAttributes);
}