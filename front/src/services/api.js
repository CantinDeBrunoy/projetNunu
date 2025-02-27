import axios from 'axios';

const API_URL = `http://${process.env.REACT_APP_API_HOST || 'backend-service'}:${process.env.REACT_APP_API_PORT || '3001'}/api/auth`;

export const api = {
  register: async (email, password) => {
    console.log('Tentative d\'inscription vers:', API_URL);
    try {
      const response = await axios.post(`${API_URL}/register`, { email, password });
      return response.data;
    } catch (error) {
      console.error('Erreur détaillée:', error.response || error);
      throw error;
    }
  },
  
  login: async (email, password) => {
    const response = await axios.post(`${API_URL}/login`, { email, password });
    return response.data;
  },
  
  getProfile: async (token) => {
    const response = await axios.get(`${API_URL}/me`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
  }
}; 