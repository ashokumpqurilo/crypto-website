import { X } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const MobileHeader = ({ isOpen, setIsOpen }) => {
  return (
    <div
      className={`fixed inset-y-0 left-0 w-64 bg-white shadow-lg transform transition-transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } lg:hidden`}
    >
      <div className="p-4 flex flex-col gap-4 bg-white h-screen border-r">
        <button
          className="self-end p-2 rounded-md focus:outline-none"
          onClick={() => setIsOpen(false)}
        >
          <X size={24} />
        </button>
        <Link to="/market-place" onClick={() => setIsOpen(false)}>
          Marketplace
        </Link>
        <Link to="/getting-started" onClick={() => setIsOpen(false)}>
          Getting Started
        </Link>
        <Link to="/api-reference/introduction" onClick={() => setIsOpen(false)}>
          API Reference
        </Link>
        <Link to="/python-sdk/" onClick={() => setIsOpen(false)}>
          Python SDK
        </Link>
        <hr />
        <Link to="/discord" onClick={() => setIsOpen(false)}>
          Discord
        </Link>
        <Link to="/telegram" onClick={() => setIsOpen(false)}>
          Telegram
        </Link>
        <Link to="/x" onClick={() => setIsOpen(false)}>
          X
        </Link>
        <Link to="/register" onClick={() => setIsOpen(false)}>
          Register
        </Link>
        <Link to="/login" onClick={() => setIsOpen(false)}>
          Login
        </Link>
      </div>
    </div>
  );
};

export default MobileHeader;
