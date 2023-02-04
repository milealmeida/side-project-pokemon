import { useContext, useState } from 'react';

import { Card, Pagination, SearchBar } from 'components';
import { PokemonsProps, PokemonTypes, PokemonV2Type } from 'types';
import { getFormattedPokemonType } from 'utils/getFormattedPokemonType';

import { PokeApIqueryQueryResult } from 'generated/graphql';
import { PokemonContext } from 'context/pokemonsContext';
import { Container, Wrapper } from './styles';

export type PokemonDataProps = {
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

export function Pokemons({ pokemons }: PokemonsProps) {
  const [renderPokemons, setRenderPokemons] = useState<
    PokemonDataProps | PokeApIqueryQueryResult
  >(pokemons);

  const { pokemons: pokemonCtx } = useContext(PokemonContext);

  const loading = renderPokemons?.loading;
  const data = pokemonCtx?.data?.pokemon_v2_pokemon;

  return (
    <Wrapper>
      <SearchBar />

      <Container>
        {!loading &&
          data?.map(pokemon => {
            const pokemonTypes = pokemon.pokemon_v2_pokemontypes[0]
              .pokemon_v2_type?.name as PokemonTypes;

            const { color } = getFormattedPokemonType(pokemonTypes);

            return (
              <Card
                key={pokemon.id}
                bgColor={color}
                src={pokemon.id}
                number={pokemon.id}
                name={pokemon.name}
                types={pokemon.pokemon_v2_pokemontypes as PokemonV2Type}
                weight={pokemon.weight}
                height={pokemon.height}
              />
            );
          })}
      </Container>

      <Pagination pokemons={pokemons} />
    </Wrapper>
  );
}
