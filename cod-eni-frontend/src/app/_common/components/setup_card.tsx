import React from 'react';
import {IStep} from "@/app/_common/constants/values_data";
import classNames from "classnames";

interface Props{
    item:IStep
    rank:number
}

const StepCard = (props:Props) => {
    const marginClasses = classNames({
        'ml-16': props.rank === 1,
        'ml-32': props.rank === 2,
        'ml-64': props.rank === 3,
    });
    return (
        <div className={`flex w-[80%] space-x-8 ml- ${marginClasses}`}>
            <h3 className="text-[#072BF2] font-bold text-5xl pt-2">
                .{props.rank}
            </h3>
            <div className=" flex flex-col bg-white p-6 space-y-3 w-[70%]">
                <h2 className="font-bold text-lg">
                    {
                        props.item.title
                    }
                </h2>
                <p className="text-sm">
                    {
                        props.item.description
                    }
                </p>
            </div>
        </div>
    );
};

export default StepCard;