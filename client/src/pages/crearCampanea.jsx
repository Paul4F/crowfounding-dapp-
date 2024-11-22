import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Cambiar useHistory por useNavigate

// Definir la dirección del contrato directamente en el código
const CONTRACT_ADDRESS = '0xb0F3467dC09744653e2f3445960B41f7a4F615e3';  // Dirección del contrato

const CreateCampaign = ({ web3, accounts, contract }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [target, setTarget] = useState('');
  const [deadline, setDeadline] = useState('');
  const [image, setImage] = useState('');
  const navigate = useNavigate(); // Iniciar useNavigate

 

  // Establecer una red válida, por ejemplo, si usas Rinkeby (red de pruebas)
  const YOUR_NETWORK_ID = 4; // Reemplazar con el ID de la red que estás utilizando (Ej. Rinkeby es 4)

  // Verificar que MetaMask esté conectado y en la red correcta
  useEffect(() => {
    if (accounts.length === 0) {
      alert('Por favor, conecta tu cuenta de MetaMask');
    } else {
      // Aquí puedes verificar si MetaMask está en la red correcta, por ejemplo:
      web3.eth.net.getId().then((networkId) => {
        if (networkId !== YOUR_NETWORK_ID) {
          alert('Por favor, conecta MetaMask a la red correcta');
        }
        else {
          alert('conectado correctamente');
        }
      });
    }
  }, [accounts, web3]);

  // Verificar que el contrato esté cargado con la dirección correcta
  useEffect(() => {
    if (!CONTRACT_ADDRESS) {
      alert('Contrato no encontrado. Asegúrate de haber configurado correctamente la dirección del contrato.');
    }
  }, [CONTRACT_ADDRESS]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Verificar que todos los datos estén disponibles
    if (!web3 || !contract || !accounts || accounts.length === 0) {
      alert('Asegúrate de que Web3 y el contrato estén correctamente cargados y que MetaMask esté conectado');
      return;
    }

    // Verificar que el objetivo sea un número válido
    if (isNaN(target) || target <= 0) {
      alert('Por favor, ingresa un valor válido para la meta');
      return;
    }

    const targetInWei = web3.utils.toWei(target, 'ether');
    const deadlineInUnix = new Date(deadline).getTime() / 1000; // Convertir a Unix timestamp

    try {
      const response = await contract.methods
        .createCampaign(accounts[0], title, description, targetInWei, deadlineInUnix, image)
        .send({ from: accounts[0] });

      console.log('Campaña creada:', response);
      alert('¡Campaña creada con éxito!');

      // Redirigir después de la creación de la campaña
      navigate('/'); // Esto te redirige a la página principal
    } catch (error) {
      console.error('Error al crear campaña:', error);
      
      // Verificar si el error tiene un mensaje específico
      if (error.message) {
        alert(`Hubo un error al crear la campaña: ${error.message}`);
      } else {
        alert('Hubo un error desconocido al crear la campaña');
      }
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Crear una nueva campaña</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Título</label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Descripción</label>
          <textarea
            className="form-control"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label>Meta (en ETH)</label>
          <input
            type="number"
            className="form-control"
            value={target}
            onChange={(e) => setTarget(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Fecha límite</label>
          <input
            type="date"
            className="form-control"
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Imagen de la campaña (URL)</label>
          <input
            type="text"
            className="form-control"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary mt-3">
          Crear campaña
        </button>
      </form>
    </div>
  );
};

export default CreateCampaign;
