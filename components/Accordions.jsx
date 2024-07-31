"use client"
import React, { useState } from "react";
import Accordion from './children/Accordion'
import gsap from "gsap";

const AccordionData = [
    {
        title: "What is your current stack?",
        content:
            "I am currently working with mostly Javascript, especially Javascript. For frontend I am using React with Emotion and GSAP. For backend I also use Node.js. Although throughout the years I gained some PHP experience to, which means, that I could make something working out of it, but I am not an expert by any means."
    },
    {
        title: "What is your relationshop with the backend?",
        content:
            "I just transitioned myself into a full stack developer, by learned databases - relational and NoSQL - and different approaches to connect them with the fronted.I am pretty enthusiastic about GraphQL."
    },
    {
        title: "Any other stuff?",
        content:
            "Yeah, I am pretty much into WebGL and other more experimental stuff, I also made a bunch of <em>GLSL</em> coding. This correlates a lot with my interest in creative coding."
    }
];

const Accordions = () => {
    const [expanded, setExpanded] = useState(4);

    return (
        <div className='w-full h-auto'>
            {AccordionData.map((e, i) => (
                <Accordion
                    key={i}
                    id={i}
                    title={e.title}
                    content={e.content}
                    expanded={expanded}
                    setExpanded={setExpanded}
                />
            ))}
        </div>
    )
}

export default Accordions
