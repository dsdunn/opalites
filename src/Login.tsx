import React, { SyntheticEvent, useState } from 'react';
import { loginUser } from './apiService';

// Login Modal
export const Login = ({ isOpen, onClose, getUser }: {
  isOpen: boolean,
  onClose: () => void,
  getUser: (token: string) => void
}) => {
  const [username, _setUser] = useState('');
  const [password, _setPassword] = useState('');

  const handleSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();
    const userAuth = await loginUser({ username, password });

    userAuth?.AccessToken && localStorage.setItem('opalites_admin_token', userAuth.AccessToken);

    getUser(userAuth?.AccessToken || '');
    onClose(); 
  };

  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <form onSubmit={handleSubmit}>
          <h2>Login</h2>
          <div className="form-group">
            <label>Username:</label>
            <input
              type="text"
              value={username}
              onChange={e => _setUser(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={e => _setPassword(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
}