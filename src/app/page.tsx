import Hero from "@/components/Hero";
import Pokedex from "@/components/Pokedex";

export default function Home() {
  return (
    <>
      <main className="h-max">
        <Hero />
        <Pokedex />
      </main>
    </>
  );
}
