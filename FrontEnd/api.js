import axios from 'axios';

const API = axios.create({ baseURL: `${import.meta.env.VITE_SERVER_APP_URL}` }); 
export const uploadModel = (formData) => API.post('/addModel', formData);
export const getModels = () => API.get('/getAllModels');
