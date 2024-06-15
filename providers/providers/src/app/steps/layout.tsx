import React, {PropsWithChildren} from 'react';
import SideIndicator from "@/app/steps/_components/side_indicator";

export  default function  ExampleLayout ({ children }: PropsWithChildren) {
    return (
        <div>
            <SideIndicator/>
            {children}
        </div>
    );
};

