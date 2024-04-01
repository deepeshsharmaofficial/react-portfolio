import React, { useState } from 'react';
import {navLinks} from "../constants";
import { dsLogo } from '../assets/images';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleClick = () => {
        setIsOpen(false);
    }


    return (
        <nav className="backdrop-blur-xl bg-opacity-40 bg-white fixed w-full z-20 top-0 start-0">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src={dsLogo} className="h-8" alt="Logo" />
                </a>

                <button
                    onClick={toggleMenu}
                    data-collapse-toggle="navbar-sticky"
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                    aria-controls="navbar-sticky"
                    aria-expanded={isOpen ? 'true' : 'false'}
                >
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>

                <div className={`items-center justify-between w-full lg:flex lg:w-auto lg:order-1 ${isOpen ? '' : 'hidden'}`} id="navbar-sticky">
                    <ul className="flex flex-col p-4 lg:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 lg:space-x-8 rtl:space-x-reverse lg:flex-row lg:mt-0 lg:border-0 lg:bg-transparent">
                        {navLinks.map((nav) => (
                            <li key={nav.id}>
                                <a href={nav.href} onClick={handleClick} className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-blue-700 lg:p-0">{nav.label}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
