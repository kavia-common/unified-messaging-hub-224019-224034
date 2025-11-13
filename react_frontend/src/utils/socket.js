import { io } from 'socket.io-client';

const SOCKET_URL = process.env.REACT_APP_SOCKET_URL || 'http://localhost:3001';

/**
 * PUBLIC_INTERFACE
 * socket
 * This is a pre-configured Socket.IO client instance that connects to the
 * backend server using REACT_APP_SOCKET_URL (fallback: http://localhost:3001).
 * It uses websocket transport for real-time messaging.
 */
export const socket = io(SOCKET_URL, { transports: ['websocket'] });

export default socket;
