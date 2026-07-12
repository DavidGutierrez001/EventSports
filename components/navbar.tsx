"use client";

import { useState } from "react";
import Image from "next/image";
import Menu01Icon from "@iconify-react/hugeicons/menu-01";
import Cancel01Icon from "@iconify-react/hugeicons/cancel-01";

import Link from "next/link";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (

        <>
            <nav className={'fixed top-0 z-20 flex h-20 w-full items-center px-3 md:px-8'}>

                <div className="flex-1 hidden md:flex"/>

                <div className="flex-1 flex items-center justify-start md:justify-center">
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

                <div className="flex justify-end flex-1 items-center gap-3 md:gap-10">
                    <Link href="/login" className="relative overflow-hidden login-selected py-1 text-white/90 hover:text-white">
                        <span className="cursor-pointer font-light">
                            Iniciar sesión
                        </span>
                    </Link>
                    <button
                        className="flex cursor-pointer items-center gap-5 p-1 hover:bg-black/20 rounded transition-colors text-white"
                        onClick={() => setIsMenuOpen(true)}
                    >
                        <Menu01Icon height="3em" />
                    </button>
                </div>
            </nav>

            <div
                onClick={() => setIsMenuOpen(false)}
                className={`fixed inset-0 bg-black/50 transition-opacity duration-300 z-20
                    ${isMenuOpen ? "pointer-events-auto opacity-100 backdrop-blur-lg" : "pointer-events-none opacity-0"}`
                }
            />

            <div
                className={`fixed inset-y-0 right-0 z-30 flex h-screen w-full max-w-150 flex-col bg-white transition-transform duration-300 ease-in-out ${isMenuOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <header className="flex items-center justify-between p-[clamp(1rem,2vw,2rem)]">
                    <a href="/" rel="noopener noreferrer">
                        <Image
                            src="/eventsports-black.svg"
                            alt="Logo"
                            width={130}
                            height={130}
                            className="cursor-pointer"
                        />
                    </a>
                    <button
                        className="cursor-pointer rounded-full p-2 transition-colors hover:bg-black/10"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        <Cancel01Icon height="3em" color="#000" />
                    </button>
                </header>

                <ul className="flex flex-col relative px-5 md:px-10 text-[clamp(1rem,1.2vw,1.3rem)] gap-3 font-semibold text-zinc-600">
                    <li className="item_menu item_selected"><a href="/">INICIO</a></li>
                    <li className="item_menu"><a href="/about">EVENTOS</a></li>
                    <li className="item_menu"><a href="/divisions">DIVISIONES</a></li>
                    <li className="item_menu"><a href="/contact">NOTICIAS</a></li>
                </ul>
            </div>
        </>
    );
}