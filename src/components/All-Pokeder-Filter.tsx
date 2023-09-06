import PokedexTypeSelect from "./Pokedex-Type-Select";

const PokemonTypes: string[] = [
  "bug",
  "poison",
  "normal",
  "psychic",
  "steel",
  "flying",
  "water",
  "grass",
  "fire",
  "electric",
  "ground",
  "fighting",
  "rock",
  "fairy",
  "ice",
  "dark",
  "ghost",
  "dragon",
];

function AllPokederFilter() {
  return (
    <>
      <header className="w-full flexx py-8 space-y-8 ">
        <div>
          <input
            type="text"
            placeholder="Search pokemon..."
            className="p-2 rounded-md bg-slate-900 text-gray-400 focus:outline-slate-600 w-[30%]"
          />
        </div>

        <div className="border flex w-[30%] flex-wrap gap-1 px-2 py-4 rounded-lg">
          {PokemonTypes.map((x) => {
            return <PokedexTypeSelect key={x} type={x} />;
          })}
        </div>
      </header>
    </>
  );
}

export default AllPokederFilter;
