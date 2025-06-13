import axios from 'axios';

const API_BASE = '/api/testimonials';

export async function getTestimonials() {
    const { data } = await axios.get(API_BASE);
    return data;
}

export async function getTestimonialsById(id) {
    const { data } = await axios.get(`${API_BASE}/${id}`);
    return data;
}

export async function createTestimonial(testimonialData, token) {
    const { data } = await axios.post(API_BASE, testimonialData, {
        headers: {Authorization: `Bearer ${token}`}
    });
    return data;
}

export async function updateTestimonial(id, testimonialData, token) {
    const { data } = await axios.put(`${API_BASE}/${id}`, testimonialData, {
        headers: {Authorization: `Bearer ${token}`}
    });
    return data;
}

export async function deleteTestimonial(id, token) {
    const { data } = await axios.delete(`${API_BASE}/${id}`, {
        headers: {Authorization: `Bearer ${token}`}
    });
    return data;
}