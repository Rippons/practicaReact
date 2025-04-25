import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import TransformadorChartApp from './TransformadorChartApp'; // Gráfico
import About from './About'; // Acerca de
import Sidebar from './Sidebar'; // Barra lateral
import Header from './Header'; // Encabezado
import DashboardCard from './DashboardCard'; // Tarjetas
import IngresoChartApp from './IngresoChartApp';
import TransformadorForm from './TransformadorForm';
import './CSS/App.css'; // Estilos generales
import 'primereact/resources/themes/lara-light-indigo/theme.css'; 
import 'primereact/resources/primereact.min.css';  // Estilos de PrimeReact
import 'primeicons/primeicons.css';



const Home = () => <h2>Inicio</h2>;

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const body = document.body;
    if (darkMode) {
      body.classList.add('dark-mode');
    } else {
      body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
  };

  return (
    <Router>
      <div className="app">
        <Sidebar />
        <div className="content">
          <Header />

          {/* Botón para cambiar modo oscuro/claro */}
          <div style={{ textAlign: 'right', marginBottom: '10px' }}>
            <button className="toggle-theme" onClick={toggleDarkMode}>
              {darkMode ? '☀️ Modo Claro' : '🌙 Modo Oscuro'}
            </button>
          </div>

          <hr />

          <div className="dashboard">
            <DashboardCard title="Ingresos (M)" value="$776,100.00" />
            <DashboardCard title="Perdidas (M)" value="$200,000.00" />
            <DashboardCard title="Medidores" value="53" />
            <DashboardCard title="Tandas" value="20" />
            <DashboardCard title="Sellos Asignados" value="9000" />
            <DashboardCard title="Sellos Instalados" value="628" />
       
          </div>

          <nav>
            <ul style={{ display: 'flex', gap: '10px', listStyle: 'none', padding: 0 }}>
              <li><Link to="/"><button className="button">Inicio</button></Link></li>
              <li><Link to="/about"><button className="button">Acerca de</button></Link></li>
              <li><Link to="/grafico"><button className="button">Gráfico de Transformadores</button></Link></li>
              
            </ul>
          </nav>

          <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/epm" element={<TransformadorForm />} /> 
  <Route
  path="/grafico"
  element={
    <div className="charts-container">
      <div className="chart-card">
        <TransformadorChartApp />
      </div>
      <div className="chart-card">
        <IngresoChartApp />
      </div>
    </div>
  }
/>

</Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
