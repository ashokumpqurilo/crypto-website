import React, { useEffect, useState } from "react";
import { MdOutlineClose } from "react-icons/md";
import { SlLogin } from "react-icons/sl";
import Login from "./Login";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [pathname, setPathname] = useState("");
  const handleClose=()=>{
    setShowModal(false)
  }
  const handleOpen=()=>{
    setShowModal(true);
  }
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  console.log(window.location);
  useEffect(() => {
    const handleHashChange = () => {
      const pathname = window.location.hash.substring(1);
      setPathname(pathname);
      console.log(pathname);
    };
    window.addEventListener("hashchange", handleHashChange);
    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);
  const navLinks=[
    {
      name:"Home",
      href:"#home"
    },
    {
      name:"Features",
      href:"#features"
    },
    {
      name:"Documentation",
      href:"#documentation"
    },
    {
      name:"Bounties",
      href:"#bounties"
    },
    {
      name:"Pricing",
      href:"#pricing"
    },
    {
      name:"Contact",
      href:"#contact"
    }
  ]
  const navigate = useNavigate();
  const link = () => {
    navigate('/login');
  };
  return (
    <>
      <header className="hidden lg:flex fixed top-0 w-full z-50  bg-[#FFFFFF1D] justify-center text-[17px]  items-center pt-6 pb-4 px-8 ">
        <ul className="flex space-x-8">
          {navLinks.map((link, index) => (
          <li className="text-white  font-medium hover:underline"><a href={link.href}>{link.name}</a></li>
        ))}
        </ul>
        <button className="ml-16 rounded-lg border border-gray-600 bg-[#201E2C] text-white font-semibold px-8 py-2 flex gap-3 items-center " onClick={link}>Login <SlLogin size={20} /></button>
      </header>
    </>
  );
};
export default Header;