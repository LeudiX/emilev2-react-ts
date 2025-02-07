import React from "react";

import parallax_leafs from '/media/about/parallax_leafs_cloud.png';
import parallax_arm_blue from '/media/about/parallax_arm_blue.png';
import parallax_park from '/media/about/parallax_park_cloud.png';
import xavier_cloud from '/media/about/xavier_cloud.png';
import arm from '/media/about/arm.png';
import black_person_cut from '/media/about/black_person_cut.png';

const About: React.FC = () => {

    /*
    const parallax_items = [
        { src: parallax_leafs, alt: "Parallax Leafs" },
        { src: parallax_arm_blue, alt: "Parallax Arm" },
        { src: parallax_park, alt: "Parallax Park" },
    ]*/

    return (
        <section className="items-center py-5">
            <h4 className="font-allumi font-bold  uppercase mb-2 text-left text-2xl max-w-2xl w-full">
                About
            </h4>
            {/*Grid Layout*/}
            <div className="grid grid-cols-1 md:grid-cols-12 ">
                <div className="col-span-1 hidden md:block">
                    {/* This column is intentionally left empty */}
                </div>
                <div className="col-span-10 -space-y-5">
                    {/* First Container */}
                    <div className="relative w-full h-96 bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: `url(${parallax_leafs})` }}>
                        <img src={xavier_cloud} alt="Xavier" className="absolute inset-0 mx-auto w-48 md:w-64 lg:w-72 object-cover" />
                        <div className="absolute md:right-10 bg-gray-800 opacity-80 text-white p-2 md:p-4 rounded-md shadow-lg w-64">
                            <p className="text-xs md:text-xs font-medium">This is the first text block, positioned to the right of the first image.</p>
                        </div>
                    </div>

                    {/*Second Container*/}
                    <div className="relative w-full h-96 bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: `url(${parallax_arm_blue})` }}>
                        <img src={arm} alt="Arm" className="absolute right-0 w-96 md:w-96 lg:w-96 object-cover" />
                        <div className="absolute  md:left-20 bg-gray-800 opacity-80 text-white p-2 md:p-4 rounded-md shadow-lg w-64">
                            <p className="text-xs md:text-xs font-medium">This is the second text block, positioned to the left of the arm image.</p>
                        </div>
                    </div>

                    {/* Third Container */}
                    <div className="relative w-full h-96 bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: `url(${parallax_park})` }}>
                        <img src={black_person_cut} alt="Black Person" className="absolute inset-0 mx-auto w-56 md:w-56 lg:w-56 object-cover" />
                        <div className="absolute  md:right-25 bg-gray-800 opacity-80 text-white p-2 md:p-4 rounded-md shadow-lg w-64">
                            <p className="text-xs md:text-xs font-medium">This is the third text block, positioned to the right of the third image.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default About;