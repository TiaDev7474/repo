"use client"

import React from 'react';
import { useRouter } from "next/navigation";
import useFormStore, {useStepStore} from "@/state/step_form_state";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";

interface Step2FormData {
    passportNumber: string;
    residenceProof: File[];
    photo: File[];
}

const Step2Form = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<Step2FormData>();
    const updateStep2 = useStepStore.use.updateStep2()
    const setValidationStatus = useFormStore((state) => state.setValidationStatus);
    const nextStep = useFormStore((state) => state.nextStep);
    const prevStep = useFormStore((state) => state.prevStep);
    const router = useRouter();

    const onSubmit = (data: Step2FormData) => {
        updateStep2({
            passportNumber: data.passportNumber,
            photoImage: data.photo,
            residenceImage: data.residenceProof
        })
        console.log(data)
        setValidationStatus('step2', true);
        setValidationStatus('step3', true);
        nextStep();
        router.push('/steps/step3');
    };

    const goBack = () => {
        prevStep();
        router.push('/steps/step1');
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="w-full px-[10%] flex flex-col space-y-6">
            <div>
                <div className="flex flex-col space-y-2">
                    <label htmlFor="passportNumber">Numéro de Passeport</label>
                    <input id="passportNumber" className="border outline-none border-[#5541D9] rounded-xl p-3" {...register('passportNumber', { required: true })} />
                    {errors.passportNumber && <span>Passport number is required</span>}
                </div>
            </div>
            <div>
                <div className="flex flex-col space-y-2">
                    <label htmlFor="residenceProof">Preuve de Résidence</label>
                    <Input id="residenceProof" className=" border border-[#5541D9] rounded-xl h-[55px]" type="file" {...register('residenceProof', { required: true })} />
                    {errors.residenceProof && <span>Residence proof is required</span>}
                </div>
            </div>
            <div>
                <div className="flex flex-col space-y-2">
                    <label htmlFor="photo">Photo</label>
                    <Input id="photo" className=" border border-[#5541D9] rounded-xl h-[55px]" type="file" {...register('photo', { required: true })} />
                    {errors.photo && <span>Photo is required</span>}
                </div>
            </div>
            <div className="flex justify-between">
                <button type="button" onClick={goBack} className="bg-white border border-[#5541D9] text-[#5541D9] px-10">Previous</button>
                <button type="submit" className="bg-[#5541D9] px-10 text-white">Next</button>
            </div>
        </form>
    );
};

export default Step2Form;
