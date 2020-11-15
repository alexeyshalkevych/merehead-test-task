import { all } from 'redux-saga/effects';
import {
  addUserWatcher,
  deleteUserWatcher,
  getUsersWatcher,
  updateUserWatcher,
} from './usersSaga';

function* rootSaga() {
  yield all([
    getUsersWatcher(),
    addUserWatcher(),
    deleteUserWatcher(),
    updateUserWatcher(),
  ]);
}

export default rootSaga;
