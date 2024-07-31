'use client';

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

export default function LocalSwitcher({ lang }) {
   const { push } = useRouter()
   const pathname = usePathname()

   const onSelectChange = (e) => {
      const nextLocale = e.target.value;
      push(`/${nextLocale}${pathname.slice(3)}`)
   };

   return (
      <label className='border-2 rounded select relative link'>
         {
            lang === "ru" ?
               <Image
                  className="absolute top-0.5 right-3 select-none pointer-events-none"
                  src={"/images/icons/ru.svg"}
                  width={20}
                  height={20}
                  alt="ru"
               />
               :
               <Image
                  className="absolute top-0.5 right-3.5 select-none pointer-events-none"
                  src={"/images/icons/uz.png"}
                  width={18}
                  height={18}
                  alt="uz"
               />
         }

         <select
            defaultValue={lang}
            className='bg-transparent w-14 px-1 text-sm select cursor-pointer bg-[#7d5a50] dark:bg-[#7d5a50]'
            onChange={onSelectChange}
         >
            <option value='ru' className="flex">
               Ru
            </option>
            <option value='uz'>
               Uz
            </option>
         </select>
      </label>
   );
}