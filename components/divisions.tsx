"use client";

import ArrowRight02Icon from '@iconify-react/hugeicons/arrow-right-02';

export default function Divisions() {
    return (
        <>
            <section className="flex flex-col justify-center items-center md:flex-row relative min-h-[clamp(90svh,90vh,90svh)] w-full flex-col pt-20 pb-10 lg:max-w-[80vw] px-10">
                <div className="flex-1 order-2 md:order-1 justify-end items-center flex">
                    <img
                        src="higuita.webp"
                        alt="rene higuita"
                        className="h-[clamp(25rem,50vw,50rem)] md:h-[70svh] md:right-auto object-cover absolute bottom-0 md:translate-x-20 lg:translate-x-20 z-10 pointer-events-none"
                    />
                </div>

                <div className="flex-1/3 flex flex-col justify-center order-1 md:order-2">
                    <h1 className="font-bebas font-bold leading-none text-[clamp(4.5rem,7vw,7rem)] tracking-wide">
                        EVENTOS
                    </h1>
                    <p className="text-[clamp(1rem,2.5vw,1.4rem)] text-white/60 mb-5">
                        Busca y descubre todos los eventos deportivos alrededor de tu zona.
                    </p>

                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
                        <article className="h-60 md:h-50 lg:h-[50svh] border"></article>
                        <article className="h-60 md:h-50 lg:h-[50svh] border"></article>
                        <article className="h-60 md:h-50 lg:h-[50svh] border lg:col-span-1 md:col-span-2 col-start-2"></article>
                    </div>
                    <button className="flex items-center justify-end md:justify-center gap-2 bg-white/80 hover:bg-[#78c8b2] text-black font-semibold md:text-normal p-4 mt-7 rounded cursor-not-allowed text-xs md:text-lg">
                        EXPLORAR MÁS
                        <ArrowRight02Icon height="1.5em" className='text-black' />
                    </button>
                </div>

            </section>
        </>
    )
}