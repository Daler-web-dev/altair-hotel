import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getDictionary } from "@/lib/dictionary";

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
            url: '/images/logo.png',
            width: 800,
            height: 600,
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
            <Header nav={nav} lang={lang} />
            <main className="pt-16 max-xl:pt-14 max-sm:pt-12">
               {children}
            </main>
            <Footer footer={footer} />
         </body>
      </html>
   );
}
