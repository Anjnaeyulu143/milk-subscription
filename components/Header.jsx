import React from "react";

const Header = () => {
  return (
    <header className="flex justify-between items-center py-4 px-8 bg-white shadow-md sticky top-0 z-50">
      <h1 className="text-2xl font-bold text-green-600">FreshMilk</h1>
      <nav>
        <ul className="flex gap-6">
          <li>
            <a href="#plans" className="text-gray-600 hover:text-green-600">
              Plans
            </a>
          </li>
          <li>
            <a href="#contact" className="text-gray-600 hover:text-green-600">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
