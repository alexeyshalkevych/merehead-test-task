import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import routes from '../../constants/routes';
import { FETCH_ADD_USER, FETCH_UPDATE_USER } from '../../constants/actionTypes';
import 'materialize-css/dist/css/materialize.min.css';

const formInitialState = { name: '', surname: '', desc: '' };

const UserForm = ({ formState, actionType, buttonLabel }) => {
  const [form, setForm] = useState(formState);
  const dispatch = useDispatch();
  const history = useHistory();

  const onChangeHandler = e => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const onSubmitHandler = e => {
    e.preventDefault();

    const user = {
      ...form,
    };

    if (actionType === FETCH_ADD_USER) {
      dispatch({ type: actionType, user });
    }

    if (actionType === FETCH_UPDATE_USER) {
      const { id } = formState;

      dispatch({ type: actionType, id, user });
    }

    setForm(formInitialState);

    history.push(routes.HOME);
  };

  return (
    <div className="container">
      <form className="col s12" onSubmit={onSubmitHandler}>
        <div className="row">
          <div className="input-field col s12">
            <input
              type="text"
              onChange={onChangeHandler}
              value={form.name}
              name="name"
              className="validate"
              placeholder="Name"
            />
          </div>
          <div className="input-field col s12">
            <input
              type="text"
              onChange={onChangeHandler}
              value={form.surname}
              name="surname"
              placeholder="Surname"
            />
          </div>
          <div className="input-field col s12">
            <textarea
              type="text"
              onChange={onChangeHandler}
              value={form.desc}
              name="desc"
              className="materialize-textarea"
              placeholder="Description"
              data-length="80"
            />
          </div>
        </div>
        <button
          type="submit"
          disabled={
            !form.name.trim() || !form.surname.trim() || !form.desc.trim()
          }
          className="waves-effect waves-light btn"
        >
          {buttonLabel}
        </button>
      </form>
    </div>
  );
};

UserForm.defaultProps = {
  formState: formInitialState,
};

UserForm.propTypes = {
  formState: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
  }),
  actionType: PropTypes.string.isRequired,
  buttonLabel: PropTypes.string.isRequired,
};

export default UserForm;
