"use client";

import Image from 'next/image';
import React from 'react';

const HeaderSection = () => {
  return (
    <header className="flex flex-col items-center justify-center text-center py-12 bg-gray-100">
      {/* Logo and Nav Row */}
      <div className="flex items-center justify-between w-full max-w-4xl px-4 mb-6">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Image src="/red.png" alt="Logo" width={40} height={40} />
        </div>

        {/* Navigation */}
        <nav className="space-x-6">
          <span>Home </span>
          <span>Contact</span>
          <span>About</span>
          
        </nav>
      </div>

      {/* Hero Text */}
      <h4>
        AUTO REPAIRS AUTO SALES AUTO DETAILING  TIRE SERVICE BODY SHOP MUFFLERS AND REPLACEMENT
      </h4>
    </header>
  );
};

export default HeaderSection;
