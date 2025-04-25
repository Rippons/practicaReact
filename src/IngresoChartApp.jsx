import React from 'react';
import { Bar } from 'react-chartjs-2';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from 'chart.js';
import './CSS/IngresoChart.css'; // Estilos personalizados

// Registramos los elementos necesarios para el gráfico de barras
ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const IngresoChartApp = () => {
  const data = {
    labels: ['Ingresos', 'Pérdidas'],
    datasets: [
      {
        label: 'Valor en millones (M)',
        data: [776100, 200000],
        backgroundColor: ['#4CAF50', '#F44336'],
        borderRadius: 8,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: '#444', // Cambia con modo oscuro si lo deseas
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: function (value) {
            return '$' + value.toLocaleString();
          },
          color: '#444',
        },
      },
      x: {
        ticks: {
          color: '#444',
        },
      },
    },
  };

  return (
    <div className="ingreso-chart-container">
      <h2 className="ingreso-chart-title">Ingresos vs Pérdidas</h2>
      <Bar data={data} options={options} />
    </div>
  );
};

export default IngresoChartApp;
