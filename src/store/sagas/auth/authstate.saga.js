import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import authService from '../../../services/authService';
import { changeAuthState, CHECK_AUTH_STATE, REQUEST_LOGOUT, LOGGED_OUT_COMPLETE } from "../../actions/auth";

function* initializeAuthState(action) {
    const data = yield call(authService.getCurrentUser);
    yield put(changeAuthState(
        {
            user: data ? data.user : null,
            token: data ? data.token : null,
        }
    ));
}

export function* getAuthStateInitializerWatcher() {
    yield takeLatest(CHECK_AUTH_STATE, initializeAuthState);
}

function* logout() {
    yield authService.logout();
    yield put({ type: LOGGED_OUT_COMPLETE });
}

export function* getLogoutWatcher() {
    yield takeLatest(REQUEST_LOGOUT, logout);
}
