import { put, call, takeLatest } from 'redux-saga/effects';
import {
  FETCH_ADD_USER,
  FETCH_DELETE_USER,
  FETCH_UPDATE_USER,
  FETCH_USERS,
} from '../../constants/actionTypes';
import {
  fetchAddUser,
  fetchDeleteUser,
  fetchUpdateUser,
  fetchUsers,
} from '../../services/usersApi';
import {
  addUserRequest,
  addUsersError,
  addUsersSuccess,
  deleteUserRequest,
  deleteUsersError,
  deleteUsersSuccess,
  getUsersError,
  getUsersRequest,
  getUsersSuccess,
  updateUserRequest,
  updateUsersError,
  updateUsersSuccess,
} from '../actions/usersActions';

function* getUsersWorker() {
  yield put(getUsersRequest());

  try {
    const users = yield call(fetchUsers);

    yield put(getUsersSuccess(users));
  } catch (error) {
    yield put(getUsersError(error));
  }
}

function* addUserWorker({ user }) {
  yield put(addUserRequest());

  try {
    const newUser = yield call(fetchAddUser, user);

    yield put(addUsersSuccess(newUser));

    getUsersWorker();
  } catch (error) {
    yield put(addUsersError(error));
  }
}

function* deleteUserWorker({ id }) {
  yield put(deleteUserRequest());

  try {
    yield call(fetchDeleteUser, id);

    yield put(deleteUsersSuccess(id));

    getUsersWorker();
  } catch (error) {
    yield put(deleteUsersError(error));
  }
}

function* updateUserWorker({ id, user }) {
  yield put(updateUserRequest());

  try {
    yield call(fetchUpdateUser, id, user);

    yield put(updateUsersSuccess(id, user));

    getUsersWorker();
  } catch (error) {
    yield put(updateUsersError(error));
  }
}

export function* getUsersWatcher() {
  yield takeLatest(FETCH_USERS, getUsersWorker);
}

export function* addUserWatcher() {
  yield takeLatest(FETCH_ADD_USER, addUserWorker);
}

export function* deleteUserWatcher() {
  yield takeLatest(FETCH_DELETE_USER, deleteUserWorker);
}

export function* updateUserWatcher() {
  yield takeLatest(FETCH_UPDATE_USER, updateUserWorker);
}
