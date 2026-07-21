"use client"

import { useState, useEffect } from "react"

export default function Overlay() {
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        const isLoad = () => {
            setIsLoaded(true)
        }

        window.addEventListener("load", isLoad);

        return () => {
            window.removeEventListener("load", isLoad);
        };
    }, [])

    return (
        <div className={`fixed flex flex-col gap-5 justify-center items-center bg-white z-200 inset-0 h-screen w-screen pointer-events-none
        ${isLoaded ? "loaded-overlay" : ""}`}>
            <img
                className="h-12"
                src="/eventsports-black.svg"
                alt="Eventsports Logo"
            />
            <span className={`text-zinc-900 border-b border-b-black`}>
                {isLoaded ? "Completado" : "Cargando..."}
            </span>
        </div>
    )
}