"use client";

import { useState } from "react";
import Image from "next/image";
import Menu09Icon from '@iconify-react/hugeicons/menu-09';
import Cancel01Icon from "@iconify-react/hugeicons/cancel-01";

import Link from "next/link";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (

        <>
            <nav className={'sticky w-screen top-0 flex h-20 items-center px-5 md:px-8 backdrop-blur-xs z-20'}>

                <div className="flex flex-1 order-3 md:order-0 md:flex items-center justify-end md:justify-start">
                    <button
                        className="flex cursor-pointer items-center gap-2 p-1 hover:bg-black/20 rounded font-light transition-colors text-white"
                        onClick={() => setIsMenuOpen(true)}
                    >
                        <Menu09Icon className="order-1 md:order-0" height="3em" />
                        <span className="order-0 md:order-1">MENÚ</span>
                    </button>
                </div>

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

                <div className="justify-end flex-1 items-center gap-3 md:gap-10 relative order-3 hidden md:flex">
                    <Link href="/login" className="relative overflow-hidden login-selected py-1 text-white/90 hover:text-white hidden lg:flex">
                        <span className="cursor-pointer font-light">
                            Iniciar sesión
                        </span>
                    </Link>

                    <Link href="/register" className="bg-white/80 hidden lg:flex hover:bg-white px-5 py-2 rounded-full text-black relative overflow-hidden shadow-sm">
                        <span>
                            Registrarse
                        </span>
                    </Link>
                </div>
            </nav>

            <div
                onClick={() => setIsMenuOpen(false)}
                className={`fixed inset-0 bg-black/50 transition-opacity duration-300 z-20
                    ${isMenuOpen ? "pointer-events-auto opacity-100 backdrop-blur-lg" : "pointer-events-none opacity-0"}`
                }
            />

            <div
                className={`fixed inset-y-0 -left-1 z-30 flex h-screen w-full max-w-150 flex-col bg-white transition-transform duration-300 ease-in-out ${isMenuOpen ? "translate-x-0" : "-translate-x-full"
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