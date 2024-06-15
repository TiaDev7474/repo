import React from 'react';
import Link from "next/link";

interface Props{

}

const Step = (props:Props) => {
    return (
        <div className="flex flex-col ">
            <div className="">
                <Link href={""}>Informations personnels</Link>
            </div>
        </div>
    );
};

export default Step;