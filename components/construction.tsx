"use client";

import Alert02Icon from '@iconify-react/hugeicons/alert-02';

export default function Construction() {
    return (
        <>
            <div className="h-[50svh] w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-size-[3rem_3rem]">
                <section className="w-full h-[50svh] flex flex-col justify-center items-center relative gap-5">
                    <Alert02Icon height="5em" className="text-[#3098ff]" />
                    <h1 className="text-black text-xl font-light text-center">Seguimos construyendo, <br /> lamentamos las molestias :).</h1>
                    <img className="h-25" src="cp-construct.gif" alt="" />
                </section>
            </div>
        </>
    )
}