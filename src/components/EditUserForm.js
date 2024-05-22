import React, { useState, useEffect } from 'react';

const EditUserForm = ({ editing, setEditing, currentUser, updateUser }) => {
  const [user, setUser] = useState(currentUser);

  useEffect(() => {
    setUser(currentUser);
  }, [currentUser]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updateUser(user.id, user);
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
      <button className="btn btn-primary">Update user</button>
      <button onClick={() => setEditing(false)} className="btn btn-secondary ms-2">Cancel</button>
    </form>
  );
};

export default EditUserForm;
