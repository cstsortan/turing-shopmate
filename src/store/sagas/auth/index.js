import { all } from 'redux-saga/effects';
import { getSignInWatcher } from './signin.saga';
import { getAuthStateInitializerWatcher, getLogoutWatcher } from './authstate.saga';

export function* authSaga() {
    yield all([
        getSignInWatcher(),
        getAuthStateInitializerWatcher(),
        getLogoutWatcher(),
    ])
}