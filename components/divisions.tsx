export default function Divisions() {
    return (
        <section className="flex relative h-screen w-screen flex-col md:flex-row p-15">
            <div className="flex-1 justify-end items-center flex ">
                <img
                    src="higuita.webp"
                    alt="rene higuita"
                    className="h-[clamp(15rem,45vw,50rem)] object-cover absolute bottom-0 translate-x-10 z-10"
                />  
            </div>

            <div className="flex-1/4 flex flex-col justify-center gap-5 -translate-x-10">
                <h1 className="font-bebas font-bold leading-none text-[clamp(4.5rem,8vw,15rem)] tracking-wider">
                    EVENTOS
                </h1>
                <p className="text-xl text-white">
                    Descubre los próximos eventos deportivos en tu área.
                </p>

                <div className="flex gap-5 h-full max-h-100">
                    <article className="h-[clamp(10rem,27vw,35rem)] flex-1 border"></article>
                    <article className="h-[clamp(10rem,27vw,35rem)] flex-1 border"></article>
                    <article className="h-[clamp(10rem,27vw,35rem)] flex-1 border"></article>
                </div>
            </div>

        </section>
    )
}