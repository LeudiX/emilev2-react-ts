import React from "react";
import Logo from "./shared/Logo";
import Navbar from "./shared/Navbar";
import ThemeToggle from "./shared/ThemeToggle";


const HeroContainer: React.FC = () => {

    return (
        <div className="flex items-center justify-between p-4 bg-white dark:bg-gray-900 hover:shadow-md shadow-white">
            {/* Logo */}
            <div className="ml-4">
                <Logo />
            </div>
            {/* Navbar */}
            <Navbar />
            {/* Theme Toggle */}
            <div className="mr-4">
                <ThemeToggle />
            </div>
        </div>

    );
};
export default HeroContainer;