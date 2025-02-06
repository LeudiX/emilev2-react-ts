import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Gallery: React.FC = () => {

    //Projects Dataset
    const projects = [
        {
            title: "Paper Mag",
            subtitle: "Interview",
            artists: ["Gollum", "Doriam", "Lil NasX", "Mattox", "Teezo", "Others"],
            media: [
                { type: "image", url: "/media/paper_mag/1.jpg" },
                { type: "image", url: "/media/paper_mag/2.jpg" },
                { type: "image", url: "/media/paper_mag/3.jpg" },
                { type: "image", url: "/media/paper_mag/4.jpg" },
                { type: "image", url: "/media/paper_mag/5.jpg" },
            ],
        },
        {
            title: "Dorian Electra",
            subtitle: "My Agenda",
            artists: ["Dorian"],
            media: [
                { type: "image", url: "/media/dorian_electra/1.jpeg" },
                { type: "video", url: "/media/dorian_electra/dorian_electra_my_agenda_2021.mp4" },
                { type: "image", url: "/media/dorian_electra/2.jpg" },
                { type: "image", url: "/media/dorian_electra/3.jpg" },
            ],
        },
        {
            title: "Lil NasX",
            subtitle: "Custom Design",
            artists: ["Lil NasX"],
            media: [
                { type: "image", url: "/media/lil_nasx/4.jpg" },
                { type: "video", url: "/media/lil_nasx/lil_nasx_vitaminwater_2022.mp4" },
                { type: "image", url: "/media/lil_nasx/5.jpg" },
                { type: "image", url: "/media/lil_nasx/6.jpg" },
                { type: "image", url: "/media/lil_nasx/7.jpg" },
                { type: "image", url: "/media/lil_nasx/8.jpg" },
            ],
        }
    ]

    // State to track the active artist's media (Default with first)
    const [activeMedia, setActiveMedia] = useState(projects[0].media);
    const [activeProjectTitle, setActiveProjectTitle] = useState(projects[0].title)
    const [activeProjectSubtitle, setActiveProjectSubtitle] = useState(projects[0].subtitle)

    // Function to handle artist button clicks
    const handleArtistMedia = (title: string, subtitle: string, media: { type: string; url: string }[]) => {
        setActiveMedia(media);
        setActiveProjectTitle(title);
        setActiveProjectSubtitle(subtitle);
    };

    return (
        <section className="min-h-screen">
            <h4 className="font-allumi font-bold  uppercase mb-2 text-left text-2xl max-w-2xl w-full">
                {activeProjectTitle} {/*Proyect title*/}
            </h4>
            {/*Grid Layout*/}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-x-10">

                <div className="col-span-3">
                    <h6 className="text-left text-lg font-bold mb-4">
                        {activeProjectSubtitle} {/*Proyect subtitle*/}
                    </h6>
                    <div className="grid grid-cols-3 gap-2 ">
                        {projects.map((project, index) => (
                            <button
                                key={index}
                                onClick={() => handleArtistMedia(project.title, project.subtitle, project.media)}
                                className="rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white px-2  py-2 text-sm hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                            >
                                {project.artists[0]} {/*Proyect 1st artist's name*/}
                            </button>
                        ))}
                    </div>
                </div>
                {/* 2nd Column: Swiper Carousel */}
                <div className="col-span-6 py-5">
                    <Swiper
                        modules={[Autoplay, Navigation, Pagination]}
                        spaceBetween={30}
                        slidesPerView={1}
                        navigation
                        pagination={{ clickable: true }}
                        autoplay={{
                            delay: (activeMedia[0]?.type === "video" ? 10000 : 5000), disableOnInteraction: false
                        }} // 10s for videos, 5s for images
                        loop
                        className="w-full h-full"
                    >
                        {activeMedia.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div className="flex items-center justify-center h-full">
                                    {item.type === "image" ? (
                                        <img
                                            src={item.url}
                                            alt={`Slide ${index}`}
                                            className="object-cover w-full h-full"
                                            title="Dorian Electra"
                                        />
                                    ) : (
                                        <video
                                            src={item.url}
                                            autoPlay
                                            muted
                                            loop
                                            className="object-cover w-full h-full"
                                        />
                                    )}
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section >
    )
}
export default Gallery;