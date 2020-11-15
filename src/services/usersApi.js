import axios from 'axios';

export const fetchUsers = async () => {
  const { data } = await axios.get('http://77.120.241.80:8811/api/users');

  return data;
};

export const fetchAddUser = async user => {
  const { data } = await axios.post(
    'http://77.120.241.80:8811/api/users',
    user,
  );

  return data;
};

export const fetchDeleteUser = async id => {
  await axios.delete(`http://77.120.241.80:8811/api/user/${id}`);
};

export const fetchUpdateUser = async (id, userUpdate) => {
  const { data } = await axios.put(
    `http://77.120.241.80:8811/api/user/${id}`,
    userUpdate,
  );

  return data;
};
