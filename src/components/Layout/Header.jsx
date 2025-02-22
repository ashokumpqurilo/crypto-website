import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import MobileHeader from "./MobileHeader";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky bg-white z-20 top-0 z-50 w-full border-b bg-white backdrop-blur px-4">
      <div className="container flex h-14 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link to="/" className="font-bold text-2xl">
            SwarmNode
          </Link>
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <Link to="/market-place">Marketplace</Link>
          <Link to="/getting-started">Getting Started</Link>
          <Link to="/api-reference/introduction">API Reference</Link>
          <Link to="/python-sdk/">Python SDK</Link>
          <Link to="/discord">Discord</Link>
          <Link to="/telegram">Telegram</Link>
          <Link to="/x">X</Link>
          <Link to="/register">Register</Link>
          <Link to="/login">Login</Link>
        </div>

        <button
          className="lg:hidden p-2 rounded-md focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Sidebar */}
      <MobileHeader isOpen={isOpen} setIsOpen={setIsOpen} />
    </header>
  );
};

export default Header;