import { Playfair_Display } from "next/font/google";
import { getDictionary } from "@/lib/dictionary";
import BeBookingForm from "@/components/be-forms/BeBookingForm";

const Playfair_DisplayFont = Playfair_Display({
    weight: ["400", "500", "600"],
    display: "swap",
    subsets: ["latin"],
});

const Page = async ({ params: { lang } }) => {
    const { booking } = await getDictionary(lang);

    return (
        <div>
            <div className="py-32 max-lg:py-20 max-md:pt-5 max-md:pb-0 md:bg-[url('/images/image-5.webp')] bg-cover bg-no-repeat bg-bottom px-3 relative z-20">
                <div className="absolute z-[-1] top-0 left-0 inset-0 bg-black/40 md:block hidden"></div>
                <h2
                    className={`text-5xl max-xl:text-4xl md:text-center font-medium text-gray md:text-white ${Playfair_DisplayFont.className}`}
                >
                    {booking.title}
                </h2>
            </div>

            <div className="custom-container padding">
                <BeBookingForm />
            </div>
        </div>
    );
};

export default Page;
