"use client"

import { useState, useEffect } from "react"

export default function Overlay() {
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        const isLoad = () => {
            setTimeout(() => {
                setIsLoaded(true)
            }, 1000)
        }

        window.addEventListener("load", isLoad);

        return () => {
            window.removeEventListener("load", isLoad);
        };
    }, [])

    return (
        <div className={`fixed flex justify-center items-center bg-white z-200 inset-0 h-screen w-screen 
        ${isLoaded ? "loaded-overlay" : ""}`}>
            <img
                className="h-12"
                src="/eventsports-black.svg"
                alt="Eventsports Logo"
            />
        </div>
    )
}