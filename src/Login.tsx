import React, { SyntheticEvent, useState } from 'react';
import { loginUser } from './apiService';

export const Login = ({ isOpen, onClose, setUser, setUserName }: {
  isOpen: boolean,
  onClose: () => void,
  setUser: (user: any) => void,
  setUserName: (name: string) => void
}) => {
  const [username, _setUsername] = useState('');
  const [password, _setPassword] = useState('');

  const handleSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();
    const userAuth = await loginUser({ username, password });
    userAuth && setUser(userAuth)
    console.log(username);
    setUserName(username);
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
              onChange={e => _setUsername(e.target.value)}
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