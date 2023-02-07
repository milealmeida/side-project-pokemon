import { gql } from '@apollo/client';

export const PAGE_SIZE = 9;

export const GET_POKEMONS = gql`
  query pokeAPIquery($limit: Int!, $offset: Int!) {
    pokemon_v2_pokemon(limit: $limit, offset: $offset) {
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

export const GET_POKEMONS_BY_TYPE = gql`
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

export const GET_POKEMONS_BY_NAME = gql`
  query pokeAPIquery($name: String!) {
    pokemon_v2_pokemon(where: { name: { _like: $name } }) {
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
