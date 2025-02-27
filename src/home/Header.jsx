import React, { useEffect, useState } from "react";
import { MdOutlineClose, MdMenu } from "react-icons/md";
import { SlLogin } from "react-icons/sl";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Features", href: "#features" },
    { name: "Documentation", href: "#documentation" },
    { name: "Bounties", href: "#bounties" },
    { name: "Pricing", href: "#pricing" },
    { name: "Contact", href: "#contact" }
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const link = () => {
    navigate("/login");
  };

  return (
    <>
      {/* Desktop Header */}
      <header className="hidden lg:flex fixed top-0 w-full z-50 bg-[#FFFFFF1D] justify-center text-[17px] items-center pt-6 pb-4 px-8">
        <ul className="flex space-x-8">
          {navLinks.map((link, index) => (
            <li key={index} className="text-white font-medium hover:underline">
              <a href={link.href}>{link.name}</a>
            </li>
          ))}
        </ul>
        <button
          className="ml-16 rounded-lg border border-gray-600 bg-[#201E2C] text-white font-semibold px-8 py-2 flex gap-3 items-center"
          onClick={link}
        >
          Login <SlLogin size={20} />
        </button>
      </header>

      {/* Mobile Header */}
      <header className="lg:hidden fixed top-0 w-full z-50 bg-[#FFFFFF1D] flex justify-between items-center p-4">
        <div className="text-white text-lg font-bold">LOGO</div>
        <button onClick={toggleMenu} className="text-white text-2xl">
          <MdMenu />
        </button>
      </header>

      {/* Mobile Sidebar */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex">
          {/* Sidebar */}
          <div className="w-[70%] bg-[#201E2C] h-full flex flex-col p-6">
            <button onClick={toggleMenu} className="self-end text-white text-2xl mb-4">
              <MdOutlineClose />
            </button>
            <ul className="flex flex-col space-y-6">
              {navLinks.map((link, index) => (
                <li key={index} className="text-white text-lg font-medium">
                  <a href={link.href} onClick={toggleMenu}>{link.name}</a>
                </li>
              ))}
            </ul>
            <button
              className="mt-6 rounded-lg border border-gray-600 bg-white text-black font-semibold px-8 py-2 flex gap-3 items-center"
              onClick={link}
            >
              Login <SlLogin size={20} />
            </button>
          </div>
          {/* Dark overlay */}
          <div className="w-[30%] bg-black opacity-50 h-full" onClick={toggleMenu}></div>
        </div>
      )}
    </>
  );
};

export default Header;
