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

            <div className="absolute top-1/2 -translate-y-1/2 flex max-w-450 w-full justify-between px-[clamp(1rem,5vw,5rem)] flex-col md:flex-row gap-10">
                <div className="font-bebas font-bold leading-none border-b-3 pe-10">
                    <h1 className="text-[clamp(4rem,6vw,8rem)]">DONDE EL <br />
                        <span className="text-[clamp(5rem,7vw,9rem)]">
                            DEPORTE
                        </span><br />
                        COBRA VIDA.
                    </h1>
                </div>

                <div className="font-light text-xl text-white/80 max-w-100">
                    <p>Descubre, explora y participa en eventos deportivos en tu zona. Encuentra actividades de diferentes disciplinas, vive experiencias únicas en tu ciudad.</p>
                </div>
            </div>


        </div>
    )
}