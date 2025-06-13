import axios from 'axios';

const API_BASE = '/api/contact';

export async function sendContactMessage(msgData) {
    const { data } = await axios.post(API_BASE, msgData);
    return data;
}

export async function getContactMessages(token) {
    const { data } = await axios.get(API_BASE, {
        headers: {Authorization: `Bearer ${token}`},
    });
    return data;
}