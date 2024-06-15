import React from 'react';
import Link from "next/link";
import NavBar from "@/app/_common/components/nav_bar";
import HeaderContent from "@/app/_common/components/header_content";

const Header = () => {
    return (
        <div className="flex items-center  justify-center h-screen">
            <NavBar/>
            <HeaderContent/>
        </div>
    );
};

export default Header;