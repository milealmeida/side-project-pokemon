import {
  createContext,
  useReducer,
  ReactNode,
  useContext,
  Dispatch,
  useMemo,
} from 'react';

import { PokeApIqueryQueryResult } from 'generated/graphql';

type PokemonDataProps = {
  data: {
    pokemon_v2_pokemon: {
      weight: number;
      height: number;
      id: number;
      name: string;
      pokemon_v2_pokemontypes: {
        pokemon_v2_type: {
          id: number;
          name: string;
        };
      }[];
    }[];
  };
  loading: boolean;
};

type ActionType = {
  type: string;
  payload: PokeApIqueryQueryResult | PokemonDataProps;
};

type ContextPokemon = {
  pokemons: PokeApIqueryQueryResult | PokemonDataProps | null;
  dispatch: Dispatch<ActionType>;
};

type PokemonProviderProps = {
  children: ReactNode;
};

const pokemonsReducer = (
  state: PokeApIqueryQueryResult | PokemonDataProps | null,
  action: ActionType,
) => {
  switch (action.type) {
    case 'SET_POKEMONS':
      return action.payload;
    default:
      return state;
  }
};

const PokemonContext = createContext<ContextPokemon>({
  pokemons: null,
  dispatch: () => null,
});

export function PokemonProvider({ children }: PokemonProviderProps) {
  const [pokemons, dispatchPokemons] = useReducer(pokemonsReducer, null);

  const result = useMemo(
    () => ({ pokemons, dispatch: dispatchPokemons }),
    [pokemons],
  );

  return (
    <PokemonContext.Provider value={result}>{children}</PokemonContext.Provider>
  );
}

export const usePokemon = () => {
  const { pokemons: pokemonCtx, dispatch } =
    useContext<ContextPokemon>(PokemonContext);

  return { pokemonCtx, dispatch };
};
