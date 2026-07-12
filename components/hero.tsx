export default function Hero() {
    return (
        <div className="relative h-svh w-screen overflow-hidden flex flex-col items-center justify-center">
            <video
                src="/videos/hero.mp4"
                className="h-full w-full object-cover opacity-70"
                autoPlay
                muted
                loop
                playsInline
            />

            <div
                className="pointer-events-none absolute inset-0 opacity-10 bg-cover bg-center"
                style={{
                    backgroundImage:
                        'url("https://framerusercontent.com/images/6mcf62RlDfRfU61Yg5vb2pefpi4.png")',
                    backgroundSize: "220px",
                }}
            />

            <div className="absolute top-1/2 -translate-y-1/2 flex max-w-460 w-full justify-between px-[clamp(1rem,5vw,5rem)] flex-col md:flex-row gap-10">
                <div className="font-bebas font-bold leading-none border-b-3 max-w-90 min-w-90 md:min-w-fit md:max-w-fit pe-10">
                    <h1 className="text-[clamp(4rem,6vw,8rem)]">
                        DONDE EL <br />
                        <span className="text-[clamp(5rem,7vw,9rem)]">DEPORTE</span><br />
                        COBRA VIDA.
                    </h1>
                </div>

                <div className="font-light text-xl md:text-[2xl] text-white max-w-100 flex flex-col justify-center items-start overflow-hidden">
                    <p>Descubre, explora, gestiona y participa en eventos deportivos en tu zona. Encuentra actividades de diferentes disciplinas y divisiones.
                    </p>
                    <button className="flex w-full items-center btn-selected cursor-pointer p-4 md:p-5 text-lg text-black font-medium justify-center backdrop-blur-sm bg-white/90 hover:bg-white rounded shadow-md mt-10 transition-colors">
                        COMIENZA AHORA
                    </button>
                </div>
            </div>


        </div>
    )
}