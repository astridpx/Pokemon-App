import PokemonImg from "@/assets/pokemonImg3.png";
import PokeballCard from "@/assets/pokeball.svg";
import Image from "next/image";
import { PokemonData, PokemonProp } from "../../pokemon-typings";
import Axios from "axios";

// let types: any[] = [];

// function removeDuplicates(arr: any) {
//   return arr.filter((item: any, index: any) => arr.indexOf(item) === index);
// }

const GetPokemonData = async (url: string) => {
  const { data } = await Axios.get(url);

  const pokemon: PokemonProp = {
    id: await data?.id,
    image: await data?.sprites.other["official-artwork"].front_default,
    types: await data?.types,
  };
  // console.log(data?.types);
  // const z = data?.types.map((x: any) => {
  //   // console.log(x.type.name);
  //   return types.push(x.type.name);
  // });

  // console.log(types);

  // console.log(removeDuplicates(types));

  return pokemon;
};

export default async function PokedexCard({ name, url }: PokemonData) {
  const pokemons = await GetPokemonData(url);

  return (
    <>
      <div className=" h-[10rem]  grid grid-cols-2 overflow-hidden  rounded-sm bg-card-green cursor-pointer hover:shadow-xl hover:scale-105 hover:border-black duration-150  ">
        <article className="p-4 ">
          <h4 className="my-2 text-xl font-semibold">{name}</h4>
          <div className="flex flex-wrap gap-1">
            {pokemons.types.map((x) => {
              return (
                <p key={x.slot} className="px-2 bg-slate-50/25 rounded-full">
                  {x.type.name}
                </p>
              );
            })}
          </div>
        </article>
        <div className=" flex h-full justify-center items-center">
          <figure className="relative h-28 w-28  m-4 ">
            <Image
              src={PokeballCard}
              alt="pokeball"
              className="absolute opacity-20 -z-0"
            />
            <Image
              src={pokemons.image}
              height={200}
              width={200}
              alt="pokemon"
              loading="lazy"
              className="relative h-auto w-auto scale-125"
            />
          </figure>
        </div>
      </div>
    </>
  );
}
