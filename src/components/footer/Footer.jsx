import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebookF, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
    return (
        <>
            <footer className="">
                <div className="container px-5 py-5 flex items-center justify-center sm:flex-row flex-col">
                    <Link to='/' className="mr-5">
                        <img src="/logo.svg" alt="LOGO" className='h-10 cursor-pointer' />
                    </Link>
                    <a className='mx-4' target='_blank' href='https://www.facebook.com/profile.php?id=61550563621219'><FaFacebookF size={19} /></a>
                    <a className='mx-4' target='_blank' href='https://github.com/bulbul32123'><FaGithub size={19} /></a>
                    <a className='mx-4' target='_blank' href='https://www.linkedin.com/in/webdevwithbulbul/'><FaLinkedin size={19} /></a>
                </div>
            </footer>
        </>
    )
}
