import React, { useState } from 'react';
// Import your CSS file here


const Table = ({ students, handleEdit, handleDelete }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentStudents = students.slice(indexOfFirstItem, indexOfLastItem);

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
            <th>Teacher</th>
            <th>Date</th>
            <th colSpan={2} className="text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentStudents.length > 0 ? (
            currentStudents.map((student, index) => (
              <tr key={student.id}>
                <td data-title="No.">{indexOfFirstItem + index + 1}</td>
                <td data-title="First Name">{student.firstName}</td>
                <td data-title="Last Name">{student.lastName}</td>
                <td data-title="Email">{student.email}</td>
                <td data-title="Teacher">{student.teacher}</td>
                <td data-title="Date">{student.date}</td>
                <td data-title="Edit" className="text-right">
                  <button onClick={() => handleEdit(student.id)} className="btn btn-primary">Edit</button>
                </td>
                <td data-title="Delete" className="text-left">
                  <button onClick={() => handleDelete(student.id)} className="btn btn-danger">Delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={7}>No Students</td>
            </tr>
          )}
        </tbody>
      </table>
      <nav>
        <ul className="pagination">
          {[...Array(Math.ceil(students.length / itemsPerPage)).keys()].map(number => (
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
