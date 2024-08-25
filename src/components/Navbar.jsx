import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaOpencart } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";
import { useSelector } from 'react-redux';

export default function Navbar({ setOpen }) {
    const [openHamburger, setOpenHamburger] = useState(false);
    const { cart } = useSelector((state) => state.cart)
    return (
        <div className='fixed  2xl:max-w-[1400px] z-[12] top-0 py-6 w-full bg-transparent flex justify-between items-center pl-9 pr-9'>
            <Link to='/' className="">
                <img src="/logo.svg" alt="LOGO" className='h-10 cursor-pointer' />
            </Link>
            <div className="md:inline hidden">
                <ul className='flex md:gap-9 items-center uppercase'>
                    <Link to='/'>
                        <li className='cursor-pointer transition-all hover:text-[#65c4f4]'>Home</li>
                    </Link>
                    <Link to='/product'>
                        <li className='cursor-pointer transition-all hover:text-[#65c4f4]'>Product</li>
                    </Link>
                    <Link to='/gallery'>
                        <li className='cursor-pointer transition-all hover:text-[#65c4f4]'>Gallery</li>
                    </Link>
                    <Link to='/contact'>
                        <li className='cursor-pointer transition-all hover:text-[#65c4f4]'>Contact</li>
                    </Link>
                    <Link to='/login'>
                        <button className="inline-flex text-white bg-[#6EDACB] uppercase border-2 border-[#5EC6B8] py-2 px-6 focus:outline-none text-sm rounded ">Login</button>
                    </Link>
                </ul>
            </div>
            <div className="sm:pr-2 lg:pr-20 ">
                <button onClick={() => setOpen(true)} className='p-5 relative mr-1 app rounded-full'><FaOpencart size={25} />
                    <span className={` ${cart.length === 0 ? 'hidden' : 'block'} w-6 h-6 top-0 right-0 bg-black text-white rounded-full absolute `}>{cart.length}</span></button>
                <button onClick={() => setOpenHamburger((prev) => !prev)} className='p-5 app relative z-[12] rounded-full md:hidden'><RxHamburgerMenu size={25} />
                </button>
            </div>
            <div className={`fixed z-[8] ${openHamburger ? 'rounded-none h-screen w-screen  top-0  right-0' : 'opacity-0 pointer-events-none rounded-full w-0 h-0 top-6 right-11'} bg-black text-white overflow-hidden transition-all ease-in-out duration-700 `}>
                <div className="flex justify-center items-center h-full  w-full transition-all delay-700 duration-200">
                    <ul className={`flex flex-col gap-9 items-center uppercase ${openHamburger && 'transition-all duration-700'}`}>
                        <Link to='/'>
                            <li className='cursor-pointer transition-all hover:text-[#65c4f4]'>Home</li>
                        </Link>
                        <Link to='/product'>
                            <li className='cursor-pointer transition-all hover:text-[#65c4f4]'>Product</li>
                        </Link>
                        <Link to='/gallery'>
                            <li className='cursor-pointer transition-all hover:text-[#65c4f4]'>Gallery</li>
                        </Link>
                        <Link to='/contact'>
                            <li className='cursor-pointer transition-all hover:text-[#65c4f4]'>Contact</li>
                        </Link>
                        <Link to='/login'>
                            <button className="inline-flex text-white bg-[#6EDACB] uppercase border-2 border-[#5EC6B8] py-2 px-6 focus:outline-none text-sm rounded ">Login</button>
                        </Link>
                    </ul>
                </div>
            </div>
        </div>
    )
}
