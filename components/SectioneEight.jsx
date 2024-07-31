"use client"
import { useGSAP } from '@gsap/react';
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';
import React, { useState } from 'react'
import Modal from './Modal';

gsap.registerPlugin(ScrollTrigger);
const SectioneEight = ({ Playfair_DisplayFont, homepage, lang }) => {
    const [isOpenModal, setIsOpenModal] = useState(false);

    const openModal = () => setIsOpenModal(true);
    const closeModal = () => setIsOpenModal(false);

    useGSAP(() => {
        gsap.from(".eight-sec-title ", {
            y: 40,
            opacity: 0,
            duration: 1,
            scrollTrigger: {
                trigger: ".eight-sec",
                start: "-30% center",
            }
        })
    }, [])

    return (
        <>
            <Modal isOpenModal={isOpenModal} closeModal={closeModal} />
            <div className="eight-sec custom-container padding flex gap-5 max-lg:flex-col lg:items-center justify-between">
                <div className="max-w-4xl max-xl:max-w-3xl text-white">
                    <h2 className={`eight-sec-title text-5xl max-xl:text-4xl max-lg:text-3xl font-medium ${Playfair_DisplayFont.className}`}>{homepage.sectionseven.title}</h2>
                    <hr className="eight-sec-title line bg-white" />
                    <p className="eight-sec-title tracking-[2px] max-sm:text-sm">
                        {homepage.sectionseven.dcr}
                    </p>
                </div>
                <div className="">
                    <button onClick={openModal} className="eight-sec-title button">{homepage.hero.button}</button>
                </div>
            </div>
        </>
    )
}

export default SectioneEight
