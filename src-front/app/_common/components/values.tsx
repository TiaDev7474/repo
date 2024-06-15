import React from 'react';
import {IValue, values_data} from "@/app/_common/constants/values_data";
import ValueCard from "@/app/_common/components/value_card";

const Values = () => {
    return (
        <div className="flex w-full items-start px-[8%] justify-between py-24">
            <div className="flex w-[40%] flex-col space-y-12 ">
                <h2 className="text-6xl font-bold">
                    Les Valeurs Ajoutées
                </h2>
                <p>
                    Découvrez comment CitizenConnect révolutionne vos interactions avec les services gouvernementaux.
                </p>
            </div>
            <div className="grid grid-cols-2 gap-4 w-[50%]">
                {
                    values_data.map((elem:IValue,key:number)=>(
                        <ValueCard item={elem} key={key}/>
                    ))
                }
            </div>
        </div>
    );
};

export default Values;
