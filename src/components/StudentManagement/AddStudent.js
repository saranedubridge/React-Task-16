import React, { useState } from 'react';
import Swal from 'sweetalert2';

const Add = ({ students, setstudents, setIsAdding }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [teacher, setTeacher] = useState('');
  const [date, setDate] = useState('');

  const handleAdd = e => {
    e.preventDefault();

    if (!firstName || !lastName || !email || !teacher || !date) {
      return Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'All fields are required.',
        showConfirmButton: true,
      });
    }

    const id = students.length + 1;
    const newStudent = {
      id,
      firstName,
      lastName,
      email,
      teacher,
      date,
    };

    students.push(newStudent);
    localStorage.setItem('students_data', JSON.stringify(students));
    setstudents(students);
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
        <h1>Add Student</h1>
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
          <label htmlFor="teacher">Teacher</label>
          <input
            id="teacher"
            type="text"
            className="form-control"
            name="teacher"
            value={teacher}
            onChange={e => setTeacher(e.target.value)}
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
