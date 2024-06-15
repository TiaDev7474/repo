import React, {PropsWithChildren} from 'react';
import SideIndicator from "@/app/steps/_components/side_indicator";

export  default function  Layout ({ children }: PropsWithChildren) {
    return (
        <div className="flex  items-start  ">
            <SideIndicator/>
            <div className="w-[60%]" >
                {children}
            </div>
        </div>
    );
};

