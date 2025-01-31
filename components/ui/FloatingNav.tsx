"use client";
import React, { useState } from "react";
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
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <div
            className={cn(
                "fixed top-0 left-0 right-0 z-50 flex max-w-full justify-between mx-auto shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] items-center space-x-4 border-white/[0.2] bg-black-100",
                className
            )}
        >
            {/* Brand Section */}
            <div className="flex items-center px-10 py-5">
                <span className="text-white text-3xl unique-font">Heyt Gala</span>
            </div>

            {/* Navigation Links for Desktop */}
            <div className="hidden sm:flex items-center space-x-6 px-10 py-5">
                {navItems.map((navItem, idx) => (
                    <Link
                        key={`link=${idx}`}
                        href={navItem.link}
                        className={cn(
                            "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
                        )}
                    >
                        <span className="hidden sm:block">{navItem.name}</span>
                    </Link>
                ))}
            </div>

            {/* Hamburger Menu for Mobile */}
            <div className="sm:hidden flex items-center px-4 py-5">
                <button onClick={toggleMenu} className="text-white">
                    <svg
                        className="w-6 h-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </button>
            </div>

            {/* Mobile Navigation Dropdown */}
            <div
                className={cn(
                    "sm:hidden fixed top-0 right-0 z-40 bg-black-100 w-2/3 h-full shadow-md transition-all duration-300 ease-in-out",
                    isMenuOpen ? "translate-x-0" : "translate-x-full"
                )}
            >
                <div className="flex justify-between p-5">
                    <button onClick={toggleMenu} className="text-white">
                        <svg
                            className="w-6 h-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>
                <div className="flex flex-col items-end px-6 py-5">
                    {navItems.map((navItem, idx) => (
                        <Link
                            key={`link=${idx}`}
                            href={navItem.link}
                            className={cn(
                                "text-white text-lg py-3 hover:bg-neutral-700 rounded-md w-full text-right"
                            )}
                            onClick={closeMenu} // Close the menu on click
                        >
                            {navItem.name}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};
