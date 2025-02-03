import React from "react";
import { iImgLogoProps } from "./ImgLogo.d";

export const ImgLogo: React.FC<iImgLogoProps> = ({
    imgID,
    imgSrcLight,
    imgSrcDark,
    imgAlt,
    className,
    theme = "light", // Default to light mode
}) => {
    // Determine the image source based on the theme
    const imgSrc = theme === "dark" ? imgSrcDark : imgSrcLight;
    return (
        <a
            href="#hero"
            className="flex items-center transition-transform duration-300 hover:scale-y-125"
        >
            <img
                key={imgID}
                src={imgSrc}
                alt={imgAlt}
                className={`${className || ''}`} //Optional className prop
            />
        </a>
    )
}

