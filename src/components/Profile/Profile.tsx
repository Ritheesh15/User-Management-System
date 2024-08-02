import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../reducers'; // Adjust import according to your setup
import { getUserById } from '../../services/userService'; // Import your service

const Profile: React.FC = () => {
  const dispatch = useDispatch();
  const { user, loading, error } = useSelector((state: RootState) => state.user); // Adjust to access user state

  useEffect(() => {
    // Assuming you get user ID from somewhere, e.g., URL params
    const userId = 'some-id'; // Replace with actual logic to get user ID
    getUserById(userId, dispatch);
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      {user ? (
        <div>
          <h1>{user.name}</h1>
          <p>{user.email}</p>
          <p>{user.bio}</p>
        </div>
      ) : (
        <p>User not found</p>
      )}
    </div>
  );
};

export default Profile;
