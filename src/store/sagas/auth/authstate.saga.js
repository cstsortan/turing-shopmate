import { call, put, takeEvery } from "redux-saga/effects";
import authService from '../../../services/authService';
import { changeAuthState, CHECK_AUTH_STATE } from "../../actions/auth";

function* initializeAuthState(action) {
    const authState = yield call(authService.getCurrentUser);
    yield put(changeAuthState(authState));
}

export function* getAuthStateInitializerWatcher() {
    yield takeEvery(CHECK_AUTH_STATE, initializeAuthState);
}