import React from "react";
import rotator_cursor from '../assets/rotator_cursor.webp'
import rotator_end from '../assets/rotator_end.webp'

const HeroSection: React.FC = () => {

    return (
        <div className="flex flex-col items-center justify-center py-10">
            <div className='columns-2 gap-16 place-self-center'>
                <span>
                    <img src={rotator_cursor} className="logo react" alt="Phsydelic rotator" />
                </span>
                <span>
                    <img src={rotator_end} className="logo react" alt="Zen Rotator" />
                </span>
            </div>
            <h1 className="font-allumi font-bold text-4xl">Emile Portfolio v2</h1>
            <button id='btn-hero' className="mt-4 px-6 py-2 font-kanit text-lg bg-primary text-secondary border border-secondary rounded-lg">
                Click Me
            </button>
            <div className="mt-5">
                <p className="read-the-docs place-self-center font-bold underline">
                    More content about Emile life will be added soon!!!
                </p>
            </div>
        </div>
    );

};
export default HeroSection;