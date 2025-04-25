import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './CSS/Sidebar.css';


const Sidebar = () => {
  const [openParametros, setOpenParametros] = useState(false);
  const [openSeguridad, setOpenSeguridad] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false); // ← para responsive

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      {/* Botón hamburguesa */}
      <button className="menu-toggle" onClick={toggleSidebar}>☰</button>

      {/* Sidebar con clase dinámica */}
      <div className={`sidebar ${sidebarOpen ? '' : 'closed'}`}>
        <div className="logo">
          <img src="/img/logocens.png" alt="CENS" />
        </div>

        <div className="sidebar-section">
          <p className="section-title">LABORATORIOS</p>
          <Link to="/" className="main-button" onClick={() => setSidebarOpen(false)}>
            <span className="icon">🏠</span>
            Ensayos Y Calibración
            <span className="arrow"></span>
          </Link>
        </div>

        <div className="sidebar-section">
          <p className="section-title">ADMINISTRACIÓN</p>

          {/* PARÁMETROS */}
          <div className="submenu">
            <div
              className="submenu-title"
              onClick={() => setOpenParametros(!openParametros)}
            >
              <span className="icon">⚙️</span>
              Parámetros
              <span className="arrow">{openParametros ? '▲' : '▼'}</span>
            </div>

            <ul className={`submenu-items ${openParametros ? 'open' : ''}`}>
              <li><Link to="/epm" onClick={() => setSidebarOpen(false)}>EPM</Link></li>
              <li><Link to="/ensayos" onClick={() => setSidebarOpen(false)}>Ensayos</Link></li>
              <li><Link to="/certificados" onClick={() => setSidebarOpen(false)}>Certificados Calibración</Link></li>
            </ul>
          </div>

          {/* SEGURIDAD */}
          <div className="submenu">
            <div
              className="submenu-title"
              onClick={() => setOpenSeguridad(!openSeguridad)}
            >
              <span className="icon">🔒</span>
              Seguridad
              <span className="arrow">{openSeguridad ? '▲' : '▼'}</span>
            </div>

            <ul className={`submenu-items ${openSeguridad ? 'open' : ''}`}>
              <li><Link to="/usuarios" onClick={() => setSidebarOpen(false)}>Usuarios</Link></li>
              <li><Link to="/roles" onClick={() => setSidebarOpen(false)}>Roles</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
