import React, { useState } from 'react';
import Swal from 'sweetalert2';

const Edit = ({ teachers, selectedteacher, setteachers, setIsEditing }) => {
  const id = selectedteacher.id;

  const [firstName, setFirstName] = useState(selectedteacher.firstName);
  const [lastName, setLastName] = useState(selectedteacher.lastName);
  const [email, setEmail] = useState(selectedteacher.email);
  const [department, setDepartment] = useState(selectedteacher.department);
  const [qualifications, setQualifications] = useState(selectedteacher.qualifications);
  const [date, setDate] = useState(selectedteacher.date);

  const handleUpdate = e => {
    e.preventDefault();

    if (!firstName || !lastName || !email || !department  || !qualifications || !date) {
      return Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'All fields are required.',
        showConfirmButton: true,
      });
    }

    const teacher = {
      id,
      firstName,
      lastName,
      email,
      department,
      qualifications,
      date,
    };

    for (let i = 0; i < teachers.length; i++) {
      if (teachers[i].id === id) {
        teachers.splice(i, 1, teacher);
        break;
      }
    }

    localStorage.setItem('students_data', JSON.stringify(teachers));
    setteachers(teachers);
    setIsEditing(false);

    Swal.fire({
      icon: 'success',
      title: 'Updated!',
      text: `${teacher.firstName} ${teacher.lastName}'s data has been updated.`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="small-container">
      <form onSubmit={handleUpdate}>
        <h1>Edit Teacher</h1>
        <label htmlFor="firstName">First Name</label>
        <input
          id="firstName"
          type="text"
          name="firstName"
          value={firstName}
          onChange={e => setFirstName(e.target.value)}
        />
        <label htmlFor="lastName">Last Name</label>
        <input
          id="lastName"
          type="text"
          name="lastName"
          value={lastName}
          onChange={e => setLastName(e.target.value)}
        />
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        
        <label htmlFor="department">Department</label>
        <input
          id="department"
          type="text"
          name="department"
          value={department}
          onChange={e => setDepartment(e.target.value)}
        />

<label htmlFor="qualifications">Qualifications</label>
        <input
          id="qualifications"
          type="text"
          name="qualifications"
          value={qualifications}
          onChange={e => setQualifications(e.target.value)}
        />
        <label htmlFor="date">Date</label>
        <input
          id="date"
          type="date"
          name="date"
          value={date}
          onChange={e => setDate(e.target.value)}
        />
        <div style={{ marginTop: '30px' }}>
          <input type="submit" value="Update" />
          <input
            style={{ marginLeft: '12px' }}
            className="muted-button"
            type="button"
            value="Cancel"
            onClick={() => setIsEditing(false)}
          />
        </div>
      </form>
    </div>
  );
};

export default Edit;
