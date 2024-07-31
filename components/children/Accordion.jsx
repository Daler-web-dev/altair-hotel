"use client"
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { IoMdArrowDropright } from "react-icons/io";

const Accordion = ({ title, id, content, expanded, setExpanded }) => {
    const isOpen = id === expanded;
    const ref = useRef();

    useEffect(() => {
        gsap.to(ref.current.children[1], {
            height: isOpen ? "auto" : 0
        });
        gsap.to(ref.current.children[0].children[1], {
            rotate: isOpen ? 90 : 0,
            duration: 0.5
        });
    }, [isOpen]);

    return (
        <div className="w-full h-auto border-b cursor-pointer" ref={ref}>
            <div className="pt-1 rounded-r-xl flex justify-start " onClick={() => setExpanded(id === expanded ? -1 : id)}>
                <h3 className="font-semibold text-gray uppercase">{title}</h3>
                <IoMdArrowDropright size={20} color="#6d6960" />
            </div>
            <div className="overflow-hidden mb-1">
                <p className="text-sm text-gray-500" dangerouslySetInnerHTML={{ __html: content }}></p>
            </div>
        </div>
    )
}

export default Accordion
