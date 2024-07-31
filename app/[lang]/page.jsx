import { FaHotel } from "react-icons/fa";
import { Playfair_Display } from "next/font/google";

import Hero from "@/components/Hero";
import Image from "next/image";
import SectionTwo from "@/components/SectionTwo";
import SectionThree from "@/components/SectionThree";
import SectionFour from "@/components/SectionFour";
import SectionFive from "@/components/SectionFive";
import SectionSeven from "@/components/SectionSeven";
import SectioneEight from "@/components/SectioneEight";
import { getDictionary } from "@/lib/dictionary";
import SectionSix from "@/components/SectionSix";
import Head from "next/head";

const Playfair_DisplayFont = Playfair_Display({
   weight: ['400', "500", "600"],
   display: 'swap',
   subsets: ["latin"]
});

export default async function Home({ params: { lang } }) {
   const { homepage } = await getDictionary(lang);

   return (
      <>
         <section>
            <Hero Playfair_DisplayFont={Playfair_DisplayFont} homepage={homepage} />
         </section>

         <section>
            <SectionTwo Playfair_DisplayFont={Playfair_DisplayFont} homepage={homepage} lang={lang} />
         </section>

         <section className="bg-[#c9aa7e]">
            <SectionThree Playfair_DisplayFont={Playfair_DisplayFont} homepage={homepage} />
         </section>

         <section>
            <SectionFour Playfair_DisplayFont={Playfair_DisplayFont} homepage={homepage} />
         </section>

         {/* <section className="bg-[#c9aa7e]">
            <SectionFive Playfair_DisplayFont={Playfair_DisplayFont} homepage={homepage} />
         </section> */}

         <section>
            <SectionSix Playfair_DisplayFont={Playfair_DisplayFont} />
         </section>

         <section className="bg-[#c9aa7e]">
            <SectionSeven Playfair_DisplayFont={Playfair_DisplayFont} homepage={homepage} />
         </section>

         <section className="bg-[#c9aa7e]">
            <SectioneEight Playfair_DisplayFont={Playfair_DisplayFont} homepage={homepage} lang={lang} />
         </section>
      </>
   );
}
