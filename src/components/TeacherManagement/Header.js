import React from 'react';



const Header = ({ setIsAdding, setIsAuthenticated }) => {
  return (
    <header>
      <h1>Teacher Management Software</h1>
      <div  style={{ marginTop: '30px', marginBottom: '18px' }}>
        <button className='btn btn-success'  onClick={() => setIsAdding(true)}>Add Teachers</button>
       
      </div>
    </header>
  );
};

export default Header;
