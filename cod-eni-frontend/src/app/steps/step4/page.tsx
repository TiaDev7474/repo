import React from 'react';
import Step4Form from "@/app/steps/step4/_components/step4_form";


const Page = () => {
    return (
        <div className="flex flex-col items-center space-y-12 w-full pt-14">
            <h3 className="text-4xl"> Informations Parentales</h3>
            <Step4Form/>
        </div>
    );
};

export default Page;