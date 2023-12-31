import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';

import Header from './Header';
import Table from './Table';
import Add from './AddStudent';
import Edit from './Edit';

import { studentData } from '../data/students';

const StudentDashboard = ({ setIsAuthenticated }) => {
  const [students, setstudents] = useState(studentData);
  const [selectedstudent, setSelectedstudent] = useState(null);
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('students_data'));
    if (data !== null && Object.keys(data).length !== 0) setstudents(data);
  }, []);

  const handleEdit = id => {
    const [student] = students.filter(student => student.id === id);

    setSelectedstudent(student);
    setIsEditing(true);
  };

  const handleDelete = id => {
    Swal.fire({
      icon: 'warning',
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
    }).then(result => {
      if (result.value) {
        const [student] = students.filter(student => student.id === id);

        Swal.fire({
          icon: 'success',
          title: 'Deleted!',
          text: `${student.firstName} ${student.lastName}'s data has been deleted.`,
          showConfirmButton: false,
          timer: 1500,
        });

        const studentsCopy = students.filter(student => student.id !== id);
        localStorage.setItem('students_data', JSON.stringify(studentsCopy));
        setstudents(studentsCopy);
      }
    });
  };

  return (
    <div className="container">
      {!isAdding && !isEditing && (
        <>
          <Header
            setIsAdding={setIsAdding}
            setIsAuthenticated={setIsAuthenticated}
          />
          <Table
            students={students}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        </>
      )}
      {isAdding && (
        <Add
          students={students}
          setstudents={setstudents}
          setIsAdding={setIsAdding}
        />
      )}
      {isEditing && (
        <Edit
          students={students}
          selectedstudent={selectedstudent}
          setstudents={setstudents}
          setIsEditing={setIsEditing}
        />
      )}
    </div>
  );
};

export default StudentDashboard;
