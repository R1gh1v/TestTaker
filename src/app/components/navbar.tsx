import React from 'react';
import Link from 'next/link';
const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="text-white text-lg font-bold">TestTaker</Link>
        <div className="hidden md:flex space-x-4">
          <Link href="/" className="text-white hover:text-blue-200">Home</Link>
          <Link href="/about" className="text-white hover:text-blue-200">About</Link>
          <Link href="/contact" className="text-white hover:text-blue-200">Contact</Link>
        </div>
        <div className="md:hidden">
          <button className="text-white focus:outline-none">
            {/* Add your mobile menu icon here */}
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
