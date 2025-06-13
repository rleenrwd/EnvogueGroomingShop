import axios from 'axios';

const API_BASE = '/api/bookings';

export async function getBookings(token) {
    const { data } = await axios.get(API_BASE, {
        headers: {Authorization: `Bearer ${token}`},
    });
    return data;
}

export async function getBookingById(id, token) {
    const { data } = await axios.get(`${API_BASE}/${id}`, {
        headers: {Authorization: `Bearer ${token}`},
    });
    return data;
}

export async function createBooking(bookingData) {
    const { data } = await axios.post(API_BASE, bookingData);
    return data;
}

export async function updateBooking(id, bookingData, token) {
    const { data } = await axios.put(`${API_BASE}/${id}`, bookingData, { 
        headers: {Authorization: `Bearer ${token}`},
    });
    return data;
}

export async function deleteBooking(id, token) {
    const { data } = await axios.delete(`${API_BASE}/${id}`, {
        headers: {Authorization: `Bearer ${token}`},
    });
    return data;
}