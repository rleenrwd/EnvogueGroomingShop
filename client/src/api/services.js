import axios from 'axios';

const API_BASE = '/api/services';

export async function getServices() {
    const { data } = await axios.get(API_BASE);
    return data;
}

export async function getServiceById(id) {
    const { data } = await axios.get(`${API_BASE}/${id}`);
    return data;
}

export async function createService(serviceData, token) {
    const { data } = await axios.post(API_BASE, serviceData, {
        headers: {Authorization: `Bearer ${token}`},
    });
    return data;
}

export async function updateService(id, serviceData, token) {
    const { data } = await axios.put(`${API_BASE}/${id}`, serviceData, {
        headers: {Authorization: `Bearer ${token}`},
    });
    return data;
}

export async function deleteService(id, token) {
    const { data } = await axios.delete(`${API_BASE}/${id}`, {
        headers: {Authorization: `Bearer ${token}`},
    });
    return data;
}