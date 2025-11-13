import React, { useEffect, useState } from 'react';
import socket from '../utils/socket';
import { getMessages } from '../utils/api';

/**
 * PUBLIC_INTERFACE
 * ChatWindow
 * Displays messages for the given user and listens for real-time updates.
 */
export default function ChatWindow({ userId, selectedPlatform }) {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    let mounted = true;
    if (userId) {
      getMessages(userId)
        .then((data) => {
          if (mounted) setMessages(data || []);
        })
        .catch(() => setMessages([]));
    }
    const handler = (msg) => {
      setMessages((prev) => [...prev, msg]);
    };
    socket.on('new_message', handler);
    return () => {
      mounted = false;
      socket.off('new_message', handler);
    };
  }, [userId]);

  return (
    <div className="flex flex-col flex-1 bg-gray-100 rounded-lg shadow-inner p-4">
      <div className="overflow-y-auto flex-1 space-y-3">
        {messages.map((m, i) => (
          <div
            key={i}
            className={`max-w-[75%] p-3 rounded-2xl shadow ${
              m.sender === userId ? 'bg-blue-600 text-white self-end ml-auto' : 'bg-white text-gray-800'
            }`}
          >
            <p className="whitespace-pre-wrap break-words">{m.content}</p>
            <div className="mt-1 text-[10px] opacity-70">{m.platform || selectedPlatform}</div>
          </div>
        ))}
        {messages.length === 0 && <div className="text-gray-500 text-sm">No messages yet.</div>}
      </div>
    </div>
  );
}
