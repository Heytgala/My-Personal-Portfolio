"use client";
import React from "react";
import { cn } from "@/utils/cn";
import Link from "next/link";

export const FloatingNav = ({
    navItems,
    className,
}: {
    navItems: {
        name: string;
        link: string;
        icon?: JSX.Element;
    }[];
    className?: string;
}) => {
    return (
        <div
            className={cn(
                "fixed top-0 left-0 right-0 z-50 flex max-w-full justify-between mx-auto shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] items-center space-x-4 border-white/[0.2] bg-black-100",
                className
            )}
        >
            <div className="flex items-center px-4 py-3 sm:px-6 sm:py-4 md:px-10 md:py-5">
                <span className="text-white text-2xl sm:text-3xl md:text-4xl unique-font">Heyt Gala</span>
            </div>
            <div className="flex items-center space-x-4 sm:space-x-6 px-4 py-3 sm:px-6 sm:py-4 md:px-10 md:py-5">
                {navItems.map((navItem, idx) => (
                    <Link
                        key={`link=${idx}`}
                        href={navItem.link}
                        className={cn(
                            "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
                        )}
                    >
                        <span className="block sm:hidden">{navItem.icon}</span>
                        <span className="hidden sm:block text">{navItem.name}</span>
                    </Link>
                ))}
            </div>
        </div>
    );
};
