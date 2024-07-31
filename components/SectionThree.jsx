"use client"
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaBus } from "react-icons/fa";
import { MdDinnerDining } from "react-icons/md";
import { FaCameraRetro } from "react-icons/fa";


gsap.registerPlugin(ScrollTrigger);
const SectionThree = ({ Playfair_DisplayFont, homepage }) => {
    const arr = [
        {
            title: homepage.sectionthree.title,
            dcr: homepage.sectionthree.dcr,
            icon: <FaBus size={30} color="#fff" />
        },
        {
            title: homepage.sectionthree.title2,
            dcr: homepage.sectionthree.dcr2,
            icon: <MdDinnerDining size={30} color="#fff" />
        },
        {
            title: homepage.sectionthree.title3,
            dcr: homepage.sectionthree.dcr3,
            icon: <FaCameraRetro size={30} color="#fff" />
        },
    ]

    useGSAP(() => {
        gsap.from(".a", {
            x: -40,
            opacity: 0,
            stagger: .2,
            scrollTrigger: {
                trigger: ".as",
                start: "-30% center",
            }
        })
    }, []);

    return (
        <div className="as custom-container grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-20 max-xl:gap-16 max-lg:gap-10 padding">
            {
                arr.map((el, index) => (
                    <div key={index} className="a max-sm:px-3 text-white">
                        <div className="border-4 border-white p-3 rounded-full w-fit m-auto">
                            {el.icon}
                        </div>
                        <div className="text-center mt-5 max-md:mt-3">
                            <h3 className={`text-4xl max-lg:text-3xl max-sm:text-2xl font-medium ${Playfair_DisplayFont.className}`}>
                                {el.title}
                            </h3>
                            <p className="mt-3 text-sm leading-5 tracking-[1px]">
                                {el.dcr}
                            </p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default SectionThree
