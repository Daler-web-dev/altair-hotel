"use client"
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import LocalSwitcher from './LocalSwitcher';

const Header = ({ nav, lang }) => {
    const container = useRef()
    const [openModal, setOpenModal] = useState(false);
    const tl = useRef()

    useGSAP(() => {
        gsap.from(".link", {
            y: -40,
            opacity: 0,
            stagger: .1
        })
    }, [])

    useGSAP(() => {
        gsap.set(".menu-link-item-holder", { y: 75 })

        tl.current = gsap.timeline({ paused: true })
            .to(".menu-overlay", {
                duration: 1.25,
                clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                ease: "power4.inOut"
            })
            .to(".menu-link-item-holder", {
                y: 0,
                duration: 1,
                stagger: 0.1,
                ease: "power4.inOut",
                delay: -0.75
            })
    }, { scope: container })

    useEffect(() => {
        if (openModal) {
            gsap.to(".open", {
                y: 30,
                opacity: 0,
                duration: 1
            })
            gsap.to(".close", {
                y: -3,
                opacity: 1,
                duration: 1
            })
            tl.current.play()
        } else {
            gsap.to(".open", {
                y: -33,
                opacity: 1,
                duration: 1
            })
            gsap.to(".close", {
                y: -30,
                opacity: 0,
                duration: 1
            })
            tl.current.reverse()
        }
    }, [openModal])

    return (
        <header ref={container} className='w-full bg-[#7d5a50] text-white fixed z-50'>
            <div className="custom-container flex justify-between items-center py-5 max-xl:py-3">
                <div className="link">
                    <Link href={`/${lang}`}>
                        <h1 className='text-2xl max-sm:text-xl font-semibold'>ALTAIR</h1>
                    </Link>
                </div>

                <div className="flex items-center gap-3">
                    <LocalSwitcher lang={lang} />
                    <nav className={`menu-overlay max-lg:z-[-1]`}>
                        <ul className='hidden max-md:flex max-md:flex-col md:items-center md:justify-between gap-5 max-md:gap-3 px-3 max-md:pt-5'>
                            <li className='menu-link-item'>
                                <p className='menu-link-item-holder transform-none md:leading-loose'>
                                    <Link onClick={() => setOpenModal(false)} href={`/${lang}`} className='max-md:text-6xl font-medium'>
                                        {nav.home}
                                    </Link>
                                </p>
                            </li>
                            <li className='menu-link-item'>
                                <p className='menu-link-item-holder md:leading-loose'>
                                    <Link onClick={() => setOpenModal(false)} href={"#reviews"} className='max-md:text-6xl font-medium'>
                                        {nav.reviews}
                                    </Link>
                                </p>
                            </li>
                            <li className='menu-link-item'>
                                <p className='menu-link-item-holder md:leading-loose'>
                                    <Link onClick={() => setOpenModal(false)} href={"#rooms"} className='max-md:text-6xl font-medium'>
                                        {nav.numbers}
                                    </Link>
                                </p>
                            </li>
                            <li className='menu-link-item'>
                                <p className='menu-link-item-holder translate-y-[75px] md:leading-loose'>
                                    <Link onClick={() => setOpenModal(false)} href={`/${lang}/contacts`} className='max-md:text-6xl font-medium'>
                                        {nav.contacts}
                                    </Link>
                                </p>
                            </li>
                        </ul>

                        <ul className='max-md:hidden flex max-md:flex-col md:items-center md:justify-between gap-5 max-md:gap-3 px-3 max-md:pt-5'>
                            <li className='link'>
                                <Link onClick={() => setOpenModal(false)} href={`/${lang}`}>
                                    {nav.home}
                                </Link>
                            </li>
                            <li className='link'>
                                <Link onClick={() => setOpenModal(false)} href={`/${lang}/#reviews`}>
                                    {nav.reviews}
                                </Link>
                            </li>
                            <li className='link'>
                                <Link onClick={() => setOpenModal(false)} href={`/${lang}/#rooms`}>
                                    {nav.numbers}
                                </Link>
                            </li>
                            <li className='link'>
                                <Link onClick={() => setOpenModal(false)} href={`/${lang}/contacts`}>
                                    {nav.contacts}
                                </Link>
                            </li>
                        </ul>
                    </nav>

                    <div className="max-md:flex hidden items-center link">
                        <button className='h-[25px] overflow-hidden my-auto' onClick={() => setOpenModal(!openModal)}>
                            <IoCloseSharp className='close' size={30} color='#fff' />
                            <GiHamburgerMenu className='open' size={30} color='#fff' />
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
