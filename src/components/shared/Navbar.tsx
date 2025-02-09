import React, { useState } from "react";
import { Link } from "react-scroll";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/outline"


interface NavbarProps {
    isDarkMode: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isDarkMode }) => {

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
                    className={`${isDarkMode ? "text-white" : "text-gray-800"} ml-16 hover:text-gray-500 focus:outline-none`}
                >
                    {<Bars3BottomRightIcon className={`h-7 w-7`} />}
                </button>
            </div>

            {/* Dropdown Menu (Visible on Mobile) */}
            {isOpen && (
                <div className={`absolute top-0 left-0 right-0 ${isDarkMode ? "bg-gray-800" : "bg-white"} shadow-lg md:hidden`}>

                    <ul className="flex flex-col items-center space-y-4 py-4">
                        <button
                            onClick={toggleMenu}
                            className={`${isDarkMode ? "text-white" : "text-gray-800"} hover:text-gray-600 focus:outline-none`}>
                            {<XMarkIcon className={`h-7 w-7 ${isDarkMode ? "text-white" : "text-gray-800"}`} />}
                        </button>
                        {/* Internal Links - React Scroll */}
                        <li>
                            <a href="https://apocene.com/racine" target="_blank" rel="noopener noreferrer" className={`${isDarkMode ? "text-white" : "text-gray-800"} font-medium hover:text-gray-600`}>
                                Shop
                            </a>
                        </li>
                        <li>
                            <Link to="gallery" smooth={true} duration={500} className={`${isDarkMode ? "text-white" : "text-gray-800"} font-medium hover:text-gray-600`}>
                                Gallery
                            </Link>
                        </li>
                        <li>
                            <Link to="carousel" smooth={true} duration={500} className={`${isDarkMode ? "text-white" : "text-gray-800"} font-medium hover:text-gray-600`}>
                                Carousel
                            </Link>
                        </li>
                        <li>
                            <Link to="about" smooth={true} duration={500} className={`${isDarkMode ? "text-white" : "text-gray-800"} font-medium hover:text-gray-600`}>
                                About
                            </Link>
                        </li>
                        <li>
                            <Link to="inquiries" smooth={true} duration={500} className={`${isDarkMode ? "text-white" : "text-gray-800"} font-medium hover:text-gray-600`}>
                                Inquiries
                            </Link>
                        </li>
                    </ul>
                </div>
            )}

            {/* Centered Navbar (Visible on Desktop) */}
            <ul className="hidden md:flex space-x-8">
                {/* Internal Links - React Scroll */}
                <li>
                    <a href="https://apocene.com/racine" target="_blank" rel="noopener noreferrer" className={`${isDarkMode ? "text-white" : "text-gray-800"} font-bold hover:text-gray-600`}>
                        Shop
                    </a>
                </li>
                <li>
                    <Link to="gallery" smooth={true} duration={500} className={`${isDarkMode ? "text-white" : "text-gray-800"} cursor-pointer font-bold hover:text-gray-600`}>
                        Gallery
                    </Link>
                </li>
                <li>
                    <Link to="carousel" smooth={true} duration={500} className={`${isDarkMode ? "text-white" : "text-gray-800"} cursor-pointer font-bold hover:text-gray-600`}>
                        Carousel
                    </Link>
                </li>
                <li>
                    <Link to="about" smooth={true} duration={500} className={`${isDarkMode ? "text-white" : "text-gray-800"} cursor-pointer font-bold hover:text-gray-600`}>
                        About
                    </Link>
                </li>
                <li>
                    <Link to="inquiries" smooth={true} duration={500} className={`${isDarkMode ? "text-white" : "text-gray-800"} cursor-pointer font-bold hover:text-gray-600`}>
                        Inquiries
                    </Link>
                </li>
            </ul>
        </nav>
    );
};
export default Navbar;