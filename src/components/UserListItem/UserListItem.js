import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { FETCH_DELETE_USER } from '../../constants/actionTypes';
import {
  UserItem,
  UserItemContent,
  UserItemButtonsConteiner,
} from './UserListItem.styled';

const UserListItem = ({ name, surname, desc, id }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const userDelete = () => {
    dispatch({ type: FETCH_DELETE_USER, id });
  };

  const userUpdate = () => {
    history.push(`/users/edit/${id}`);
  };

  return (
    <UserItem className="collection-item">
      <UserItemContent className="first-content">
        <span>
          <b>{name} </b>
        </span>
        <span>
          <b>{surname}</b>
        </span>
        <p>{desc}</p>
      </UserItemContent>
      <UserItemButtonsConteiner>
        <button
          type="button"
          onClick={userDelete}
          className="waves-effect waves-light btn"
        >
          &#10006;
        </button>
        <button
          type="button"
          onClick={userUpdate}
          className="waves-effect waves-light btn"
        >
          &#9998;
        </button>
      </UserItemButtonsConteiner>
    </UserItem>
  );
};

UserListItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  surname: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};

export default UserListItem;
