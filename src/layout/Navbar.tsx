
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';

function Navbar(): JSX.Element {
    const [isOpen, setIsOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(localStorage.getItem("theme") === "dark");

    //Aplying theme on mount
    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
            console.info('Dark mode activated')
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
            console.info('Light mode activated')
        }
    }, [darkMode]);

    return (
        <div className='relative flex gap-4'>
            
            <div className='flex flex-1 justify-center md:justify-center'>
                <nav className="bg-gray-800 rounded-full h-full">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center justify-between h-8">
                            <div className="flex items-center">
                                {/*Navbar Links*/}
                                <div className="hidden md:block">
                                    <div className="flex items-baseline space-x-4">
                                        <Link
                                            to="/about"
                                            className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                        >
                                            About
                                        </Link>
                                        <Link
                                            to="/gallery"
                                            className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                        >
                                            Gallery
                                        </Link>
                                        <Link
                                            to="/shop"
                                            className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                        >
                                            Shop
                                        </Link>
                                        <Link
                                            to="/inquiries"
                                            className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                        >
                                            Inquiries
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="-mr-2 flex md:hidden">
                                <button
                                    onClick={() => setIsOpen(!isOpen)}
                                    type="button"
                                    className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                                    aria-controls="mobile-menu"
                                    aria-expanded={isOpen}
                                >
                                    <span className="sr-only">Open main menu</span>
                                    {isOpen ? (
                                        <svg
                                            className="block h-6 w-6"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M6 18L18 6M6 6l12 12"
                                            />
                                        </svg>
                                    ) : (
                                        <svg
                                            className="block h-6 w-6"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M4 6h16M4 12h16m-7 6h7"
                                            />
                                        </svg>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>

                    {isOpen && (
                        <div className="md:hidden" id="mobile-menu">
                            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                                <Link
                                    to="/about"
                                    className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    About
                                </Link>
                                <Link
                                    to="/gallery"
                                    className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    Gallery
                                </Link>
                                <Link
                                    to="/shop"
                                    className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    Shop
                                </Link>
                                <Link
                                    to="/inquiries"
                                    className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    Inquiries
                                </Link>
                            </div>
                        </div>
                    )}
                </nav>
            </div>
            <div className='relative md:flex-1'>
                {/* Light-Dark Mode Toggle */}
                <button
                    onClick={() => setDarkMode(!darkMode)}
                    className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
                >
                    {darkMode ? (
                        <SunIcon className="h-6 w-6 text-yellow-400" />
                    ) : (
                        <MoonIcon className="h-6 w-6 text-gray-900 dark:text-gray-100" />
                    )}
                </button>
            </div>
        </div>

    );
}

export default Navbar