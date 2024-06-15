import React from 'react';
import {IService} from "@/app/_common/constants/values_data";
import { GoArrowUpRight } from "react-icons/go";

interface Props{
    item:IService
}

const ServiceCard = (props:Props) => {
    return (
        <div className={`flex flex-col space-y-14 ${props.item.bg} p-5 rounded-xl`} >
            <div className="flex justify-start">
                <div className={`py-3 px-5 rounded-full text-sm ${props.item.tbg} `}>
                    {
                        props.item.title
                    }
                </div>
            </div>
            <div className="flex flex-col space-y-4">
                <p className="text-sm">
                    {props.item.description}
                </p>
                <div className={`${props.item.icon} rounded-full flex items-center justify-center h-12 w-12 `}>
                    <GoArrowUpRight  className="text-[#5541D9] text-xl"/>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;