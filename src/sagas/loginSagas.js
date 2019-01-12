import { put, takeEvery } from 'redux-saga/effects';

import { actions, setTokenActionCreator } from '../reducers/Login/actions';

function* login () {
  // API call...
  const token = 'hello-token';
  localStorage.setItem('Token', token);
  yield put(setTokenActionCreator(token));
}

export default function* loginSagas () {
  yield takeEvery(actions.LOGIN, login);
}
