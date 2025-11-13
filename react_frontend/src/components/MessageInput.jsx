import React, { useState } from 'react';
import socket from '../utils/socket';
import { sendMessage } from '../utils/api';

/**
 * PUBLIC_INTERFACE
 * MessageInput
 * Input control for composing and sending a message for the selected platform.
 */
export default function MessageInput({ userId, selectedPlatform }) {
  const [text, setText] = useState('');
  const sending = text.trim().length === 0;

  const handleSend = async () => {
    if (sending) return;
    const msgData = {
      sender: userId,
      platform: selectedPlatform,
      content: text,
      timestamp: new Date().toISOString(),
    };
    try {
      await sendMessage(msgData);
    } catch (_) {
      // Allow optimistic websocket emit even if REST API is not ready yet
    }
    socket.emit('send_message', msgData);
    setText('');
  };

  return (
    <div className="flex p-3 bg-white border-t border-gray-200 gap-2">
      <input
        className="flex-1 border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
        placeholder="Type your message..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') handleSend();
        }}
      />
      <button
        onClick={handleSend}
        disabled={sending}
        className={`px-4 py-2 rounded-lg text-white ${sending ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700'}`}
      >
        Send
      </button>
    </div>
  );
}
