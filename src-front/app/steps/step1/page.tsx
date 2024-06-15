import React from 'react';
import Step1Form from "@/app/steps/step1/_components/step1_form";

const Page = () => {
    return (
        <div className="flex flex-col items-center space-y-12 w-full pt-14">
            <h3 className="text-4xl"> Informations personnels </h3>
            <Step1Form/>
        </div>
    );
};

export default Page;