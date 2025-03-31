import React from 'react';

const HamburgerIcon = ({ className = '', ...props }) => {
  return (
    <svg
      className={`w-6 h-6 text-gray-200 ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 6h16M4 12h16M4 18h16"
      />
    </svg>
  );
};

export default HamburgerIcon;
