import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CampaignCard from "../components/CampaignCard"; // Asegúrate de tener la ruta correcta de tu componente

// Datos de ejemplo de campaña, puedes reemplazarlo con datos reales de tu API o estado
const sampleCampaigns = [
    {
        id: "1",
        title: "Campaña de Educación",
        image: "https://dimexideas.com/wp-content/uploads/2024/02/classroom-1024x1024-1-jpg.webp", // Cambia la imagen si tienes una URL real
        link: "/campaña/1",
    },
    {
        id: "2",
        title: "Campaña de Medio Ambiente",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsjgQ-psoupE3sY8r7AfRrL9EJSEjgOvLVSQ&s",
        link: "/campaña/2",
    },
    {
        id: "3",
        title: "Campaña de Salud",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSczE9Ch8Ak_M4l2PRKitOv_-FlrhERpU6Jdg&s",
        link: "/campaña/3",
    },
];

const Home = () => {
    const [campaigns, setCampaigns] = useState([]);

    // Cargar las campañas al inicio
    useEffect(() => {
        setCampaigns(sampleCampaigns);
    }, []);

    return (
        <div>
            {/* Header Section */}
            <header className="header text-center py-5">
                <div className="container">
                    <h1 className="text-white">Bienvenido a la Plataforma de Crowdfunding</h1>
                    <p className="text-white">Apoya las campañas que más te gusten y ayuda a cambiar el mundo.</p>
                    <Link to="/create-campaing" className="btn btn-light btn-lg">Crear Campaña</Link>
                </div>
            </header>

            {/* Main Content */}
            <div className="container">
                <h2 className="my-4 text-center text-white">Campañas Activas</h2>
                
                {/* Contenedor de las cards con Flexbox */}
                <div className="row">
                    {campaigns.map((campaign) => (
                        <div className="col-md-4 mb-4" key={campaign.id}>
                            <div className="card" style={{ height: '350px' }}> {/* Se ajusta el tamaño de las cards */}
                                <img
                                    src={campaign.image || "https://via.placeholder.com/350x200"}
                                    className="card-img-top"
                                    alt={campaign.title}
                                    style={{ height: '200px', objectFit: 'cover' }} // Ajusta la imagen
                                />
                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title">{campaign.title}</h5>
                                    <Link to={campaign.link} className="btn btn-primary mt-auto">
                                        Ver Más
                                    </Link>
                                    <Link
                                        to={`/donar/${campaign.id}`}  // Enlace al formulario de donación de la campaña
                                        className="btn btn-success mt-2"
                                    >
                                        Donar
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;
