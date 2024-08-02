import React, { useState, useContext } from 'react';
import { AuthContext } from '../../context/authContext';
import { register } from '../../services/authService';

const Register: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const { dispatch } = useContext(AuthContext);

  const { name, email, password } = formData;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    register({ name, email, password }, dispatch);
  };

  return (
    <div className="container">
      <h1>Register</h1>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={name}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={email}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={onChange}
            required
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Register" />
      </form>
    </div>
  );
};

export default Register;
