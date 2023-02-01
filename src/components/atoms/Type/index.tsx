import Image from 'next/image';
import { gql } from '@apollo/client';
import { createApolloClient } from 'graphql/apollo-client';

import { PokemonTypes } from 'types';
import { getFormattedPokemonType } from 'utils/getFormattedPokemonType';

import { Wrapper } from './styles';

type TypeProps = {
  type: PokemonTypes;
};

export const GET_POKEMONS = gql`
  query pokeAPIquery($type: String!, $limit: Int!, $offset: Int!) {
    pokemon_v2_pokemon(
      where: {
        pokemon_v2_pokemontypes: { pokemon_v2_type: { name: { _like: $type } } }
      }
      limit: $limit
      offset: $offset
    ) {
      name
      id
      weight
      height
      pokemon_v2_pokemontypes {
        pokemon_v2_type {
          name
          id
        }
      }
    }
  }
`;

export function Type({ type }: TypeProps) {
  const { color, src, alt, name } = getFormattedPokemonType(type);

  const apolloClient = createApolloClient();

  async function handlePokemonType(pokemonType: string) {
    const response = await apolloClient.query({
      query: GET_POKEMONS,
      variables: {
        type: pokemonType,
        limit: 9,
        offset: 9,
      },
    });

    console.log(response);
  }

  const handleClick = () => {
    const typePokemon = name.charAt(0).toLowerCase() + name.slice(1);
    handlePokemonType(typePokemon);
  };

  return (
    <Wrapper color={color} onClick={handleClick}>
      <Image src={src} alt={alt} width={16} height={16} />
      {name}
    </Wrapper>
  );
}
