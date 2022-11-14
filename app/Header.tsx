import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <div className="p-5">
      <p className="font-bold text-white">I am Header</p>
      <Link href="/" className="bg-white text-blue-500">
        Home
      </Link>
    </div>
  );
};

export default Header;
