import React  from 'react'
import { Link } from 'react-router-dom'
// import 'font-awesome/css/font-awesome.min.css';



// import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  // const navigate = useNavigate();

  return (
    // <!-- Sidebar -->
    <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id='accordionSidebar'>
      {/* <!-- Sidebar - Brand --> */}
      <Link to="/" className="sidebar-brand d-flex align-items-center justify-content-center">

        <div className="sidebar-brand-icon rotate-n-15">
          <i className="fas fa-laugh-wink"></i>
        </div>
        <div className="sidebar-brand-text mx-3">
          Admin Dashboard <sup>2</sup>
        </div>
        </Link>

      {/* <!-- Divider --> */}
      <hr className="sidebar-divider my-0" />

      {/* <!-- Nav Item - Dashboard --> */}
      <li className="nav-item active">
      <Link to="/" className="nav-link">
            <i
              className="fas fa-fw fa-tachometer-alt"
             
            ></i>
            <span>Dashboard</span>
       
        </Link>
      </li>

      {/* <!-- Divider --> */}
      <hr className="sidebar-divider" />

      {/* <!-- Heading --> */}
      <div className="sidebar-heading">Interface</div>

      {/* <!-- Nav Item - Pages Collapse Menu --> */}
      
      <li className="nav-item collapsed">
      <Link to="/student" className="nav-link">
            <i
              className="fa-solid fa-users-rectangle"
             
            ></i>
            <span>StudentManagement</span>
       
        </Link>
      </li>

      
      {/* <!-- Divider --> */}
      <hr className="sidebar-divider" />

     
      {/* <!-- Nav Item - Tables --> */}
      <li className="nav-item">
      <Link to="/teacher" className="nav-link">
          
            <i className="fa-solid fa-chalkboard-user"></i>
            <span>Teacher Management</span> 
            
        </Link>
      </li>


      {/* <!-- Divider --> */}
      <hr className="sidebar-divider d-none d-md-block" />

      {/* <!-- Sidebar Toggler (Sidebar) --> */}
      <div className="text-center d-none d-md-inline">
        <button
          className="rounded-circle border-0"
          id="sidebarToggle"
         
        ></button>
      </div>

      {/* <!-- Sidebar Message --> */}
      <div className="sidebar-card d-none d-lg-flex">
        <img
          className="sidebar-card-illustration mb-2"
          src="img/undraw_rocket.svg"
          alt="..."
        />
        <p className="text-center mb-2">
          <strong>SB Admin Pro</strong>
          is packed with premium features, components, and more!
        </p>
        <a
          className="btn btn-success btn-sm"
          href="https://startbootstrap.com/theme/sb-admin-pro"
        >
          Upgrade to Pro!
        </a>
      </div>
    </ul>
    // <!-- End of Sidebar -->
  )
}

export default Sidebar