import Hero from "@/components/hero";
import Divisions from "@/components/divisions";

import Construction from "@/components/construction";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Hero />
      <Divisions />

      <Construction />
    </div>
  );
}
