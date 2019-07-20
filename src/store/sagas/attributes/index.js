import { all } from 'redux-saga/effects';
import { getFetchAttributesWatcher } from './all-attributes.saga';

export function* attributesSaga() {
    yield all([
        getFetchAttributesWatcher(),
    ])
}
