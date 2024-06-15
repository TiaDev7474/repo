import React from 'react';
import LoginForm from "@/app/login/_components/login_form";
import Link from "next/link";
import ButtonProviders from "@/components/ui/button_list_provider";

const Page = () => {
    return (
        <div className="flex justify-center items-center w-full h-screen">
            <div className="w-[40%] flex flex-col space-y-3">
                <h3 className="font-bold text-xl text-center">
                    We&apos;re thrilled to have you back! Log in to continue enjoying our services.
                </h3>
                <LoginForm/>
                <ButtonProviders/>
                <div>
                    <h3> Don&apos;t have an account yet? Sign up now to join us! <Link href="/signin" className="text-teal-500">Sign up here</Link></h3>
                </div>
            </div>
        </div>
    );
};

export default Page;