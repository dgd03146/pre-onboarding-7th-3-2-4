'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { MenuBar } from '../../utils/constants';

const Sidebar = () => {
  const router = useRouter();

  return (
    <div className="relative bg-gray-800 w-1/6">
      <div className="flex flex-col sm:flex-row sm:justify-around">
        <div className="w-72 h-screen">
          <div className="flex items-center justify-start mx-6 mt-10">
            <span className="text-gray-600 dark:text-gray-300 ml-4 text-2xl font-bold">
              PREFACE
            </span>
          </div>
          <ul className="mt-10 px-3 ">
            {MenuBar.map((it) => (
              <li
                key={it.name}
                onClick={() => router.push(`/${it.path}`)}
                className="hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-6 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200  text-gray-600 dark:text-gray-400 rounded-lg cursor-pointer"
              >
                <span className="mx-4 text-lg font-normal">{it.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
    // <div className="bg-black w-1/6">
    //   <ul>
    //     {MenuBar.map((it) => (
    //       <li
    //         className="p-4 cursor-pointer hover:bg-white active:bg-white"
    //         key={it.name}
    //         onClick={() => router.push(`/${it.path}`)}
    //       >
    //         {it.name}
    //       </li>
    //     ))}
    //   </ul>
    // </div>
  );
};

export default Sidebar;
