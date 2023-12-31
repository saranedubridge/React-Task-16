import React, { useState } from 'react';

const Table = ({ teachers, handleEdit, handleDelete }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentTeachers = teachers.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="contain-table">
      <table className="table table-striped table-responsive">
        <thead>
          <tr>
            <th>No.</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Department</th>
            <th>Qualifications</th>
            <th>Date</th>
            <th colSpan={2} className="text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentTeachers.length > 0 ? (
            currentTeachers.map((teacher, index) => (
              <tr key={teacher.id}>
                <td data-title="No.">{indexOfFirstItem + index + 1}</td>
                <td data-title="First Name">{teacher.firstName}</td>
                <td data-title="Last Name">{teacher.lastName}</td>
                <td data-title="Email">{teacher.email}</td>
                <td data-title="Department">{teacher.department}</td>
                <td data-title="Qualifications">{teacher.qualifications}</td>
                <td data-title="Date">{teacher.date}</td>
                <td data-title="Edit" className="text-right">
                  <button onClick={() => handleEdit(teacher.id)} className="btn btn-primary">Edit</button>
                </td>
                <td data-title="Delete" className="text-left">
                  <button onClick={() => handleDelete(teacher.id)} className="btn btn-danger">Delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={7}>No Teacher</td>
            </tr>
          )}
        </tbody>
      </table>
      <nav>
        <ul className="pagination">
          {[...Array(Math.ceil(teachers.length / itemsPerPage)).keys()].map(number => (
            <li key={number} className="page-item">
              <button 
                onClick={() => paginate(number + 1)} 
                className="page-link"
                style={{ border: 'none', background: 'none', color: '#007bff', cursor: 'pointer' }}
              >
                {number + 1}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Table;
