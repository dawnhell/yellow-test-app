import { all } from 'redux-saga/effects'

import loginSagas from './loginSagas';
import jogsSagas from './jogsSagas';

export default function* rootSaga() {
  yield all([
    loginSagas(),
    jogsSagas()
  ]);
}