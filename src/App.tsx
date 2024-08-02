import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Profile from './components/Profile/Profile';
import EditProfile from './components/Profile/EditProfile';
import UserList from './components/Users/UserList';
import UserProfile from './components/Users/UserProfile';
import { AuthProvider } from './context/authContext';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" Component={Login} />
          <Route path="/register" Component={Register} />
          <Route path="/profile" Component={Profile} />
          <Route path="/profile/edit" Component={EditProfile} />
          <Route path="/users" Component={UserList} />
          <Route path="/users/:id" Component={UserProfile} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
