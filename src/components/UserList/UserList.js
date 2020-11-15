import React from 'react';
import PropTypes from 'prop-types';
import UserListItem from '../UserListItem/UserListItem';

const UserList = ({ users }) => (
  <ul className="collection">
    {users.map(user => (
      <UserListItem key={user.id} {...user} />
    ))}
  </ul>
);

UserList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      surname: PropTypes.string.isRequired,
      desc: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default UserList;
