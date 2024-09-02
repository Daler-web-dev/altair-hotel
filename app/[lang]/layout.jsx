import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getDictionary } from "@/lib/dictionary";
import Head from "next/head";

const RobotoFont = Roboto({
   weight: "400",
   display: 'swap',
   subsets: ["latin"]
});

export const metadata = {
   title: {
      default: "Altair Hotel",
      template: "%s - Altair Hotel"
   },
   category: 'hotel',
   description: "Гостиница Altair предлагает уютные номера и первоклассный сервис в центре города. Забронируйте номер и насладитесь комфортным отдыхом!",
   openGraph: {
      title: 'Altair Hotel',
      description: 'Гостиница Altair предлагает уютные номера и первоклассный сервис в центре города. Забронируйте номер и насладитесь комфортным отдыхом!',
      url: 'https://altair-hotel.uz',
      siteName: 'altair-hotel.uz',
      images: [
         {
            url: 'https://raw.githubusercontent.com/gitdagray/my-blogposts/main/images/og-card.png',
            width: 800,
            height: 600,
            alt: "Altair Hotel"
         }
      ],
      locale: 'en_US',
      type: 'website',
   },
};

export default async function RootLayout({ children, params: { lang } }) {
   const { nav, footer } = await getDictionary(lang);

   return (
      <html lang={lang}>
         <body className={RobotoFont.className}>
            <Head>
               <meta property="og:title" content="Altair Hotel" />
               <meta property="og:description" content="Гостиница Altair предлагает уютные номера и первоклассный сервис в центре города. Забронируйте номер и насладитесь комфортным отдыхом!" />
               <meta property="og:url" content="https://altair-hotel.uz" />
               <meta property="og:site_name" content="altair-hotel.uz" />
               <meta property="og:image" content="https://raw.githubusercontent.com/gitdagray/my-blogposts/main/images/og-card.png" />
               <meta property="og:image:secure_url" content="https://raw.githubusercontent.com/gitdagray/my-blogposts/main/images/og-card.png" />
               <meta property="og:image:width" content="1200" />
               <meta property="og:image:height" content="630" />
               <meta property="og:image:alt" content="Altair Hotel" />
               <meta property="og:type" content="website" />
            </Head>
            <Header nav={nav} lang={lang} />
            <main className="pt-16 max-xl:pt-14 max-sm:pt-12">
               {children}
            </main>
            <Footer footer={footer} />
         </body>
      </html>
   );
}
