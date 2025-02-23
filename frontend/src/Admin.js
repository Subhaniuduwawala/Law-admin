import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import './Admin.css';

function Admin() {
  const [activeSection, setActiveSection] = useState('appointments'); // Default to appointments section
  const [appointments, setAppointments] = useState([]);
  const [users, setUsers] = useState([]);
  const [appointmentForm, setAppointmentForm] = useState({
    id: null,
    name: '',
    email: '',
    date: '',
    time: '',
    lawType: '',
    lawyer: '',
  });
  const [userForm, setUserForm] = useState({
    id: null,
    name: '',
    email: '',
    password: '',
    type: '',
  });
  const [isAppointmentEdit, setIsAppointmentEdit] = useState(false);
  const [isUserEdit, setIsUserEdit] = useState(false);

  // Fetch Users from Backend
  const fetchUsers = async () => {
    try {
      const response = await fetch('http://localhost:8081/users');
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  // Fetch Appointments from Backend
  const fetchAppointments = async () => {
    try {
      const response = await fetch('http://localhost:8081/appointments');
      const data = await response.json();
      setAppointments(data);
    } catch (error) {
      console.error('Error fetching appointments:', error);
    }
  };

  useEffect(() => {
    if (activeSection === 'users') {
      fetchUsers();
    } else if (activeSection === 'appointments') {
      fetchAppointments();
    }
  }, [activeSection]);

  // Handle Input Changes for Appointment Form
  const handleAppointmentInputChange = (e) => {
    setAppointmentForm({ ...appointmentForm, [e.target.name]: e.target.value });
  };

  // Handle Input Changes for User Form
  const handleUserInputChange = (e) => {
    setUserForm({ ...userForm, [e.target.name]: e.target.value });
  };

  // Add or Update Appointment
  const handleAppointmentSubmit = async (e) => {
    e.preventDefault();
    const url = isAppointmentEdit
      ? `http://localhost:8081/appointments/${appointmentForm.id}`
      : 'http://localhost:8081/appointments';
    const method = isAppointmentEdit ? 'PUT' : 'POST';

    try {
      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(appointmentForm),
      });
      if (response.ok) {
        alert(isAppointmentEdit ? 'Appointment updated successfully!' : 'Appointment added successfully!');
        setAppointmentForm({
          id: null,
          name: '',
          email: '',
          date: '',
          time: '',
          lawType: '',
          lawyer: '',
        });
        setIsAppointmentEdit(false);
        fetchAppointments();
      } else {
        alert('Failed to save appointment');
      }
    } catch (error) {
      console.error('Error saving appointment:', error);
    }
  };

  // Add or Update User
  const handleUserSubmit = async (e) => {
    e.preventDefault();
    const url = isUserEdit
      ? `http://localhost:8081/users/${userForm.id}`
      : 'http://localhost:8081/users';
    const method = isUserEdit ? 'PUT' : 'POST';

    try {
      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userForm),
      });
      if (response.ok) {
        alert(isUserEdit ? 'User updated successfully!' : 'User added successfully!');
        setUserForm({
          id: null,
          name: '',
          email: '',
          password: '',
          type: '',
        });
        setIsUserEdit(false);
        fetchUsers();
      } else {
        alert('Failed to save user');
      }
    } catch (error) {
      console.error('Error saving user:', error);
    }
  };

  // Delete Appointment
  const handleAppointmentDelete = async (id) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this appointment?');
    if (confirmDelete) {
      try {
        const response = await fetch(`http://localhost:8081/appointments/${id}`, { method: 'DELETE' });
        if (response.ok) {
          alert('Appointment deleted successfully!');
          fetchAppointments();
        } else {
          alert('Failed to delete appointment.');
        }
      } catch (error) {
        console.error('Error deleting appointment:', error);
      }
    }
  };

  // Delete User
  const handleUserDelete = async (id) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this user?');
    if (confirmDelete) {
      try {
        const response = await fetch(`http://localhost:8081/users/${id}`, { method: 'DELETE' });
        if (response.ok) {
          alert('User deleted successfully!');
          fetchUsers();
        } else {
          alert('Failed to delete user.');
        }
      } catch (error) {
        console.error('Error deleting user:', error);
      }
    }
  };

  // Edit Appointment
  const handleAppointmentEdit = (appointment) => {
    setAppointmentForm(appointment);
    setIsAppointmentEdit(true);
  };

  // Edit User
  const handleUserEdit = (user) => {
    setUserForm(user);
    setIsUserEdit(true);
  };

  const renderSection = () => {
    if (activeSection === 'users') {
      return (
        <div className="section-content">
          <h2>User Details</h2>
          <table className="users-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Password</th>
                <th>Type</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.password}</td>
                  <td>{user.type}</td>
                  <td>
                    <button className="edit-btn" onClick={() => handleUserEdit(user)}>
                      Edit
                    </button>
                    <button className="delete-btn" onClick={() => handleUserDelete(user.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="user-form">
            <h3>{isUserEdit ? 'Edit User' : 'Add User'}</h3>
            <form onSubmit={handleUserSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={userForm.name}
                onChange={handleUserInputChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={userForm.email}
                onChange={handleUserInputChange}
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={userForm.password}
                onChange={handleUserInputChange}
                required
              />
              <select
                name="type"
                value={userForm.type}
                onChange={handleUserInputChange}
                required
              >
                <option value="">Select Type</option>
                <option value="user">User</option>
                <option value="admin">Admin</option>
              </select>
              <button className="submit-btn" type="submit">
                {isUserEdit ? 'Update User' : 'Add User'}
              </button>
            </form>
          </div>
        </div>
      );
    } else if (activeSection === 'appointments') {
      return (
        <div className="section-content">
          <h2>Appointment Details</h2>
          <table className="appointments-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Date</th>
                <th>Time</th>
                <th>Lawyer</th>
                <th>Law Type</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((appointment) => (
                <tr key={appointment.id}>
                  <td>{appointment.name}</td>
                  <td>{appointment.email}</td>
                  <td>{appointment.date}</td>
                  <td>{appointment.time}</td>
                  <td>{appointment.lawyer}</td>
                  <td>{appointment.lawType}</td>
                  <td>
                    <button className="edit-btn" onClick={() => handleAppointmentEdit(appointment)}>Edit</button>
                    <button className="delete-btn" onClick={() => handleAppointmentDelete(appointment.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="appointment-form">
            <h3>{isAppointmentEdit ? 'Edit Appointment' : 'Add Appointment'}</h3>
            <form onSubmit={handleAppointmentSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={appointmentForm.name}
                onChange={handleAppointmentInputChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={appointmentForm.email}
                onChange={handleAppointmentInputChange}
                required
              />
              <input
                type="date"
                name="date"
                value={appointmentForm.date}
                onChange={handleAppointmentInputChange}
                required
              />
              <input
                type="time"
                name="time"
                value={appointmentForm.time}
                onChange={handleAppointmentInputChange}
                required
              />
              <input
                type="text"
                name="lawyer"
                placeholder="Lawyer"
                value={appointmentForm.lawyer}
                onChange={handleAppointmentInputChange}
                required
              />
              <input
                type="text"
                name="lawType"
                placeholder="Law Type"
                value={appointmentForm.lawType}
                onChange={handleAppointmentInputChange}
                required
              />
              <button className="submit-btn" type="submit">
                {isAppointmentEdit ? 'Update Appointment' : 'Add Appointment'}
              </button>
            </form>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="admin-page">
      <Navbar />
      <main className="admin-main">
        <aside className="admin-sidebar">
          <ul>
            <li onClick={() => setActiveSection('users')} className={activeSection === 'users' ? 'active' : ''}>
              User Details
            </li>
            <li onClick={() => setActiveSection('appointments')} className={activeSection === 'appointments' ? 'active' : ''}>
              Appointment Details
            </li>
            
          </ul>
        </aside>
        <section className="admin-content">{renderSection()}</section>
      </main>
    </div>
  );
}

export default Admin;
