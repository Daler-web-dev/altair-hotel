"use client"
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useEffect, useLayoutEffect, useRef } from 'react'


gsap.registerPlugin(ScrollTrigger);
const SectionSeven = ({ Playfair_DisplayFont, homepage }) => {
    const arr = [
        {
            dcr: homepage.sectionsix.com
        },
        {
            dcr: homepage.sectionsix.com2
        },
        {
            dcr: homepage.sectionsix.com3
        },
        {
            dcr: homepage.sectionsix.com4
        }
    ]

    useGSAP(() => {
        gsap.from(".texts", {
            opacity: 0,
            y: 40,
            duration: 1,
            ease: 'power3.out',
            stagger: .2,
            scrollTrigger: {
                trigger: ".trigger",
                start: "-10% center",
            }
        });
        gsap.from(".com", {
            x: -40,
            opacity: 0,
            duration: 1,
            stagger: .2,
            scrollTrigger: {
                trigger: ".coms",
                start: "-80% center",
            }
        })
    }, []);

    return (
        <div id='reviews' className="custom-container padding trigger">
            <div className=" max-w-3xl m-auto text-center">
                <h2 className={`texts text-5xl max-xl:text-4xl max-lg:text-3xl font-medium text-white ${Playfair_DisplayFont.className}`}>{homepage.sectionsix.title}</h2>
                <hr className="texts line m-auto bg-white" />
                <p className="texts tracking-[2px] max-sm:text-sm text-white">
                    {homepage.sectionsix.dcr}
                </p>
            </div>

            <div className="coms flex gap-5 max-md:gap-3 mt-14 max-md:mt-8 overflow-auto scroll-none">
                {
                    arr.map((i, idx) => (
                        <div key={idx} className="com min-w-80 max-md:min-w-60 p-8 max-md:p-4 flex flex-col rounded-md bg-[#7d5a50] text-white">
                            <p className="text-sm text-center mb-5">{i.dcr}</p>
                            <div className="w-fit h-fit mx-auto flex gap-3 mt-auto">
                                <div className="bg-gray-500 p-6 rounded-lg"></div>
                                <div className="">
                                    <p>Camella</p>
                                    <p>Lorem, ipsum.</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default SectionSeven
