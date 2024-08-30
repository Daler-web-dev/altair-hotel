"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import Modal from './Modal'

const Hero = ({ Playfair_DisplayFont, homepage, modalLang }) => {
    const [isOpenModal, setIsOpenModal] = useState(false);

    const openModal = () => setIsOpenModal(true);
    const closeModal = () => setIsOpenModal(false);

    useGSAP(() => {
        gsap.from(".animated", {
            x: -40,
            opacity: 0,
            stagger: .2,
            duration: 1
        })
        gsap.from(".hero-img", {
            x: 40,
            opacity: 0,
            duration: 1
        })
    }, []);

    return (
        <>
            <Modal isOpenModal={isOpenModal} closeModal={closeModal} modalLang={modalLang} />
            <div className=" max-sm:text-center bg-[url('/images/image-18.webp')] bg-no-repeat bg-cover bg-center relative z-10">
                <div className="absolute inset-0 bg-black/50 top-0 left-0 z-[-1]"></div>
                <div className='hero custom-container flex gap-5 items-center justify-between padding'>
                    <div className="w-3/5 h-[45vh] max-sm:h-[75vh] max-md:w-full max-sm:flex max-sm:flex-col">
                        <p className={`animated tracking-[4px] normal-case text-white ${Playfair_DisplayFont.className}`}>{homepage.hero.subtitle}</p>
                        <h2 className={`animated text-5xl max-lg:text-4xl max-xs:text-3xl font-medium mb-3 normal-case text-white ${Playfair_DisplayFont.className}`}>{homepage.hero.title}</h2>
                        <button onClick={openModal} className='animated button mt-20  max-sm:mt-auto'>{homepage.hero.button}</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero
