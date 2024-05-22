// Rename the file to AppCrud.js

import React, { useState } from 'react';
import UserTable from './UserTable';
import UserForm from './UserForm';
import EditUserForm from './EditUserForm';
import initialData from '../data.json';

const AppCrud = () => {
  const [users, setUsers] = useState(initialData);
  const [editing, setEditing] = useState(false);
  const [currentUser, setCurrentUser] = useState({ id: null, name: '', email: '' });

  const addUser = (user) => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const updateUser = (id, updatedUser) => {
    setEditing(false);
    setUsers(users.map((user) => (user.id === id ? updatedUser : user)));
  };

  const editRow = (user) => {
    setEditing(true);
    setCurrentUser({ id: user.id, name: user.name, email: user.email });
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">CRUD App with React and Bootstrap</h1>
      <div className="row">
        <div className="col-md-6">
          {editing ? (
            <div>
              <h2>Edit user</h2>
              <EditUserForm
                editing={editing}
                setEditing={setEditing}
                currentUser={currentUser}
                updateUser={updateUser}
              />
            </div>
          ) : (
            <div>
              <h2>Add user</h2>
              <UserForm addUser={addUser} />
            </div>
          )}
        </div>
        <div className="col-md-6">
          <h2>View users</h2>
          <UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
        </div>
      </div>
    </div>
  );
};

export default AppCrud;
