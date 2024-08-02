import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../reducers'; // Adjust import according to your setup
import { getUsers } from '../../services/userService'; // Ensure this import matches the export

const UserList: React.FC = () => {
  const dispatch = useDispatch();
  const { users, loading, error } = useSelector((state: RootState) => state.user);

  useEffect(() => {
    getUsers(dispatch);
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map((user: any) => ( // Replace `any` with the actual user type
          <li key={user.id}>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
