import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-center py-6">
      <p className="text-gray-700">
        © {new Date().getFullYear()} FreshMilk. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
