import axios from 'axios';

const API_BASE = '/api/auth';

export async function loginUser(credentials) {
    const { data } = await axios.post(`${API_BASE}/login`, credentials);
    return data;
}


