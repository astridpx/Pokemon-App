import React from "react";
import Image from "next/image";
import Pokeball from "@/assets/logo.png";
import Axios from "axios";
import PokedexCard from "./PokedexCard";
import { PokemonData } from "../../pokemon-typings";
import Link from "next/link";

const FetchPokemon = async () => {
  try {
    const { data } = await Axios.get(
      "https://pokeapi.co/api/v2/pokemon?limit=12&offset=45"
    );

    return data?.results;
  } catch (error) {
    console.log("[ERROR] : " + error);
  }
};

export default async function Pokedex() {
  const pokemons = await FetchPokemon();

  return (
    <>
      <main className="w-full h-max">
        <section className="container mx-auto  ">
          <div className="w-full py-8 text-center flex justify-center">
            <h1 className="text-4xl font-semibold w-max  flex items-baseline cursor-pointer relative after:absolute after:h-1 after:w-[50%] after:bg-main-red after:-bottom-2 after:left-[25%]">
              P
              <span>
                <Image
                  src={Pokeball}
                  alt="pokeball"
                  className="h-[1.4rem] w-auto animate-spin-slow"
                />
              </span>
              kedex
            </h1>
          </div>

          {/* <div className="w-full h-max "> */}
          <section className="w-auto  max-h-[32rem] h-max grid grid-cols-4 gap-2  ">
            {pokemons.map((x: PokemonData) => {
              return <PokedexCard key={x.name} name={x.name} url={x.url} />;
            })}
          </section>
          <div className="text-center py-8">
            <Link href={"/All-Pokemon"} className="my-8 underline">
              View More
            </Link>
          </div>
          {/* </div> */}
        </section>
      </main>
    </>
  );
}
