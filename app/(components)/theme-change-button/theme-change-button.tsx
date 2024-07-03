'use client';

import { useState } from 'react';

const SegmentedControl = () => {
  const [selected, setSelected] = useState('Light');

  const handleClick = (option: string) => {
    setSelected(option);
    // 
  };

  return (
    <div className="inline-flex border rounded-lg overflow-hidden">
      <button
        onClick={() => handleClick('Light')}
        className={`px-4 py-2 ${selected === 'Light' ? 'bg-white text-black' : 'bg-gray-200 text-gray-700'}`}
      >
        Light
      </button>
      <button
        onClick={() => handleClick('Dark')}
        className={`px-4 py-2 ${selected === 'Dark' ? 'bg-black text-white' : 'bg-gray-200 text-gray-700'}`}
      >
        Dark
      </button>
    </div>
  );
};

export default SegmentedControl;
