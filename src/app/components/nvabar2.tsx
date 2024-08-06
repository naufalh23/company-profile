// components/Navbar.js
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const NavbarBackup = () => {
  const [isSticky, setSticky] = useState(false);

  const handleScroll = () => {
    setSticky(window.scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed w-full z-10 ${isSticky ? 'bg-white shadow' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-4">
            {/* Logo */}
            <div>
              <Link href="/">
                <span className="flex items-center py-5 px-2 text-gray-700 hover:text-gray-900 cursor-pointer font-bold">
                  Your Logo
                </span>
              </Link>
            </div>
            {/* Primary Nav */}
            <div className="hidden md:flex items-center space-x-1">
              <Link href="/about">
                <span className="py-5 px-3 text-gray-700 hover:text-gray-900 cursor-pointer">
                  About
                </span>
              </Link>
              <Link href="/services">
                <span className="py-5 px-3 text-gray-700 hover:text-gray-900 cursor-pointer">
                  Services
                </span>
              </Link>
              <Link href="/contact">
                <span className="py-5 px-3 text-gray-700 hover:text-gray-900 cursor-pointer">
                  Contact
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarBackup;
