import React, { useState } from "react";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/outline"

interface NavbarProps {
    isDarkMode: boolean;
  }

const Navbar: React.FC<NavbarProps> = ({isDarkMode}) => {

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
                    className={`${isDarkMode ? "text-white" : "text-gray-800"} hover:text-gray-600 focus:outline-none`}
                >
                    {<Bars3BottomRightIcon className={`h-7 w-7 ${isDarkMode ? "text-white" : "text-gray-900"}`}/>}
                </button>
            </div>

            {/* Dropdown Menu (Visible on Mobile) */}
            {isOpen && (
                <div className={`absolute top-0 left-0 right-0 ${isDarkMode ? "bg-gray-800" : "bg-white"} shadow-lg md:hidden`}>

                    <ul className="flex flex-col items-center space-y-4 py-4">
                        <button
                            onClick={toggleMenu}
                            className={`${isDarkMode ? "text-white" : "text-gray-800"} hover:text-gray-600 focus:outline-none`}>
                            {<XMarkIcon className={`h-7 w-7 ${isDarkMode ? "text-white" : "text-gray-800"}`}/>}
                        </button>
                        <li>
                            <a href="#about" className={`${isDarkMode ? "text-white" : "text-gray-800"} hover:text-gray-600`}>
                                About
                            </a>
                        </li>
                        <li>
                            <a href="#gallery" className={`${isDarkMode ? "text-white" : "text-gray-800"} hover:text-gray-600`}>
                                Gallery
                            </a>
                        </li>
                        <li>
                            <a href="#shop" className={`${isDarkMode ? "text-white" : "text-gray-800"} hover:text-gray-600`}>
                                Shop
                            </a>
                        </li>
                        <li>
                            <a href="#inquiries" className={`${isDarkMode ? "text-white" : "text-gray-800"} hover:text-gray-600`}>
                                Inquiries
                            </a>
                        </li>
                    </ul>
                </div>
            )}

            {/* Centered Navbar (Visible on Desktop) */}
            <ul className="hidden md:flex space-x-8">
                <li>
                    <a href="#about" className={`${isDarkMode ? "text-white" : "text-gray-800"} hover:text-gray-600`}>
                        About
                    </a>
                </li>
                <li>
                    <a href="#gallery" className={`${isDarkMode ? "text-white" : "text-gray-800"} hover:text-gray-600`}>
                        Gallery
                    </a>
                </li>
                <li>
                    <a href="#shop" className={`${isDarkMode ? "text-white" : "text-gray-800"} hover:text-gray-600`}>
                        Shop
                    </a>
                </li>
                <li>
                    <a href="#inquiries" className={`${isDarkMode ? "text-white" : "text-gray-800"} hover:text-gray-600`}>
                        Inquiries
                    </a>
                </li>
            </ul>
        </nav>
    );
};
export default Navbar;