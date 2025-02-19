import React from 'react'
import { FaDiscord, FaGithub, FaTelegram, FaX } from 'react-icons/fa6'
import { RiLink } from 'react-icons/ri'

const Footer = () => {
  const navLinks=[
    {
      title:"Home",
      link:"/"
    },
    {
        title:"Showcase",
        link:"/"
      },
      {
        title:"Features",
        link:"/"
      },
      {
        title:"Doumentation",
        link:"/"
      },
      {
        title:"Bounties",
        link:"/"
      },
      {
        title:"Pricing",
        link:"/"
      },
      {
        title:"Contact",
        link:"/"
      },
    
  ]
  const socialLinks=[
    {
      title:"X.com",
      link:"/",
      icon:<FaX size={28} />
    },
    {
        title:"Discord",
        link:"/",
        icon:<FaDiscord size={28}/>
      },
      {
        title:"Github",
        link:"/",
        icon:<FaGithub size={28} />
      },    
    {
      title:"Telegram",
      link:"/",
      icon:<FaTelegram size={28} />
    }
  ]
  return (
    <footer className="text-white  py-4 lg:py-12 ">
        <div className='w-[90%] lg:max-w-[70%] space-y-8  mx-auto flex flex-col lg:flex-row'>
        {/* Nav Links */}
        <div className='w-full lg:w-1/4'>
            <h2 className='text-2xl  mb-4 font-semibold'>Navigation</h2>
            <ul className='flex flex-col gap-4 text-white'>
                {navLinks.map(ele=>
                    <li className='text-lg font-light hover:underline'><a href={ele.link}>{ele.title}</a></li>
                )}
            </ul>
        </div>
        {/* Social Links */}
        <div className='w-full lg:w-1/4 '>
            <ul className='flex flex-col gap-4 lg:gap-12 text-white'>
                {socialLinks.map(ele=>
                    <li className='text-lg lg:text-xl lg:text-3xl text-[#B6C6D9] flex gap-3'><RiLink /><a href={ele.link}>{ele.title}</a></li>
                )}
            </ul>
        </div>
        {/* NewsLetter */}
        <div className='flex-1 flex flex-col '>
            <h2 className='mb-4 lg:mb-8 font-bold text-2xl lg:text-3xl' >Let's Connect</h2>
            <div className="relative w-full p-1.5 ">
                <input className='text-black focus:outline-none w-full bg-white text-lg lg:text-xl px-4 py-2.5 rounded-lg' type="text" placeholder='Enter your email' />
                <button className='absolute bottom-2 text-lg  right-2 bg-purple-500 text-white rounded-lg px-6 py-2 font-medium'>Submit</button>
            </div>
            <div className='flex gap-6  mt-4 '>
                {socialLinks.map(ele=>
                    <div className='p-2.5 bg-[#FFFFFF1F] text-white rounded-lg'>
                        {ele.icon}
                    </div>
                )}
            </div>
        </div>
        </div>
    </footer>
  )
}

export default Footer