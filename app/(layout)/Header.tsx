import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <div className="p-5">
      <Link href="/" className="bg-white text-blue-500">
        Header
      </Link>
    </div>
  );
};

export default Header;
