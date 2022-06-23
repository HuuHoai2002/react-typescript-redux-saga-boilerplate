import { all } from 'redux-saga/effects';

export function* rootSaga() {
  console.log('run root saga');
  yield all([]);
}
