import { takeLatest, call, select, put } from "redux-saga/effects";
import { REQUEST_REGISTER, registerError, registerSuccessful, changeAuthState } from '../../actions/auth';
import authService from '../../../services/authService';
import { hideAuth } from "../../actions/alerts";
function* register() {
    const { email, password, name, error } = yield select(state => state.auth.register);
    try {
        const res = yield call(authService.signUp, email, password, name);
        yield put(registerSuccessful(res));
        yield put(changeAuthState({
            user: res.customer,
            token: res.accessToken,
        }));
        yield put(hideAuth());
    } catch(error) {
        yield put(registerError(error));
    }

}

export function* getRegisterWatcher() {
    yield takeLatest(REQUEST_REGISTER, register);
}