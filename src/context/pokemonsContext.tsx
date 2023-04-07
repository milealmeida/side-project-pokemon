/* eslint-disable no-shadow */
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

export enum PokemonContextActionTypes {
  SET_POKEMON = 'SET_POKEMON',
  SET_LOADING = 'SET_LOADING',
}

type ActionType = {
  type: string;
  // payload: PokeApIqueryQueryResult | PokemonDataProps | boolean | null;
  payload: any;
};

type ContextPokemon = {
  pokemons: PokeApIqueryQueryResult | PokemonDataProps | null;
  dispatch: Dispatch<ActionType>;
  loading?: boolean;
};

type PokemonProviderProps = {
  children: ReactNode;
};

const pokemonsReducer = (
  state: PokeApIqueryQueryResult | PokemonDataProps | null | boolean,
  { type, payload }: ActionType,
) => {
  switch (type) {
    case PokemonContextActionTypes.SET_POKEMON:
      return payload;
    case PokemonContextActionTypes.SET_LOADING:
      return payload;
    default:
      return state;
  }
};

const PokemonContext = createContext<ContextPokemon>({
  pokemons: null,
  dispatch: () => null,
  loading: false,
});

export function PokemonProvider({ children }: PokemonProviderProps) {
  const [pokemons, dispatchPokemons] = useReducer(pokemonsReducer, null);

  const result = useMemo(
    () => ({
      pokemons,
      dispatch: dispatchPokemons,
      loading: pokemons?.loading,
    }),
    [pokemons],
  );

  return (
    <PokemonContext.Provider value={result}>{children}</PokemonContext.Provider>
  );
}

export const usePokemon = () => {
  const {
    pokemons: pokemonCtx,
    dispatch,
    loading,
  } = useContext<ContextPokemon>(PokemonContext);

  return { pokemonCtx, dispatch, loading };
};
