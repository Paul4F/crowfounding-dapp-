import React, { useState, useEffect } from 'react';
import Web3 from 'web3';
import YourContract from './contract/Crowdfunding.json';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar";
import CreateCampaign from './pages/crearCampanea';
import DonatePage from './pages/DonatePage,jsx';

const App = () => {
  const [web3, setWeb3] = useState(null);
  const [accounts, setAccounts] = useState(null);
  const [contract, setContract] = useState(null);

  useEffect(() => {
    loadWeb3();
  }, []);

  const loadWeb3 = async () => {
    try {
      
      const web3 = new Web3('http://127.0.0.1:7545'); 
      const accounts = await web3.eth.getAccounts(); 
      const networkId = await web3.eth.net.getId();  
      const deployedNetwork = YourContract.networks[networkId];  
      const contract = new web3.eth.Contract(
        YourContract.abi,"0x341928fb3454812d0791462355EA895Ce5C7b52c" // Crear instancia del contrato
      );
      setWeb3(web3);
      setAccounts(accounts);
      setContract(contract);
    } catch (error) {
      console.error("Error al conectar a Web3:", error);
    }
  };

  if (!web3 || !accounts || !contract) {
    return <div>Cargando DApp...</div>;
  }
  const containerStyle = {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#050a30", // color de fondo
    color: "white", // color de texto
    padding: '8px',  /* Ajusta el valor según el tamaño de la barra de navegación */
    
  };

  return (
    <Router>
    <div style={{backgroundColor: '#f4a261'}}>
      <Navbar />
      <div style={containerStyle}>
      <h1>¡Bienvenido a la DApp de Crowdfunding!</h1>
      <Routes>
        <Route 
          path="/" element={<Home web3={web3} accounts={accounts} contract={contract} />} 
        />

        <Route 
              path="/create-campaing"
              element={<CreateCampaign web3={web3} accounts={accounts} contract={contract} />}
            />
           <Route path="/donar/:campaignId" component={DonatePage} />
      </Routes>
      </div>
      
    </div>
  </Router>
  );
};


export default App;