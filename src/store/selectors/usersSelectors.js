export const takeUsers = state => state.users.users;

export const getCurrentUserEdit = (state, params) =>
  state.users.users.find(user => user.id === +params.id);

export const getLoading = state => state.users.isLoading;

export const getError = state => state.users.error;
