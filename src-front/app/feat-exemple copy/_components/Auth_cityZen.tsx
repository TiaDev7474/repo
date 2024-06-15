'use client'
import React from 'react';
import {useSession} from "next-auth/react";
import Image from 'next/image';

const ExampleComponent = () => {
    const session = useSession()
    return (
        <div className='bg-white rounded'>
            <div className=''>
                <Image src="" alt='Logo'/>
                <h1>Sign In</h1>
                <p>to continue to Cityzen</p>
            </div>
            <div className=''></div>
        </div>
    );
};

export default ExampleComponent;