import React from "react";
import tracers_logo from '../assets/images/hero/Tracers Logo.png'
import racine_mask from '../assets/images/hero/racine_mask.webp'

const About:React.FC = () =>{
    return (
        <section className="flex flex-col items-center justify-center py-10">
             <h4 className="font-allumi font-bold  uppercase mb-8  text-2xl">
                Apparel brand <br /> centered at the intersection of <br /> art,consciousness & functionality
            </h4>
            <div className='flex items-center justify-center -space-x-40 md:-space-x-64  lg:-space-x-80'>
                <span>
                    <img src={tracers_logo} className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80" alt="Tracers Logo" />
                </span>
                <span>
                    <img src={racine_mask} className="w-full h-48 md:w-full md:h-64 lg:w-full lg:h-80 z-10" alt="Racine Mask" />
                </span>
            </div>
        </section>
    )
}
export default About;