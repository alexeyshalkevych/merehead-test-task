const getCurrentUsers = (users, indexOfFirstUser, indexOfLastUser) =>
  (users && users.slice(indexOfFirstUser, indexOfLastUser)) || [];

export default getCurrentUsers;
