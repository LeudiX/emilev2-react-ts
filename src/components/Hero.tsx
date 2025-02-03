import React from "react";
//import rotator_cursor from '../assets/rotator_cursor.webp'
//import rotator_end from '../assets/rotator_end.webp'
import tracers_logo from '../assets/images/hero/Tracers Logo.png'
import racine_mask from '../assets/images/hero/racine_mask.webp'

const Hero: React.FC = () => {

    return (
        <section className="flex flex-col items-center justify-center py-10">
            <h4 className="font-allumi font-bold  uppercase mb-8 text-2xl">
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
            <p className="read-the-docs justify-self-center text-sm font-bold p-5">
                Its nomenclature and vision is representative of the work of leading <br />
                artist Émile Lemay Racine, whose multidisciplinary background ranging <br />
                from forward-thinking music production to an expertise in the field of <br />
                industrial design along with a bold,instinctual, and yet result-oriented <br />
                methodology, has laid the foundation  for the brand's continuous<br />
                innovation in creating unique, playful and eco-conscious product
            </p>

            <div className="mt-5">
                <button id='btn-hero' className="mt-4 px-6 py-2 font-kanit text-lg bg-primary text-secondary border border-secondary rounded-lg">
                   See my CV
                </button>
            </div>
        </section>
    );

};
export default Hero;