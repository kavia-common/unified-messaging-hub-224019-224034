import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import ChatWindow from './components/ChatWindow';
import MessageInput from './components/MessageInput';

/**
 * PUBLIC_INTERFACE
 * App
 * OneConnect layout with sidebar, chat window, and message input.
 */
export default function App() {
  const [selectedPlatform, setSelectedPlatform] = useState('whatsapp');
  const userId = 'user123'; // TODO: integrate with authenticated user

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar selected={selectedPlatform} onSelect={setSelectedPlatform} />
      <div className="flex flex-col flex-1">
        <header className="p-4 border-b bg-white shadow-sm">
          <h1 className="text-xl font-bold text-gray-800">
            OneConnect — {selectedPlatform.charAt(0).toUpperCase() + selectedPlatform.slice(1)}
          </h1>
        </header>
        <div className="flex flex-col flex-1 p-4 gap-4">
          <ChatWindow userId={userId} selectedPlatform={selectedPlatform} />
        </div>
        <MessageInput userId={userId} selectedPlatform={selectedPlatform} />
      </div>
    </div>
  );
}
