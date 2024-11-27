import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL, // Base URL configurada em .env
  timeout: 20000, // 20 segundos
});

// Exibe a baseURL configurada no console para depuração
console.log('Base URL da API:', process.env.REACT_APP_API_BASE_URL);

export default api;
