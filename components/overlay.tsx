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
        <div className={`fixed flex flex-col gap-5 justify-center items-center bg-black z-200 inset-0 h-screen w-screen pointer-events-none transition-all duration-500 ease-in-out delay-500
        ${isLoaded ? "loaded-overlay" : ""}`}>
            <img
                className="h-12"
                src="/eventsports.svg"
                alt="Eventsports Logo"
            />
            <span className="loader" />
        </div>
    )
}