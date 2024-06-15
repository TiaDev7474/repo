import React from 'react';
import Step3Form from "@/app/steps/step3/_components/step3_form";

const Page = () => {
    return (
        <div className="flex flex-col items-center space-y-12 w-full pt-14">
            <h3 className="text-4xl"> Pieces de verification</h3>
            <Step3Form/>
        </div>
    );
};

export default Page;