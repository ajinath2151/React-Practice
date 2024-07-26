import React, { useState } from 'react';

const PasswordCheck = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleBlur = () => {
    if (password !== confirmPassword) {
      setMessage('Passwords do not match');
    } else {
      setMessage('Passwords match');
    }
  };

  return (
    <div>
      <div>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}            
          />
        </label>
      </div>
      <div>
        <label>
          Confirm Password:
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            onBlur={handleBlur}
          />
        </label>
      </div>
      <div>
        {message && <p>{message}</p>}
      </div>
    </div>
  );
};

export default PasswordCheck;
