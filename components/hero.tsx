export default function Hero() {
    return (
        <div className="relative h-[90dvh] w-screen overflow-hidden">
            <video
                src="/videos/rally.mp4"
                className="h-full w-full object-cover"
                autoPlay
                muted
                loop
            />

            <div
                className="pointer-events-none absolute inset-0 opacity-10 bg-cover bg-center"
                style={{
                    backgroundImage:
                        'url("https://framerusercontent.com/images/6mcf62RlDfRfU61Yg5vb2pefpi4.png")',
                    backgroundSize: "200px",
                }}
            />

            <h1 className="absolute bottom-1/3 left-1/12 text-[clamp(3rem,8vw,5.5rem)] leading-none text-white font-extrabold tracking-tighter font-oswald">DONDE EL <br /><span className="text-[clamp(3.6rem,8vw,6.2rem)]">DEPORTE</span> <br />COBRA VIDA.</h1>
        </div>
    )
}