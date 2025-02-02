import React from "react";

const Logo: React.FC = () => {
    return (
        <a
        href="#hero"
        className="flex items-center transition-transform duration-300 hover:scale-y-125"
      >
        <img
          src="/src/assets/images/logo/Racine_Halftonewhite.png" // Replace with your logo path
          alt="Racine Logo"
          className="h-16 w-16" // Adjust size as needed
        />
      </a>
    );
};
 export default Logo;