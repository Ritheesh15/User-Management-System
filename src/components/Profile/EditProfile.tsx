import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateProfile } from '../../services/userService'; // Ensure this import matches the export

const EditProfile: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', bio: '' });
  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await updateProfile(formData, dispatch);
    // Handle post-update logic, e.g., redirect or show success message
  };

  return (
    <div>
      <h1>Edit Profile</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="bio">Bio</label>
          <textarea
            id="bio"
            name="bio"
            value={formData.bio}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Update Profile</button>
      </form>
    </div>
  );
};

export default EditProfile;
