import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';

import Header from './Header';
import Table from './TeacherTable';
import Add from './AddTeacher'
import Edit from './EditTeacher';

import { teacherData } from '../data/teachers';

const TeacherDashboard = ({ setIsAuthenticated }) => {
  const [teachers, setteachers] = useState(teacherData);
  const [selectedteacher, setSelectedteacher] = useState(null);
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('teachers_data'));
    if (data !== null && Object.keys(data).length !== 0) setteachers(data);
  }, []);

  const handleEdit = id => {
    const [teacher] = teachers.filter(teacher => teacher.id === id);

    setSelectedteacher(teacher);
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
        const [teacher] = teachers.filter(teacher => teacher.id === id);

        Swal.fire({
          icon: 'success',
          title: 'Deleted!',
          text: `${teacher.firstName} ${teacher.lastName}'s data has been deleted.`,
          showConfirmButton: false,
          timer: 1500,
        });

        const teachersCopy = teachers.filter(teacher => teacher.id !== id);
        localStorage.setItem('teachers_data', JSON.stringify(teachersCopy));
        setteachers(teachersCopy);
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
            teachers={teachers}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        </>
      )}
      {isAdding && (
        <Add
          teachers={teachers}
          setteachers={setteachers}
          setIsAdding={setIsAdding}
        />
      )}
      {isEditing && (
        <Edit
          teachers={teachers}
          selectedteacher={selectedteacher}
          setteachers={setteachers}
          setIsEditing={setIsEditing}
        />
      )}
    </div>
  );
};

export default TeacherDashboard;
