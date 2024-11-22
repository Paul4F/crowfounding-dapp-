import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const CampaignCard = ({ title, image, link, campaignId }) => {
    return (
        <div className="col-md-4 mb-4">
            <div className="card" style={{ height: '350px' }}>
                <img
                    src={image || "https://via.placeholder.com/350x200"}
                    className="card-img-top"
                    alt={title}
                    style={{ height: '200px', objectFit: 'cover' }} // Ajusta la imagen
                />
                <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{title}</h5>
                    <Link to={link} className="btn btn-primary mt-auto">
                        Ver Más
                    </Link>
                    <Link
                        to={`/donar/${campaignId}`}  // Redirige a la página de donación de la campaña
                        className="btn btn-success mt-2"
                    >
                        Donar
                    </Link>
                </div>
            </div>
        </div>
    );
};

// Validación de props
CampaignCard.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string,
    link: PropTypes.string.isRequired,
    campaignId: PropTypes.string.isRequired, // ID único de la campaña
};

export default CampaignCard;
