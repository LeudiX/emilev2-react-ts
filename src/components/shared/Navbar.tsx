import { useState, useRef, useEffect } from "react";
import { Link } from "react-scroll";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/outline"


interface NavbarProps {
    isDarkMode: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isDarkMode }) => {

    const [isOpen, setIsOpen] = useState(false);
    const menuref = useRef<HTMLDivElement>(null);

    // Toggle menu function
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    //Close the menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuref.current && !menuref.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [isOpen])

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

            {/*Animated Dropdown Menu (Visible on Mobile) */}
            <div ref={menuref}
                className={`absolute top-0 left-0 right-0 transform transition-all duration-500 ease-in-out overflow-hidden
                    ${isOpen ? "opacity-100 translate-y-0 max-h-[300px] visible" : "opacity-0 -translate-y-10 max-h-0 invisible"}
                    ${isDarkMode ? "bg-gray-800" : "bg-white"} shadow-lg md:hidden`}>

                <ul className="flex flex-col items-center space-y-4 py-4">
                    {/* Close Button */}
                    <button
                        onClick={toggleMenu}
                        className={`hover:text-gray-600 focus:outline-none`}>
                        {<XMarkIcon className={`h-7 w-7 ${isDarkMode ? "text-white" : "text-gray-800"}`} />}
                    </button>

                    {/* Internal Links - React Scroll */}
                    <li>
                        <a href="https://apocene.com/racine" target="_blank" rel="noopener noreferrer" className={`${isDarkMode ? "text-white" : "text-gray-800"} font-medium hover:text-gray-600`}>
                            Shop
                        </a>
                    </li>

                    {["Gallery", "Carousel", "About", "Inquiries"].map((section) => (
                        <li key={section}>
                            <Link
                                to={section.toLowerCase()}
                                smooth={true}
                                duration={400}
                                onClick={() => setIsOpen(false)} // Close menu on click
                                className={`${isDarkMode ? "text-white" : "text-gray-800"} font-medium hover:text-gray-600`}
                            >
                                {section}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>


            {/* Centered Navbar (Visible on Desktop) */}
            <ul className="hidden md:flex space-x-8">
                {/* Internal Links - React Scroll */}
                <li>
                    <a href="https://apocene.com/racine" target="_blank" rel="noopener noreferrer" className={`${isDarkMode ? "text-white" : "text-gray-800"} font-bold hover:text-gray-600`}>
                        Shop
                    </a>
                </li>
                {["Gallery", "Carousel", "About", "Inquiries"].map((section) => (
                        <li key={section}>
                            <Link
                                to={section.toLowerCase()}
                                smooth={true}
                                duration={400}
                                className={`${isDarkMode ? "text-white" : "text-gray-800"} cursor-pointer font-bold hover:text-gray-600`}
                            >
                                {section}
                            </Link>
                        </li>
                    ))}
            </ul>
        </nav>
    );
};
export default Navbar;