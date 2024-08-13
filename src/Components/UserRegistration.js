import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserRegistration = () => {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({ id: null, name: '', email: '' });
  const [isEditing, setIsEditing] = useState(false);

  const fakeApiUrl = 'https://jsonplaceholder.typicode.com/users';

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const response = await axios.get(fakeApiUrl);
    setUsers(response.data);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isEditing) {
      await axios.put(`${fakeApiUrl}/${formData.id}`, formData);
    } else {
      await axios.post(fakeApiUrl, formData);
    }
    setFormData({ id: null, name: '', email: '' });
    setIsEditing(false);
    fetchUsers();
  };

  const handleEdit = (user) => {
    setFormData(user);
    setIsEditing(true);
  };

  const handleDelete = async (id) => {
    await axios.delete(`${fakeApiUrl}/${id}`);
    fetchUsers();
  };

  return (
    <div>
      <h2>User Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
        <button type="submit">{isEditing ? 'Update User' : 'Add User'}</button>
      </form>

      <h2>User List</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <button onClick={() => handleEdit(user)}>Edit</button>
                <button onClick={() => handleDelete(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserRegistration;
