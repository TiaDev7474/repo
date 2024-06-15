"use client"
import React from 'react';
import Link from "next/link";
import {IStepLink} from "@/app/_common/constants/step_data";
import useFormStore from "@/state/step_form_state";

interface Props{
    item:IStepLink
}

const Step = (props:Props) => {
    const validationStatus = useFormStore((state) => state.validationStatus);
    const isValid = validationStatus[`step${props.item.rank}` as keyof typeof validationStatus]
    return (
        <div className="flex space-x-2 items-center" >
            {isValid ? (
                <>
                    <div className="border-none bg-[#5541D9] px-2 py-[2px] text-white">
                        <h5>{props.item.rank}</h5>
                    </div>
                    <Link className="text-[#5541D9]" href={props.item.href}>
                        {props.item.label}
                    </Link>
                </>
            ) : (
                <>
                    <div className="border border-black px-2 py-[2px] text-black">
                        <h5>{props.item.rank}</h5>
                    </div>
                    <span className="text-gray-500">{props.item.label}</span>
                </>
            )}
        </div>
    );
};

export default Step;