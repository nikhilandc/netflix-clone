import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import type { Profile } from '../types';

const profiles: Profile[] = [
  { id: 1, name: 'User 1', avatar: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&w=100&q=80' },
  { id: 2, name: 'User 2', avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=80' },
];

export function ProfileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentProfile] = useState(profiles[0]);

  return (
    <div className="relative">
      <button
        className="flex items-center space-x-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        <img
          src={currentProfile.avatar}
          alt={currentProfile.name}
          className="w-8 h-8 rounded"
        />
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-48 bg-black border border-gray-700 rounded shadow-lg">
          {profiles.map(profile => (
            <button
              key={profile.id}
              className="flex items-center space-x-3 w-full px-4 py-3 hover:bg-gray-800"
            >
              <img
                src={profile.avatar}
                alt={profile.name}
                className="w-8 h-8 rounded"
              />
              <span>{profile.name}</span>
            </button>
          ))}
          <div className="border-t border-gray-700">
            <button className="w-full text-left px-4 py-3 hover:bg-gray-800">
              Manage Profiles
            </button>
            <button className="w-full text-left px-4 py-3 hover:bg-gray-800">
              Account
            </button>
            <button className="w-full text-left px-4 py-3 hover:bg-gray-800">
              Help Center
            </button>
            <button className="w-full text-left px-4 py-3 hover:bg-gray-800">
              Sign out of Netflix
            </button>
          </div>
        </div>
      )}
    </div>
  );
}