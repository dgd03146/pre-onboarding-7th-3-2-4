import React from 'react';

const Header = () => {
  return (
    <header className="w-full shadow-lg bg-gray-700  items-center h-16  z-40">
      <div className="relative z-20 flex flex-col justify-center h-full px-3 mx-auto flex-center">
        <div className="relative items-center pl-1 flex w-full lg:max-w-68 sm:pr-2 sm:ml-0">
          <div className="relative p-1 flex items-center justify-start w-1/4 ml-5 mr-4 sm:mr-0 sm:right-auto">
            <a href="#" className="block relative">
              Header
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
