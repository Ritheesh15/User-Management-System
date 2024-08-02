import React, { useState, useContext } from 'react';
import { AuthContext } from '../../context/authContext';
import { login } from '../../services/authService';

const Login: React.FC = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { dispatch } = useContext(AuthContext);

  const { email, password } = formData;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    login({ email, password }, dispatch);
  };

  return (
    <div className="container">
      <h1>Login</h1>
      <form onSubmit={onSubmit}>
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
        <input type="submit" className="btn btn-primary" value="Login" />
      </form>
    </div>
  );
};

export default Login;
