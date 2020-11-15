import React from 'react';
import { useSelector } from 'react-redux';
import UserForm from '../components/UserForm/UserForm';
import { FETCH_ADD_USER } from '../constants/actionTypes';
import { getError } from '../store/selectors/usersSelectors';

const CreateUserPage = () => {
  const error = useSelector(getError);

  return (
    <>
      {error ? (
        <h2 className="center">Something went wrong</h2>
      ) : (
        <UserForm actionType={FETCH_ADD_USER} buttonLabel="create user" />
      )}
    </>
  );
};

export default CreateUserPage;
