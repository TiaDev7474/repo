import React from 'react';
import Step from "@/app/steps/_components/step";
import {step_link} from "@/app/_common/constants/step_data";

const SideIndicator = () => {

    return (
        <div className="flex w-[30%] flex-col space-y-3 justify-center h-screen px-10">
            {
                step_link.map((elem,key)=>(

                    <Step item={elem} key={key}/>
                ))
            }
        </div>
    );
};

export default SideIndicator;