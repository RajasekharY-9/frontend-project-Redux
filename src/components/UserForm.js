import React, { useState } from 'react';

const UserForm = ({ addUser }) => {
  const initialFormState = { id: null, name: '', email: '' };
  const [user, setUser] = useState(initialFormState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!user.name || !user.email) return;
    addUser(user);
    setUser(initialFormState);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label">Name</label>
        <input type="text" name="name" value={user.name} onChange={handleInputChange} className="form-control" />
      </div>
      <div className="mb-3">
        <label className="form-label">Email</label>
        <input type="email" name="email" value={user.email} onChange={handleInputChange} className="form-control" />
      </div>
      <button className="btn btn-success">Add new user</button>
    </form>
  );
};

export default UserForm;
