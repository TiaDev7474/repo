"use client"

import React from 'react';
import { useRouter } from "next/navigation";
import useFormStore, {useStepStore} from "@/state/step_form_state";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";

interface Step3FormData {
    birthCertificate: File[];
    marriageCertificate: File[];
}

const Step3Form = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<Step3FormData>();
    const updateStep3 = useStepStore.use.updateStep3()
    const setValidationStatus = useFormStore((state) => state.setValidationStatus);
    const nextStep = useFormStore((state) => state.nextStep);
    const prevStep = useFormStore((state) => state.prevStep);
    const router = useRouter();

    const onSubmit = (data: Step3FormData) => {
        const formData = new FormData()
        updateStep3({
            birthCertificate:data.birthCertificate,
            marriageCertificate: data.marriageCertificate
        })
        setValidationStatus('step3', true);
        nextStep();
        router.push('/steps/step4');
    };

    const goBack = () => {
        prevStep();
        router.push('/steps/step2');
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="w-full px-[10%] flex flex-col space-y-6">
            <div>
                <div className="flex flex-col space-y-2">
                    <label htmlFor="birthCertificate">Acte de Naissance (PDF)</label>
                    <Input id="birthCertificate"  className=" border border-[#5541D9] rounded-xl h-[55px]" type="file" accept=".pdf" {...register('birthCertificate', { required: true })} />
                    {errors.birthCertificate && <span>Birth certificate is required</span>}
                </div>
            </div>
            <div>
                <div className="flex flex-col space-y-2">
                    <label htmlFor="marriageCertificate">Acte de Mariage (PDF)</label>
                    <Input id="marriageCertificate" className=" border border-[#5541D9] rounded-xl h-[55px]" type="file" accept=".pdf" {...register('marriageCertificate', { required: true })} />
                    {errors.marriageCertificate && <span>Marriage certificate is required</span>}
                </div>
            </div>
            <div className="flex justify-between">
                <button type="button" onClick={goBack} className="bg-white border border-[#5541D9] text-[#5541D9] px-10">Previous</button>
                <button type="submit" className="bg-[#5541D9] px-10 text-white">Next</button>
            </div>
        </form>
    );
};

export default Step3Form;
