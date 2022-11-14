'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { MenuBar } from '../utils/constants';

const Sidebar = () => {
  const router = useRouter();

  return (
    <div className="bg-black w-1/6">
      <ul>
        {MenuBar.map((it) => (
          <li
            className="p-4 cursor-pointer hover:bg-white active:bg-white"
            key={it.name}
            onClick={() => router.push(`/${it.path}`)}
          >
            {it.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
