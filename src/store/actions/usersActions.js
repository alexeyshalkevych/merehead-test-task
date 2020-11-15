import {
  FETCH_USERS,
  FETCH_USERS_ERROR,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_ADD_USER,
  FETCH_ADD_USER_REQUEST,
  FETCH_ADD_USER_SUCCESS,
  FETCH_ADD_USER_ERROR,
  FETCH_DELETE_USER,
  FETCH_DELETE_USER_REQUEST,
  FETCH_DELETE_USER_SUCCESS,
  FETCH_DELETE_USER_ERROR,
  FETCH_UPDATE_USER,
  FETCH_UPDATE_USER_REQUEST,
  FETCH_UPDATE_USER_SUCCESS,
  FETCH_UPDATE_USER_ERROR,
} from '../../constants/actionTypes';

export const getUsers = () => ({
  type: FETCH_USERS,
});
export const getUsersRequest = () => ({
  type: FETCH_USERS_REQUEST,
});
export const getUsersSuccess = users => ({
  type: FETCH_USERS_SUCCESS,
  payload: users,
});
export const getUsersError = error => ({
  type: FETCH_USERS_ERROR,
  payload: error,
});

export const addUser = () => ({
  type: FETCH_ADD_USER,
});
export const addUserRequest = () => ({
  type: FETCH_ADD_USER_REQUEST,
});
export const addUsersSuccess = user => ({
  type: FETCH_ADD_USER_SUCCESS,
  payload: user,
});
export const addUsersError = error => ({
  type: FETCH_ADD_USER_ERROR,
  payload: error,
});

export const deleteUser = () => ({
  type: FETCH_DELETE_USER,
});
export const deleteUserRequest = () => ({
  type: FETCH_DELETE_USER_REQUEST,
});
export const deleteUsersSuccess = id => ({
  type: FETCH_DELETE_USER_SUCCESS,
  payload: id,
});
export const deleteUsersError = error => ({
  type: FETCH_DELETE_USER_ERROR,
  payload: error,
});

export const updateUser = () => ({
  type: FETCH_UPDATE_USER,
});
export const updateUserRequest = () => ({
  type: FETCH_UPDATE_USER_REQUEST,
});
export const updateUsersSuccess = (id, user) => ({
  type: FETCH_UPDATE_USER_SUCCESS,
  payload: {
    id,
    user,
  },
});
export const updateUsersError = error => ({
  type: FETCH_UPDATE_USER_ERROR,
  payload: error,
});
