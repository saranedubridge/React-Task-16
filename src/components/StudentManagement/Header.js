import React from 'react';



const Header = ({ setIsAdding, setIsAuthenticated }) => {
  return (
    <header>
      <h1>Student Management Software</h1>
      <div  style={{ marginTop: '30px', marginBottom: '18px' }}>
        <button className='btn btn-success'  onClick={() => setIsAdding(true)}>Add Student</button>
       
      </div>
    </header>
  );
};

export default Header;
