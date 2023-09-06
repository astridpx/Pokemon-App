export interface PokemonData {
  name: string;
  url: string;
}

export interface PokemonProp {
  id: number;
  image: string;
  types: [
    {
      slot: number;
      type: {
        name: string;
      };
    }
  ];
}
