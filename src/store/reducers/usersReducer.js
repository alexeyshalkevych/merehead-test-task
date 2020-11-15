const {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_ERROR,
  FETCH_ADD_USER_REQUEST,
  FETCH_ADD_USER_SUCCESS,
  FETCH_ADD_USER_ERROR,
  FETCH_DELETE_USER_REQUEST,
  FETCH_DELETE_USER_SUCCESS,
  FETCH_DELETE_USER_ERROR,
  FETCH_UPDATE_USER_REQUEST,
  FETCH_UPDATE_USER_SUCCESS,
  FETCH_UPDATE_USER_ERROR,
} = require('../../constants/actionTypes');

const initialState = {
  users: [],
  error: null,
  isLoading: false,
};

const usersReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_USERS_REQUEST:
    case FETCH_ADD_USER_REQUEST:
    case FETCH_DELETE_USER_REQUEST:
    case FETCH_UPDATE_USER_REQUEST:
      return { ...state, isLoading: true };

    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        users: payload,
        isLoading: false,
      };
    case FETCH_ADD_USER_SUCCESS:
      return {
        ...state,
        users: [...state.users, payload],
        isLoading: false,
      };
    case FETCH_DELETE_USER_SUCCESS:
      return {
        ...state,
        users: state.users.filter(user => user.id !== payload),
        isLoading: false,
      };
    case FETCH_UPDATE_USER_SUCCESS:
      return {
        ...state,
        users: state.users.map(user =>
          user.id === payload.id ? { ...user, ...payload.user } : user,
        ),
        isLoading: false,
      };

    case FETCH_USERS_ERROR:
    case FETCH_ADD_USER_ERROR:
    case FETCH_DELETE_USER_ERROR:
    case FETCH_UPDATE_USER_ERROR:
      return {
        ...state,
        error: payload,
        isLoading: false,
      };

    default:
      return state;
  }
};

export default usersReducer;
