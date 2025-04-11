import React from 'react';

const DashboardCard = ({ title, value}) => {
  return (
    <div className="dashboard-card">
      <div className="card-header">
        <h3>{title}</h3>
      </div>
      <div className="card-body">
        <h2>{value}</h2>
      </div>
    </div>
  );
};

export default DashboardCard;
