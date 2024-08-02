import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../reducers/index'; 
import { getUserById } from '../../services/userService';

const UserProfile: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();
  const { user, loading, error } = useSelector((state: RootState) => state.user);

  useEffect(() => {
    if (id) {
      getUserById(id, dispatch);
    }
  }, [id, dispatch]);

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

export default UserProfile;
