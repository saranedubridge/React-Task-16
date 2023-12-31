import React, { useState } from 'react';
import Swal from 'sweetalert2';

const Edit = ({ students, selectedstudent, setstudents, setIsEditing }) => {
  const id = selectedstudent.id;

  const [firstName, setFirstName] = useState(selectedstudent.firstName);
  const [lastName, setLastName] = useState(selectedstudent.lastName);
  const [email, setEmail] = useState(selectedstudent.email);
  const [teacher, setteacher] = useState(selectedstudent.teacher);
  const [date, setDate] = useState(selectedstudent.date);

  const handleUpdate = e => {
    e.preventDefault();

    if (!firstName || !lastName || !email || !teacher || !date) {
      return Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'All fields are required.',
        showConfirmButton: true,
      });
    }

    const student = {
      id,
      firstName,
      lastName,
      email,
      teacher,
      date,
    };

    for (let i = 0; i < students.length; i++) {
      if (students[i].id === id) {
        students.splice(i, 1, student);
        break;
      }
    }

    localStorage.setItem('students_data', JSON.stringify(students));
    setstudents(students);
    setIsEditing(false);

    Swal.fire({
      icon: 'success',
      title: 'Updated!',
      text: `${student.firstName} ${student.lastName}'s data has been updated.`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="small-container">
      <form onSubmit={handleUpdate}>
        <h1>Edit Student</h1>
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
        <label htmlFor="salary">Teacher</label>
        <input
          id="teacher"
          type="text"
          name="teacher"
          value={teacher}
          onChange={e => setteacher(e.target.value)}
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
