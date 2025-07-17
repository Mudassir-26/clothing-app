//client/src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-center py-4 mt-10 border-t text-sm text-gray-500">
      &copy; {new Date().getFullYear()} ClothesPrint. All rights reserved.
    </footer>
  );
};

export default Footer;
