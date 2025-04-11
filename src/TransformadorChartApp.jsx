import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import './CSS/TransformadorChart.css';  // Importa el archivo CSS

// Registramos los elementos de Chart.js necesarios
ChartJS.register(ArcElement, Tooltip, Legend);

const TransformadorChartApp = () => {
  
  // Datos para el gráfico: 12 transformadores funcionales y 4 no funcionales
  const data = {
    labels: ['Funcionales', 'No Funcionales'],
    datasets: [
      {
        label: 'Transformadores',
        data: [12, 23], // Datos: 12 funcionando, 4 no funcionando
        backgroundColor: ['#228B22', '#808080'],
        hoverBackgroundColor: ['#00FF00', '#C0C0C0'],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    },
  };

  return (
    <div className="transformador-chart-container">
      <h2 className="transformador-chart-title">Estado de los Transformadores</h2>
      <Pie data={data} options={options} />
    </div>
  );
};

export default TransformadorChartApp;
