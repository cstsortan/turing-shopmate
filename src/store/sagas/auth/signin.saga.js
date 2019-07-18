import {put, takeLatest, call} from 'redux-saga/effects';
import authService from "../../../services/authService";
import { SIGNIN_REQUESTED, signinSuccess, SIGNIN_FAILED } from '../../actions/auth/signin.action';
import { changeAuthState } from '../../actions/auth';
import { hideAuth } from '../../actions/alerts';

function* signInSaga(action) {
    try {
        const { email, password } = action.payload;
        const data = yield call(authService.signIn, email, password);
        yield put(signinSuccess(data));
        yield put(changeAuthState(data.customer));
        yield put(hideAuth());
    } catch (error) {
        yield put({
            type: SIGNIN_FAILED, payload: error
        });
    }
}


export function* getSignInWatcher() {
    yield takeLatest(SIGNIN_REQUESTED, signInSaga);
}
