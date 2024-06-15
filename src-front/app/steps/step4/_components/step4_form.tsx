"use client"

import React, {useEffect} from 'react';
import { useRouter } from "next/navigation";
import useFormStore, {useStepStore} from "@/state/step_form_state";
import { useForm } from "react-hook-form";
import {useCreateIdentity} from "@/app/steps/step4/_hooks/providers_hook";
import {IData} from "@/app/steps/step4/_services/definition";

interface Step4FormData {
    motherName: string;
    fatherName: string;
    parentsContactNumber: string;
}

const Step4Form = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<Step4FormData>();
    const updateStep4 = useStepStore.use.updateStep4()
    const step1= useStepStore.use.step1()
    const step2= useStepStore.use.step2()
    const step3 =useStepStore.use.step3()
    const  step4 = useStepStore.use.step4()
    const {mutate,data:sdata,isLoading,isSuccess}= useCreateIdentity()
    const setValidationStatus = useFormStore((state) => state.setValidationStatus);
    const nextStep = useFormStore((state) => state.nextStep);
    const prevStep = useFormStore((state) => state.prevStep);
    const router = useRouter();

    const onSubmit = (data: Step4FormData) => {
        updateStep4({
            fatherName: data.fatherName,
            motherName: data.motherName,
            parentsContactNumber:data.parentsContactNumber

        })
        const formData:IData = {
            fullName: step1.name,
            birthDate: step1.birth,
            birthPlace: step1.lieu,
            gender: "Male", // Assuming this is constant
            nationality: "Malagasy", // Assuming this is constant
            address: "Tanambao 1345", // Example address
            phoneNumber: step1.phone,
            email: step1.email,
            parentNames:step4.fatherName,
            residenceProof: "Document d'identite",
            photo: "my photo",
            state: "pending",
            uniqueId: null,
            identityDocument:"identityDocument"
        };
        // const formData = new FormData()
        // formData.append("fullName",step1.name)
        // formData.append("birthDate",step1.birth.toString())
        // formData.append("birthPlace",step1.lieu)
        // formData.append("gender","Male")
        // formData.append("nationality","Malagasy")
        // formData.append("address","Tanambao 1345")
        // formData.append("phoneNumber",step1.phone)
        // formData.append("email",step1.email)
        // formData.append("residenceProof","Docment d'identite")
        // formData.append("photo","my photo")
        // formData.append("state","pending")
        // formData.append("uniqueId","null")
        console.log(formData)
        mutate(formData)
        setValidationStatus('step4', true);
        nextStep();
    };

    useEffect(() => {
        if(isSuccess){
            console.log(sdata)
        }
    }, [isLoading]);

    const goBack = () => {
        prevStep();
        router.push('/steps/step3');
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="w-full px-[10%] flex flex-col space-y-6">
            <div>
                <div className="flex flex-col space-y-2">
                    <label htmlFor="motherName">Nom de la Mère</label>
                    <input id="motherName" className="border outline-none border-[#5541D9] rounded-xl p-3" {...register('motherName', { required: true })} />
                    {errors.motherName && <span>Le nom de la mère est requis</span>}
                </div>
            </div>
            <div>
                <div className="flex flex-col space-y-2">
                    <label htmlFor="fatherName">Nom du Père</label>
                    <input id="fatherName" className="border outline-none border-[#5541D9] rounded-xl p-3" {...register('fatherName', { required: true })} />
                    {errors.fatherName && <span>Le nom du père est requis</span>}
                </div>
            </div>
            <div>
                <div className="flex flex-col space-y-2">
                    <label htmlFor="parentsContactNumber">Numéro de Contact des Parents</label>
                    <input id="parentsContactNumber" className="border outline-none border-[#5541D9] rounded-xl p-3" {...register('parentsContactNumber', { required: true })} />
                    {errors.parentsContactNumber && <span>Le numéro de contact des parents est requis</span>}
                </div>
            </div>
            <div className="flex justify-between">
                <button type="button" onClick={goBack} className="bg-white border border-[#5541D9] text-[#5541D9] px-10">Précédent</button>
                <button type="submit" className="bg-[#5541D9] px-10 text-white">Soumettre</button>
            </div>
        </form>
    );
};

export default Step4Form;
