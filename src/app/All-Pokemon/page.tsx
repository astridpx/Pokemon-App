import React from "react";
import PokedexCard from "@/components/PokedexCard";
import Pokeball from "@/assets/logo.png";
import Image from "next/image";
import Axios from "axios";
import { PokemonData } from "../../../pokemon-typings";
import AllPokederFilter from "@/components/All-Pokeder-Filter";

const FetchPokemon = async () => {
  try {
    const { data } = await Axios.get(
      "https://pokeapi.co/api/v2/pokemon?limit=1000&offset=0"
    );

    // console.log(data?.results);
    return data?.results;
  } catch (error) {
    console.log("[ERROR] : " + error);
  }
};

export default async function AllPokemonPage() {
  const pokemons = await FetchPokemon();

  return (
    <>
      <main className="h-max w-full">
        <div className="container mx-auto py-4">
          <div className="w-full flex justify-center">
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

          <AllPokederFilter />

          <section className="grid grid-cols-4 gap-2">
            {pokemons.map((x: PokemonData) => {
              return <PokedexCard key={x.name} name={x.name} url={x.url} />;
            })}
          </section>
        </div>
      </main>
    </>
  );
}
