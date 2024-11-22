import React from 'react';

const Navbar = () => {
  return ( 
    <div className="container" style={{backgroundColor: '#050a30'}}>
    <nav className="navbar navbar-expand-lg navbar-light fixed-top" style={{ backgroundColor: '#f4f6fc', padding: '10px 50px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
        <a className="navbar-brand" href="/" style={{ color: '#3A438E', fontFamily: 'Verdana, sans-serif' }}>Fundify</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
            <li className="nav-item active">
            <a className="nav-link" href="/" style={{ color: '#3A438E', fontFamily: 'Verdana, sans-serif' }}>Home</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="/create-campaing" style={{ color: '#3A438E', fontFamily: 'Verdana, sans-serif' }}>Crear Campaña</a>
            </li>
        </ul>
        </div>
    </nav>
    </div>

  
  );
};

export default Navbar;
