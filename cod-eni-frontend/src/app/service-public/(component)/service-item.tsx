import {GoArrowUpRight} from "react-icons/go";
import React from "react";
import Link from "next/link";


export default function ServiceItem({title, description, link}: { title: string, description: string, link: string}) {
    return(
        <Link href={link}>
            <div className={`flex flex-col space-y-14  p-5 rounded-xl bg-[#ECF8FF] `} >
                <div className="flex justify-start">
                    <div className={`py-3 rounded-full text-md font-medium `}>
                        { title }
                    </div>
                </div>
                <div className="flex flex-col space-y-4">
                    <p className="text-sm">
                        {description}
                    </p>
                    <div className={`bg-orange-200 rounded-full flex items-center justify-center h-12 w-12 `}>
                        <GoArrowUpRight  className="text-white text-xl"/>
                    </div>
                </div>
            </div>
        </Link>

    )
}
