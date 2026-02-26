import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000/api/careers' });

export const getCareerMatch = (data) => API.post('/match', data);
export const getCareerAnalytics = (data) => API.post('/analytics', data);