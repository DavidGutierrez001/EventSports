export default function Hero() {
    return (
        <div className="relative h-svh w-screen overflow-hidden">
            <video
                src="/videos/rally.mp4"
                className="h-full w-full object-cover"
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
                    backgroundSize: "200px",
                }}
            />

            <div className="absolute top-1/2 -translate-y-1/2 left-[10%] font-bebas font-bold leading-none">
                <h1 className="text-[clamp(3.5rem,6vw,8rem)]">DONDE EL <br />
                    <span className="text-[clamp(4rem,7vw,9rem)]">
                        DEPORTE
                    </span><br />
                    COBRA VIDA.
                </h1>
            </div>
        </div>
    )
}