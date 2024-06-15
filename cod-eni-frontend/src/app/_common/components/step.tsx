import React from 'react';
import {steps} from "@/app/_common/constants/values_data";
import StepCard from "@/app/_common/components/setup_card";

const Step = () => {
    return (
        <div className="px-[8%] flex flex-col space-y-20 h-screen">
            <div className="text-center flex flex-col space-y-6">
                <h4 className="text-6xl ">
                    Comment ça marche
                </h4>
                <p>
                    Simplifiez vos démarches administratives en quatre étapes faciles avec CitizenConnect
                </p>
            </div>
            <div className="flex flex-col  space-y-10">
                {
                    steps.map((elem,key)=>(
                        <StepCard item={elem} rank={key + 1} key={key}/>
                    ))
                }
            </div>
        </div>
    );
};

export default Step;