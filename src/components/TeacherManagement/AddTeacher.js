import React, { useState } from 'react';
import Swal from 'sweetalert2';

const Add = ({ teachers, setteachers, setIsAdding }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [department, setDepartment] = useState('');
  const [qualifications, setQualifications] = useState('');
  const [date, setDate] = useState('');

  const handleAdd = e => {
    e.preventDefault();

    if (!firstName || !lastName || !email || !department  || !qualifications || !date) {
      return Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'All fields are required.',
        showConfirmButton: true,
      });
    }

    const id = teachers.length + 1;
    const newTeacher = {
      id,
      firstName,
      lastName,
      email,
      department,
      qualifications,
      date,
    };

    teachers.push(newTeacher);
    localStorage.setItem('Teachers_data', JSON.stringify(teachers));
    setteachers(teachers);
    setIsAdding(false);

    Swal.fire({
      icon: 'success',
      title: 'Added!',
      text: `${firstName} ${lastName}'s data has been Added.`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="small-container">
      <form onSubmit={handleAdd}>
        <h1>Add Teacher</h1>
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input
            id="firstName"
            type="text"
            className="form-control"
            name="firstName"
            value={firstName}
            onChange={e => setFirstName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input
            id="lastName"
            type="text"
            className="form-control"
            name="lastName"
            value={lastName}
            onChange={e => setLastName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            className="form-control"
            name="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="department">Department</label>
          <input
            id="department"
            type="text"
            className="form-control"
            name="department"
            value={department}
            onChange={e => setDepartment(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="qualifications">Qualifications</label>
          <input
            id="qualifications"
            type="text"
            className="form-control"
            name="qualifications"
            value={qualifications}
            onChange={e => setQualifications(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="date">DOB</label>
          <input
            id="date"
            type="date"
            className="form-control"
            name="date"
            value={date}
            onChange={e => setDate(e.target.value)}
          />
        </div>
        <div style={{ marginTop: '30px' }}>
          <button type="submit" className="btn btn-primary">Add</button>
          <button
            style={{ marginLeft: '12px' }}
            className="btn btn-secondary"
            type="button"
            onClick={() => setIsAdding(false)}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default Add;
