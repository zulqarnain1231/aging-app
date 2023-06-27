"use client"
import SideNavbar from "@/components/Shared/Navigation/SideNavbar";
import TopNavbar from "@/components/Shared/Navigation/TopNavbar";
import { usePathname } from 'next/navigation'
import React, { Fragment, ReactNode } from "react";


interface Props {
    children?: ReactNode;
}

export default function Layout({ children }: Props) {
    const pathname = usePathname();

    const hideNavigation = () => {
        if (pathname === "/login" || pathname === "/signup") {
            return true;
        } else return false;
    };

    return (
        <Fragment>
            {!hideNavigation() && (
                <>
                    <TopNavbar />
                    <div className="w-full h-full md:grid grid-cols-[300px_calc(100%-300px)]">
                        <div className="md:block hidden w-full h-[calc(100vh-70px)] p-6">
                            <SideNavbar />
                        </div>
                        <div className="w-full h-full">
                            <main className="w-full h-[calc(100vh-70px)] md:py-6 p-4 overflow-auto">
                                {children}
                            </main>
                        </div>
                    </div>
                </>
            )}
            {hideNavigation() && (
                <main className="w-full">{children}</main>
            )}
        </Fragment>
    );
}
