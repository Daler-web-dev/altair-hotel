"use client"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import Link from 'next/link'
import React, { useRef } from 'react'

const SectionTwo = ({ Playfair_DisplayFont, homepage, lang }) => {
    gsap.registerPlugin(ScrollTrigger);

    useGSAP(() => {
        gsap.from(".two", {
            x: 40,
            opacity: 0,
            stagger: .2,
            scrollTrigger: {
                trigger: ".two-sec",
                start: "-50% center",
            }
        })
        gsap.from(".two-sec-img", {
            x: -100,
            opacity: 0,
            scrollTrigger: {
                trigger: ".two-sec-img",
                start: "-50% center",
            }
        })
    }, []);

    return (
        <div className="flex max-lg:flex-col-reverse items-center gap-20 max-2xl:gap-10 overflow-hidden">
            <div className="two-sec-img w-2/5 max-lg:w-full h-[500px] max-2xl:h-[450px] max-xl:h-[400px] max-lg:h-[350px] max-sm:h-[280px] max-lg:mr-5 rounded-r-full overflow-hidden">
                <Image
                    className="w-full h-full object-cover"
                    width={1000}
                    height={1000}
                    src={"/images/image-3.webp"}
                    alt='image'
                />
            </div>

            <div className="two-sec text-center lg:w-3/5 max-w-4xl pr-24 max-lg:px-5 max-lg:mt-5">
                <p className={`two mb-1 tracking-[4px] font-medium text-gray ${Playfair_DisplayFont.className}`}>{homepage.sectiontwo.subtitle}</p>
                <h2 className={`two text-5xl max-xl:text-4xl max-lg:text-3xl font-medium text-gray ${Playfair_DisplayFont.className}`}>{homepage.sectiontwo.title}</h2>
                <hr className="two line m-auto bg-[#6d6960]" />
                <p className="two text-sm tracking-[1px] leading-5 text-gray">
                    {homepage.hero.dcr}
                </p>
                <Link href={`/${lang}/contacts`} className="two w-fit block button m-auto mt-5">{homepage.sectiontwo.button}</Link>
            </div>
        </div>
    )
}

export default SectionTwo
