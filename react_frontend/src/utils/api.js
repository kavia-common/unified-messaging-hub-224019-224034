import axios from 'axios';

const API_BASE = process.env.REACT_APP_API_BASE || 'http://localhost:3001/api';

/**
 * PUBLIC_INTERFACE
 * api
 * Axios instance configured with baseURL from REACT_APP_API_BASE.
 */
export const api = axios.create({ baseURL: API_BASE });

/**
 * PUBLIC_INTERFACE
 * getMessages
 * Fetch messages for a given userId.
 * @param {string} userId - The user identifier
 * @returns {Promise<any>} Parsed response data
 */
export const getMessages = async (userId) => (await api.get(`/messages/${userId}`)).data;

/**
 * PUBLIC_INTERFACE
 * sendMessage
 * Send a message payload.
 * @param {object} payload - Message data {sender, platform, content, timestamp}
 * @returns {Promise<any>} Parsed response data
 */
export const sendMessage = async (payload) => (await api.post('/messages/send', payload)).data;
