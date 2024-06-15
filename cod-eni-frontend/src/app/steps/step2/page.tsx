import React from 'react';
import Step2Form from "@/app/steps/step2/_components/step2_form";

const Page = () => {
    return (
        <div className="flex flex-col items-center space-y-12 w-full pt-14">
            <h3 className="text-4xl"> Pieces de verification</h3>
            <Step2Form/>
        </div>
    );
};

export default Page;