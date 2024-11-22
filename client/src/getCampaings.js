import Web3 from "web3";
import ContractABI from "./contract/Crowdfunding.json"; // Ruta a tu ABI

const getCampaigns = async () => {
    try {
        const web3 = new Web3(window.ethereum); // Asegúrate de que Metamask esté habilitado
        const contractAddress = "0x341928fb3454812d0791462355EA895Ce5C7b52c"; // Reemplaza con la dirección de tu contrato
        const contract = new web3.eth.Contract(ContractABI.abi, contractAddress);

        // Llamada a la función para obtener títulos e imágenes
        const data = await contract.methods.getCampaignTitlesAndImages().call();

        return data; // Devuelve un arreglo de [titles, images]
    } catch (error) {
        console.error("Error al obtener campañas:", error);
        return [[], []]; // Retorna arreglos vacíos si falla
    }
};

export default getCampaigns;
