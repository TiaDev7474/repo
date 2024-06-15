"use client"

import React, { useState } from 'react';
import { useRouter } from "next/navigation";
import useFormStore, {useStepStore} from "@/state/step_form_state";
import { useForm } from "react-hook-form";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

interface Step1FormData {
    name: string;
    email: string;
    cin: string;
    phone: string;
    birthdate: Date | null;
    birthplace: string;
}

const Step1Form = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<Step1FormData>();
    const setValidationStatus = useFormStore((state) => state.setValidationStatus);
    const updateStep1 = useStepStore.use.updateStep1()
    const nextStep = useFormStore((state) => state.nextStep);
    const router = useRouter();

    const [date, setDate] = useState<Date | undefined>(undefined);
    const [birthplace, setBirthplace] = useState<string>("");

    const onSubmit = (data: Step1FormData) => {
        const fullData = { ...data, birthdate: date, birthplace };
        updateStep1({
            name:fullData.name,
            cin:fullData.cin,
            phone:fullData.phone,
            email:fullData.email,
            lieu:fullData.birthplace,
            birth:fullData.birthdate!
        })
        setValidationStatus('step1', true);
        setValidationStatus('step2', true);
        nextStep();
        router.push('/steps/step2');
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="w-full px-[10%] flex flex-col space-y-6">
            <div className="flex justify-between w-full ">
                <div className="w-[48%]">
                    <div className="flex flex-col space-y-2">
                        <label htmlFor="name">Nom et prénom </label>
                        <input id="name" className="border outline-none border-[#5541D9] rounded-xl p-3" placeholder="Votre nom et prénom" {...register('name', { required: true })} />
                        {errors.name && <span>Name is required</span>}
                    </div>
                </div>
                <div className="w-[48%]">
                    <div className="flex flex-col space-y-2">
                        <label htmlFor="email">Email </label>
                        <input id="email" className="border outline-none border-[#5541D9] rounded-xl p-3" {...register('email', { required: true })} />
                        {errors.email && <span>Email is required</span>}
                    </div>
                </div>
            </div>
            <div className="flex justify-between w-full ">
                <div>
                    <div className="flex flex-col space-y-2">
                        <label htmlFor="birthdate">Date de naissance </label>
                        <Popover>
                            <PopoverTrigger asChild>
                                <Button
                                    variant={"outline"}
                                    className={cn(
                                        "w-[328px] h-[55px] rounded-xl justify-start text-left font-normal border border-[#5541D9]",
                                        !date && "text-muted-foreground"
                                    )}
                                >
                                    <CalendarIcon className="mr-2 h-4 w-4" />
                                    {date ? format(date, "PPP") : <span>Pick a date</span>}
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0">
                                <Calendar
                                    mode="single"
                                    selected={date}
                                    onSelect={(date) => setDate(date ?? undefined)}
                                    initialFocus
                                />
                            </PopoverContent>
                        </Popover>
                        {!date && <span>Date is required</span>}
                    </div>
                </div>
                <div>
                    <div className="flex flex-col space-y-2">
                        <label htmlFor="birthplace">Lieu de naissance </label>
                        <Select onValueChange={(value) => setBirthplace(value)}>
                            <SelectTrigger className="w-[328px] h-[55px] border border-[#5541D9] rounded-xl p-3">
                                <SelectValue placeholder="Choisissez le lieu" />
                            </SelectTrigger>
                            <SelectContent className="z-50 ">
                                <SelectGroup>
                                    <SelectLabel>Lieu</SelectLabel>
                                    <SelectItem value="Antananarivo">Antananarivo</SelectItem>
                                    <SelectItem value="Fianarantsoa">Fianarantsoa</SelectItem>
                                    <SelectItem value="Mahajanga">Mahajanga</SelectItem>
                                    <SelectItem value="Toliara">Toliara</SelectItem>
                                    <SelectItem value="Toamasina">Toamasina</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                        {!birthplace && <span>Lieu de naissance is required</span>}
                    </div>
                </div>
            </div>
            <div>
                <div className="flex flex-col space-y-2 ">
                    <label htmlFor="cin">CIN </label>
                    <input id="cin" className="border outline-none border-[#5541D9] rounded-xl p-3" {...register('cin', { required: true })} />
                    {errors.cin && <span>CIN is required</span>}
                </div>
            </div>
            <div>
                <div className="flex flex-col space-y-2 ">
                    <label htmlFor="phone">Phone number </label>
                    <input id="phone" className="border outline-none border-[#5541D9] rounded-xl p-3" {...register('phone', { required: true })} />
                    {errors.phone && <span>Phone number is required</span>}
                </div>
            </div>
            <div className="flex justify-end">
                <button type="submit" className="bg-[#5541D9] px-10 text-white">Next</button>
            </div>
        </form>
    );
};

export default Step1Form;
