import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://192.168.43.91:8000',
    withCredentials: true,
});

export default apiClient;