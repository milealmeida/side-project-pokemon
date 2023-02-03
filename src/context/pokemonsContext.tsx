/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable @typescript-eslint/no-empty-function */
import { PokeApIqueryQueryResult } from 'generated/graphql';
import {
  createContext,
  useState,
  useEffect,
  useReducer,
  Dispatch,
  ReactNode,
} from 'react';

interface API {
  pokemons: PokeApIqueryQueryResult | null;
  dispatch: any;
}

interface APIProviderProps {
  children: ReactNode;
}

const pokemonsReducer = (
  state: PokeApIqueryQueryResult | null,
  action: { type: string; payload: PokeApIqueryQueryResult },
) => {
  switch (action.type) {
    case 'SET_POKEMONS':
      return action.payload;
    default:
      return state;
  }
};

export const PokemonContext = createContext<API>({
  pokemons: null,
  dispatch: () => {},
});

function PokemonProvider({ children }: APIProviderProps) {
  const [pokemons, dispatchPokemons] = useReducer(pokemonsReducer, null);

  return (
    <PokemonContext.Provider value={{ pokemons, dispatch: dispatchPokemons }}>
      {children}
    </PokemonContext.Provider>
  );
}

export default PokemonProvider;
