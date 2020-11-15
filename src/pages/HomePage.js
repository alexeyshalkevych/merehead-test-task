import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReactPaginate from 'react-paginate';
import UsersList from '../components/UserList/UserList';
import { getUsers } from '../store/actions/usersActions';
import {
  getError,
  getLoading,
  takeUsers,
} from '../store/selectors/usersSelectors';
import getCurrentUsers from '../helpers/usersHelpers';

const Users = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(5);
  const dispatch = useDispatch();
  const users = useSelector(takeUsers);
  const loader = useSelector(getLoading);
  const error = useSelector(getError);

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = getCurrentUsers(
    users,
    indexOfFirstUser,
    indexOfLastUser,
  );

  const pagesCount = Math.ceil(users.length / usersPerPage);

  const paginate = pageNumber => {
    const newPageNumber = pageNumber + 1;

    setCurrentPage(newPageNumber);
  };

  useEffect(() => {
    if (!users.length) {
      dispatch(getUsers());
    }

    if (users.length && currentUsers.length === 0) {
      setCurrentPage(pagesCount);
    }
  }, [users.length, dispatch, setCurrentPage, currentUsers.length, pagesCount]);

  return (
    <>
      {loader && (
        <div className="progress">
          <div className="indeterminate" />
        </div>
      )}
      {error ? (
        <h2 className="center">Something went wrong</h2>
      ) : (
        <div className="container">
          {users.length ? (
            <>
              <UsersList users={currentUsers} />
              <ReactPaginate
                previousLabel="&#10094;"
                nextLabel="&#10095;"
                breakLabel="..."
                breakClassName="break-me"
                pageCount={pagesCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={data => paginate(data.selected)}
                containerClassName="pagination center"
                subContainerClassName="pages pagination"
                activeClassName="active"
              />
            </>
          ) : (
            <h3 className="center">Users list empty</h3>
          )}
        </div>
      )}
    </>
  );
};

export default Users;
