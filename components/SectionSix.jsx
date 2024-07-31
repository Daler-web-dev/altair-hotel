"use client"
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image'
import React from 'react'
import Marquee from "react-fast-marquee";

gsap.registerPlugin(ScrollTrigger);
const SectionSix = ({ Playfair_DisplayFont }) => {

    useGSAP(() => {
        gsap.from(".gallery-texts", {
            opacity: 0,
            y: 40,
            duration: 1,
            ease: 'power3.out',
            stagger: .2,
            scrollTrigger: {
                trigger: ".gallery",
                start: "-10% center",
            }
        });
    }, [])

    return (
        <div className="padding">
            <div className="custom-container text-center gallery">
                <h2 className={`gallery-texts text-5xl max-xl:text-4xl max-lg:text-3xl font-medium text-gray ${Playfair_DisplayFont.className}`}>Caputer Every Moment With Us</h2>
                <hr className="gallery-texts line m-auto bg-[#6d6960]" />
                <p className="gallery-texts text-sm tracking-[1px] leading-5 text-gray">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque similique suscipit fugit blanditiis quas fugiat cupiditate animi voluptas, ipsum aspernatur illum atque id, deserunt dolorum?</p>
            </div>

            <div className="mt-10">
                <Marquee>
                    {
                        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17].map((i) => (
                            <div key={i} className="w-80 h-[200px] mx-2 overflow-hidden">
                                <Image
                                    className='w-full h-full object-cover rounded-lg'
                                    src={`/images/image-${i}.webp`}
                                    width={1000}
                                    height={1000}
                                    alt='images'
                                />
                            </div>
                        ))
                    }
                </Marquee>
            </div>
        </div>
    )
}

export default SectionSix
