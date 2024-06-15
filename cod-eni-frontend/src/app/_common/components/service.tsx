import React from 'react';
import {services} from "@/app/_common/constants/values_data";
import ServiceCard from "@/app/_common/components/service_card";


const Service = () => {
    return (
        <div className=" flex  flex-col px-[8%]  h-screen space-y-12">
            <div className="flex justify-between items-center">
                <div className="flex flex-col  items-center">
                    <h2 className="font-bold text-6xl">
                        +20 Services
                    </h2>
                    <h4 className="font-bold text-3xl">
                        Que vous pouvez accèder
                    </h4>
                </div>
                <p className="w-[45%] text-sm">
                    Accédez facilement à une variété de services gouvernementaux en ligne avec CitizenConnect.
                    Simplifiez vos démarches administratives et gérez vos demandes en toute sécurité et efficacité
                </p>
            </div>
            <div className="flex w-full justify-between space-x-16 items-center">
                {
                    services.map((elem,key)=>(
                        <ServiceCard item={elem} key={key}/>
                    ))
                }
            </div>
        </div>
    );
};

export default Service;
