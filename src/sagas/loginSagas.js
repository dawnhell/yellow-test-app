import { put, call, takeEvery } from 'redux-saga/effects';

import { actions, setTokenActionCreator } from '../reducers/Login/actions';
import { loginRequest } from '../api/api';

function* login () {
  const { response } = yield call(loginRequest, 'hello');

  localStorage.setItem('Token', response.access_token);
  localStorage.setItem('Expires', response.created_at + response.expires_in);

  yield put(setTokenActionCreator(response.access_token));
}

export default function* loginSagas () {
  yield takeEvery(actions.LOGIN, login);
}
