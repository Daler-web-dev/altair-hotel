"use client"
import React from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { FaHotel } from 'react-icons/fa'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, FreeMode, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';


gsap.registerPlugin(ScrollTrigger);
const SectionFour = ({ Playfair_DisplayFont, homepage }) => {
    const arr = [
        {
            title: homepage.sectionfour.title,
            dcr: "",
            img: "/images/image-1.webp",
            additionally: [
                {
                    title: "Free Wifi",
                    dcr: "Lorem ipsum dolor sit amet consectetur."
                },
                {
                    title: "Free Wifi",
                    dcr: "Lorem ipsum dolor sit amet consectetur."
                },
                {
                    title: "Free Wifi",
                    dcr: "Lorem ipsum dolor sit amet consectetur."
                },
                {
                    title: "Free Wifi",
                    dcr: "Lorem ipsum dolor sit amet consectetur."
                },
                {
                    title: "Free Wifi",
                    dcr: "Lorem ipsum dolor sit amet consectetur."
                }
            ]
        },
        {
            title: homepage.sectionfour.title2,
            dcr: "",
            img: "/images/image-1.webp",
            additionally: [
                {
                    title: "Free Wifi",
                    dcr: "Lorem ipsum dolor sit amet consectetur."
                },
                {
                    title: "Free Wifi",
                    dcr: "Lorem ipsum dolor sit amet consectetur."
                },
                {
                    title: "Free Wifi",
                    dcr: "Lorem ipsum dolor sit amet consectetur."
                },
                {
                    title: "Free Wifi",
                    dcr: "Lorem ipsum dolor sit amet consectetur."
                },
                {
                    title: "Free Wifi",
                    dcr: "Lorem ipsum dolor sit amet consectetur."
                }
            ]
        },
        {
            title: homepage.sectionfour.title3,
            dcr: "",
            img: "/images/image-1.webp",
            additionally: [
                {
                    title: "Free Wifi",
                    dcr: "Lorem ipsum dolor sit amet consectetur."
                },
                {
                    title: "Free Wifi",
                    dcr: "Lorem ipsum dolor sit amet consectetur."
                },
                {
                    title: "Free Wifi",
                    dcr: "Lorem ipsum dolor sit amet consectetur."
                },
                {
                    title: "Free Wifi",
                    dcr: "Lorem ipsum dolor sit amet consectetur."
                },
                {
                    title: "Free Wifi",
                    dcr: "Lorem ipsum dolor sit amet consectetur."
                }
            ]
        },
    ]

    useGSAP(() => {
        gsap.from(".room", {
            y: 40,
            opacity: 0,
            stagger: .2,
            duration: 1,
            scrollTrigger: {
                trigger: ".four-sec",
                start: "-10% center",
            }
        })
        gsap.from(".title", {
            y: 40,
            opacity: 0,
            duration: 1,
            scrollTrigger: {
                trigger: ".four-sec",
                start: "-10% center",
            }
        })
    }, []);

    return (
        <div className="four-sec padding">
            <div id='rooms' className="text-center">
                <h2 className={`title text-5xl max-xl:text-4xl max-lg:text-3xl font-medium text-gray ${Playfair_DisplayFont.className}`}>Наши номера</h2>
            </div>

            <div className="mt-10 max-lg:mt-7 max-md:mt-7">
                <Swiper
                    spaceBetween={30}
                    className='px-3'
                    slidesPerView={'auto'}
                    centeredSlides={true}
                    // navigation={true}
                    modules={[Navigation]}
                    navigation={{
                        clickable: true,
                    }}
                    breakpoints={{
                        640: {
                            spaceBetween: 20,
                        },
                        768: {
                            spaceBetween: 0,
                        },
                        1140: {
                            spaceBetween: 15,
                        },
                    }}
                >
                    {
                        arr.map((el, index) => (
                            <SwiperSlide key={index} className='max-w-5xl max-xl:max-w-4xl max-lg:max-w-3xl px-5 duration-200 ease-in'>
                                <div className="bg-[#c9aa7e] room rounded-[60px] max-md:rounded-3xl overflow-hidden text-white">
                                    <div className="flex max-lg:flex-col">
                                        <div className="w-1/2 max-lg:w-full p-14 max-lg:px-10 max-md:px-4 max-lg:py-8 max-sm:py-5">
                                            <h3 className={`text-4xl max-md:text-3xl font-medium text-center ${Playfair_DisplayFont.className}`}>{el.title}</h3>
                                            <hr className="line m-auto bg-[#D7DDE8]" />
                                            <p className=" text-center max-lg:text-sm">
                                                {el.dcr}
                                            </p>
                                        </div>
                                        <div className="w-1/2 max-lg:w-full max-h-96 max-lg:h-60 max-md:h-40 overflow-hidden">
                                            <Image
                                                className="w-full h-full object-cover"
                                                width={1000}
                                                height={1000}
                                                src={el.img}
                                                alt='image'
                                            />
                                        </div>
                                    </div>
                                    <div className="">
                                        <Swiper
                                            slidesPerView={"auto"}
                                            modules={[FreeMode, Pagination]}
                                            freeMode={true}
                                        >
                                            {
                                                el.additionally.map((i, idx) => (
                                                    <SwiperSlide key={idx} className='rooms-blocks max-w-52 max-2xl:max-w-44 max-sm:max-w-36'>
                                                        <div className="py-5 max-sm:py-3 px-10 max-2xl:px-5">
                                                            <div className="border-4 max-sm:border-2 border-[#D7DDE8] p-3 max-sm:p-2 rounded-full w-fit m-auto">
                                                                <FaHotel size={20} color="#D7DDE8" />
                                                            </div>
                                                            <h4 className="text-center mt-1">{i.title}</h4>
                                                            <p className="text-center md:mt-1 text-sm max-lg:text-xs ">{i.dcr}</p>
                                                        </div>
                                                    </SwiperSlide>
                                                ))
                                            }
                                        </Swiper>
                                        {/* <div className="py-5">
                                            <button className="button m-auto block">{homepage.sectionfour.button}</button>
                                        </div> */}
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </div>
    )
}

export default SectionFour
