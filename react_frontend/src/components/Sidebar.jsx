import React from 'react';

const platforms = [
  { id: 'whatsapp', name: 'WhatsApp', color: 'text-green-600' },
  { id: 'telegram', name: 'Telegram', color: 'text-sky-500' },
  { id: 'instagram', name: 'Instagram', color: 'text-pink-500' },
  { id: 'gmail', name: 'Gmail', color: 'text-red-500' },
];

/**
 * PUBLIC_INTERFACE
 * Sidebar
 * Simple vertical sidebar to switch between platforms.
 */
export default function Sidebar({ selected, onSelect }) {
  return (
    <aside className="w-20 bg-gray-900 text-white flex flex-col items-center py-6 space-y-6">
      {platforms.map((p) => (
        <button
          key={p.id}
          onClick={() => onSelect(p.id)}
          className={`p-3 rounded-xl hover:bg-gray-700 ${selected === p.id ? 'bg-gray-700' : ''}`}
          aria-label={p.name}
          title={p.name}
        >
          <span className={`font-bold ${p.color}`}>{p.name[0]}</span>
        </button>
      ))}
    </aside>
  );
}
