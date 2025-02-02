import React, { useState } from "react";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/outline"

const Navbar: React.FC = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="flex items-center justify-center">
            {/* Hamburger Menu (Visible on Mobile) */}
            <div className="md:hidden">
                <button
                    onClick={toggleMenu}
                    className="text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 focus:outline-none font-medium"
                >
                    {<Bars3BottomRightIcon className="h-6 w-6 text-gray-900 dark:text-gray-100" />}
                </button>
            </div>

            {/* Dropdown Menu (Visible on Mobile) */}
            {isOpen && (
                <div className="absolute top-0 left-0 right-0 bg-white dark:bg-gray-800 shadow-lg md:hidden">

                    <ul className="flex flex-col items-center space-y-4 py-4">
                        <button
                            onClick={toggleMenu}
                            className="text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 focus:outline-none font-medium">
                            {<XMarkIcon className="h-6 w-6 text-gray-900 dark:text-gray-100" />}
                        </button>
                        <li>
                            <a href="#about" className="text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 font-medium">
                                About
                            </a>
                        </li>
                        <li>
                            <a href="#gallery" className="text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 font-medium">
                                Gallery
                            </a>
                        </li>
                        <li>
                            <a href="#shop" className="text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 font-medium">
                                Shop
                            </a>
                        </li>
                        <li>
                            <a href="#inquiries" className="text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 font-medium">
                                Inquiries
                            </a>
                        </li>
                    </ul>
                </div>
            )}

            {/* Centered Navbar (Visible on Desktop) */}
            <ul className="hidden md:flex space-x-8">
                <li>
                    <a href="#about" className="text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 font-medium">
                        About
                    </a>
                </li>
                <li>
                    <a href="#gallery" className="text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 font-medium">
                        Gallery
                    </a>
                </li>
                <li>
                    <a href="#shop" className="text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 font-medium">
                        Shop
                    </a>
                </li>
                <li>
                    <a href="#inquiries" className="text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 font-medium">
                        Inquiries
                    </a>
                </li>
            </ul>
        </nav>
    );
};
export default Navbar;