import React from 'react';
import { Link } from 'react-router-dom';

const CampaignListPage = () => {
  // Simulando algunas campañas, normalmente esta data vendría de una API o contrato inteligente
  const campaigns = [
    { id: 1, name: 'Campaña de Educación', description: 'Apoya la educación de niños en áreas rurales.' },
    { id: 2, name: 'Campaña de Salud', description: 'Ayuda a financiar tratamientos médicos para personas sin recursos.' },
    { id: 3, name: 'Campaña Ambiental', description: 'Contribuye a la protección del medio ambiente.' },
  ];

  return (
    <div className="container mt-5">
      <h1>Campañas disponibles</h1>
      <div className="list-group">
        {campaigns.map((campaign) => (
          <Link key={campaign.id} className="list-group-item list-group-item-action" to={`/donar/${campaign.id}`}>
            <h5>{campaign.name}</h5>
            <p>{campaign.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CampaignListPage;
