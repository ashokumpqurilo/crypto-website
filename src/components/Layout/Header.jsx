import React, { useEffect, useState } from "react";
import logo from "../../assets/rel_finance_logo.webp";
import hamburger from "../../assets/hamburger-icon.png";
import ApplyForm from "../ApplyForm";
import { MdOutlineClose } from "react-icons/md";
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

  return (
    <>
      <header className=" fixed top-0 left-0 bg-white  !w-full py-1.5  z-[100] mx-auto items-center">
        <div className="container mx-auto flex items-center justify-between  ">
          <div className="relative z-50  -mb-0">
            <img src={logo} width={100} height={70} alt="brand-logo" />
          </div>
          <ul className="hidden lg:flex items-center gap-6 uppercase text-sm text-black/70">
            <li>
              <a
                href="#about-us"
                className={`${
                  pathname == "about-us" && "text-[#629DD1] border-b"
                }  rounded-[6px] pb-1 hover:border-b border-solid border-[#629DD1] hover:!text-[#629DD1]`}
              >
                About us
              </a>
            </li>
            <li>
              <a
                href="#our-offerings"
                className={`${
                  pathname == "our-offerings" && "text-[#629DD1] border-b"
                }  rounded-[6px] pb-1 hover:border-b border-solid border-[#629DD1] hover:!text-[#629DD1]`}
              >
                Our Offerings
              </a>
            </li>
            <li>
              <a
                href="#debentures"
                className={`${
                  pathname == "debentures" && "text-[#629DD1] border-b"
                }  rounded-[6px] pb-1 hover:border-b border-solid border-[#629DD1] hover:!text-[#629DD1]`}
              >
                Debentures
              </a>
            </li>
            <li>
              <a
                href="#contact-us"
                className={`${
                  pathname == "contact-us" && "text-[#629DD1] border-b"
                }  rounded-[6px] pb-1 hover:border-b border-solid border-[#629DD1] hover:!text-[#629DD1]`}
              >
                Contact Us
              </a>
            </li>
            <li className="zoom-flash text-sm font-bold bg-red-500 px-2.5  py-1.5 text-white rounded-sm">
              <a
                href="/pdf/RFL_PublicNotice.pdf"
                target="_blank"
                download="Public_Notice"
              >
                Public Notice
              </a>
            </li>
            <li className="text-sm font-bold bg-red-500 px-2.5  py-0.5 text-white rounded-sm">
              <button onClick={()=>handleOpen()} className="uppercase text-sm font-bold border-red-500 border border-solid px-2.5  py-1 text-white rounded-sm">
                Apply Now
              </button>
            </li>
          </ul>
          <button onClick={()=>handleOpen()} className="lg:hidden uppercase text-sm font-bold bg-red-500 border border-solid px-2.5  py-1 text-white rounded-sm">
                Apply Now
              </button>
          <button onClick={handleClick} className="lg:hidden">
            <img src={hamburger} alt="hamburger" width={32} height={32} />
          </button>
          {/* <!-- hamburger menu --> */}
          <ul
            className={`transition-all ${
              isOpen ? "translate-x-0" : "-translate-x-full"
            } menu flex lg:hidden flex-col bg-[#333] text-white text-[15px] z-[9999]  fixed top-0 left-0 h-screen w-[70%]  uppercase text-sm text-black/70`}
          >
            <li onClick={handleClick}>
              <a href="#about-us">About us</a>
            </li>
            <li onClick={handleClick}>
              <a href="#our-offerings">Our Offerings</a>
            </li>
            <li onClick={handleClick}>
              <a href="#debentures">Debentures</a>
            </li>
            <li onClick={handleClick}>
              <a href="#contact-us">Contact Us</a>
            </li>
            <li onClick={handleClick}>
              <a
                href="/pdf/RFL_PublicNotice.pdf"
                target="_blank"
                download="Public_Notice"
              >
                Public Notice
              </a>
            </li>
          </ul>
        </div>
      </header>
      {showModal && (
        <div className="fixed top-0 z-[100] bg-[rgba(0,0,0,0.5)] left-0 flex items-center justify-center w-full h-screen">
          <div className="w-[90%] md:w-[50%] shadow-lg px-8 py-8 md:py-16 rounded-sm mx-auto  bg-white relative">
            <ApplyForm />
            <button className="absolute -top-4 -right-4 bg-gray-200 rounded-full p-1 text-2xl" onClick={() => handleClose()}>
              <MdOutlineClose size={20} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
