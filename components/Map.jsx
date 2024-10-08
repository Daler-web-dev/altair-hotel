"use client"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React from 'react'
import Accordions from './Accordions'

gsap.registerPlugin(ScrollTrigger)
const Map = ({ Playfair_DisplayFont, contact }) => {

    useGSAP(() => {
        gsap.from(".questions", {
            x: -40,
            opacity: 0,
            stagger: .2,
            scrollTrigger: {
                trigger: ".map-sec",
                start: "-90%",
            }
        })
        gsap.from(".map", {
            x: 40,
            opacity: 0,
            duration: 1,
            scrollTrigger: {
                trigger: ".map-sec",
                start: "-90%",
            }
        })
    }, [])

    return (
        <div className="map-sec mt-20 max-lg:mt-10 flex max-lg:flex-col items-center gap-10">
            <div className="lg:w-1/2">
                <div>
                    <h2 className={`questions text-5xl max-xl:text-4xl max-lg:text-3xl font-medium text-gray ${Playfair_DisplayFont.className}`}>{contact.map.title}</h2>
                    <p className={`questions my-3 text-gray font-medium ${Playfair_DisplayFont.className}`}>{contact.map.subtitle}</p>
                    А                </div>
                {/* <div className="mt-5 flex flex-col gap-2 questions">
                    <Accordions />
                </div> */}
            </div>
            <div className="map lg:w-1/2 w-full rounded-lg overflow-hidden">
                <iframe className='w-full min-h-[400px] max-lg:min-h-[300px]' src="https://yandex.uz/map-widget/v1/?from=mapframe&ll=66.973637%2C39.661262&source=mapframe&utm_source=mapframe&z=20" frameborder="1" allowfullscreen="true"></iframe>
            </div>
        </div>
    )
}

export default Map
