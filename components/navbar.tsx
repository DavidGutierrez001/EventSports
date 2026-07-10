"use client";

import { useState } from "react";
import Image from "next/image";
import Menu01Icon from "@iconify-react/hugeicons/menu-01";
import Cancel01Icon from "@iconify-react/hugeicons/cancel-01";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="fixed top-0 z-20 grid h-25 w-full grid-cols-3 items-center px-8">
            <div />

            <div className="order-2 flex items-center justify-self-center">
                <a href="/" rel="noopener noreferrer">
                    <Image
                        src="/eventsports.svg"
                        alt="Logo"
                        width={115}
                        height={30}
                        className="cursor-pointer"
                    />
                </a>
            </div>

            <div className="order-3 justify-self-end flex items-center gap-5">
                <button
                    className="flex cursor-pointer items-center gap-5 p-1"
                    onClick={() => setIsMenuOpen(true)}
                >
                    <Menu01Icon height="3em" />
                </button>
            </div>

            {/* Overlay */}

            <div
                onClick={() => setIsMenuOpen(false)}
                className={`fixed inset-0 bg-black/50 transition-opacity duration-300 
                    ${isMenuOpen ? "pointer-events-auto opacity-100 backdrop-blur-md" : "pointer-events-none opacity-0"}`
                }
            />

            <div
                className={`fixed inset-y-0 right-0 z-30 flex h-screen w-full max-w-170 flex-col bg-white transition-transform duration-300 ease-in-out ${isMenuOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <header className="flex items-center justify-end p-5">
                    <button
                        className="cursor-pointer rounded-full p-2 transition-colors hover:bg-black/10"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        <Cancel01Icon height="3.5em" color="#000" />
                    </button>
                </header>

                <ul className="flex flex-col px-20 text-[clamp(2rem,2vw,2.7rem)] font-semibold text-black">
                    <li className="item_menu"><a href="/">INICIO</a></li>
                    <li className="item_menu"><a href="/about">EVENTOS</a></li>
                    <li className="item_menu"><a href="/divisions">DIVISIONES</a></li>
                    <li className="item_menu"><a href="/contact">NOTICIAS</a></li>
                </ul>
            </div>
        </nav>
    );
}