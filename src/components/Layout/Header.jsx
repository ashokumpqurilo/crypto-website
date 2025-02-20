import React from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  
  return (
    <header className="sticky w-screen  top-0 z-50 w-full border-b bg-white backdrop-blur px-4" >
      <div className="container flex h-14 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link to="/" className="font-bold text-2xl">
            SwarmNode
          </Link>

          <nav className="flex items-center gap-4">
            <Link to="/marketplace">Marketplace</Link>
            <Link to="/getting-started">Getting Started</Link>
            <Link to="/api-reference">API Reference</Link>
            <Link to="/python-sdk/">Python SDK</Link>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <Link to="/discord">Discord</Link>
          <Link to="/telegram">Telegram</Link>
          <Link to="/x">X</Link>
          <Link to="/register">Register</Link>
          <Link to="/login">Login</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
