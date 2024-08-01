"use client"
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';


gsap.registerPlugin(ScrollTrigger);
const SectionThree = ({ Playfair_DisplayFont, homepage }) => {
    const arr = [
        {
            title: homepage.sectionthree.title,
            dcr: homepage.sectionthree.dcr,
            img: "/images/services/transfer.png"
        },
        {
            title: homepage.sectionthree.title2,
            dcr: homepage.sectionthree.dcr2,
            img: "/images/services/transfer.png"
        },
        {
            title: homepage.sectionthree.title3,
            dcr: homepage.sectionthree.dcr3,
            img: "/images/services/transfer.png"
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
        <div className="custom-container padding">
            <div className="mb-24 max-md:mb-14 text-center">
                <h2 className={`text-5xl max-xl:text-4xl max-lg:text-3xl font-medium text-white ${Playfair_DisplayFont.className}`}>{homepage.sectionthree.secTitle}</h2>
            </div>
            <div className="as grid grid-cols-3 max-xl:grid-cols-2 max-md:grid-cols-1 gap-5 gap-y-20 ">
                {
                    arr.map((el, index) => (
                        <div key={index} className="a px-5">
                            <div className="absolute -top-12 max-md:-top-5 -left-0 z-[-1] w-full h-52 overflow-hidden">
                                <Image
                                    className='w-full h-full object-cover object-center rounded-xl'
                                    src={el.img}
                                    width={1000}
                                    height={1000}
                                    alt='img'
                                />
                            </div>

                            <div className="text-center mt-5 max-md:mt-3 p-5 rounded-xl text-white bg-black/30 backdrop-blur-[2px]">
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
        </div>
    )
}

export default SectionThree
