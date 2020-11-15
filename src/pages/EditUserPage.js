import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import UserForm from '../components/UserForm/UserForm';
import { FETCH_UPDATE_USER } from '../constants/actionTypes';
import {
  getError,
  getCurrentUserEdit,
} from '../store/selectors/usersSelectors';

const EditUserPage = () => {
  const params = useParams();
  const error = useSelector(getError);
  const currentUserEdit = useSelector(state =>
    getCurrentUserEdit(state, params),
  );

  return (
    <>
      {error ? (
        <h2 className="center">Something went wrong</h2>
      ) : (
        <UserForm
          formState={currentUserEdit}
          actionType={FETCH_UPDATE_USER}
          buttonLabel="save"
        />
      )}
    </>
  );
};

export default EditUserPage;
