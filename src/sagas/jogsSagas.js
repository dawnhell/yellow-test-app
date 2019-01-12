import { put, call, takeEvery } from 'redux-saga/effects';

import { actions, setJogsActionCreator } from '../reducers/Jogs/actions';
import { addJogRequest, getJogsRequest } from '../api/api';

function* getJogs () {
  const { response } = yield call(getJogsRequest);
  yield put(setJogsActionCreator(response.jogs.sort((u1, u2) => (u1.id >= u2.id ? -1 : 1))));
}

function* addJog (jog) {
  const { response } = yield call(addJogRequest, jog.payload.jog);
  if (response.id) {
    yield call(getJogs);
  }
}

export default function* loginSagas () {
  yield takeEvery(actions.GET_JOGS, getJogs);
  yield takeEvery(actions.ADD_JOG, addJog);
}