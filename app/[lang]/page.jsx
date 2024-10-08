import { Playfair_Display } from "next/font/google";

import Hero from "@/components/Hero";
import SectionTwo from "@/components/SectionTwo";
import SectionThree from "@/components/SectionThree";
import SectionFour from "@/components/SectionFour";
import SectionSeven from "@/components/SectionSeven";
import SectioneEight from "@/components/SectioneEight";
import { getDictionary } from "@/lib/dictionary";
import SectionSix from "@/components/SectionSix";

const Playfair_DisplayFont = Playfair_Display({
   weight: ['400', "500", "600"],
   display: 'swap',
   subsets: ["latin"]
});

export default async function Home({ params: { lang } }) {
   const { homepage, modal } = await getDictionary(lang);

   return (
      <>
         <section>
            <Hero Playfair_DisplayFont={Playfair_DisplayFont} homepage={homepage} modalLang={modal} />
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
            <SectionSix Playfair_DisplayFont={Playfair_DisplayFont} homepage={homepage} />
         </section>

         <section className="bg-[#c9aa7e]">
            <SectionSeven Playfair_DisplayFont={Playfair_DisplayFont} homepage={homepage} />
         </section>

         <section className="bg-[#c9aa7e]">
            <SectioneEight Playfair_DisplayFont={Playfair_DisplayFont} homepage={homepage} lang={lang} modalLang={modal} />
         </section>
      </>
   );
}
