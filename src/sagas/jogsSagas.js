import { put, call, takeEvery } from 'redux-saga/effects';

import { actions, setJogsActionCreator } from '../reducers/Jogs/actions';
import { getJogsRequest } from '../api/api';

function* getJogs () {
  const { response } = yield call(getJogsRequest);
  yield put(setJogsActionCreator(response.jogs));
}

export default function* loginSagas () {
  yield takeEvery(actions.GET_JOGS, getJogs);
}