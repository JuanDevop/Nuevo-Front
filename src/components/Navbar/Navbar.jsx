import React from 'react'
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.css'
import Logo from '../../Img/Logo.png'


const Navbar = () => {
  const [sidebar, setSidebar] = React.useState(false);
  const showSidebar = () => setSidebar(!sidebar);
    return (
      <nav className="navbar navbar-dark bg-primary">
      <div >
        <button className="" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
          <span className="navbar-toggler-icon" />
        </button>
        
        <Link className="navbar-brand ml-5" to='/'>
        <img width="40px" height="auto" className="d-inline-block align-text-top mr-3" src={Logo}  alt="logo" />  
          Gestion de Proyectos
          </Link>

        <div className="offcanvas offcanvas-start" tabIndex={-1} id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
          <div className="offcanvas-header bg-primary ">
            <h5 className="offcanvas-title text-white" id="offcanvasNavbarLabel">Gestion de Proyectos</h5>
            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close" />
          </div>
          <div className="offcanvas-body bg-primary">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
            </ul>
          </div>
        </div>
      </div>
    </nav>
    )
}

export default Navbar
