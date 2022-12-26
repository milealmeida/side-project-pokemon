import { gql } from '@apollo/client';

const TYPES = gql`
  query samplePokeAPIquery {
    pokemon_v2_type {
      name
      id
    }
    pokemon_v2_pokemon {
      name
      id
    }
  }
`;

const tipos = [
  {
    name: 'normal',
    id: 1,
  },
  {
    name: 'fighting',
    id: 2,
  },
  {
    name: 'flying',
    id: 3,
  },
  {
    name: 'poison',
    id: 4,
  },
  {
    name: 'ground',
    id: 5,
  },
  {
    name: 'rock',
    id: 6,
  },
  {
    name: 'bug',
    id: 7,
  },
  {
    name: 'ghost',
    id: 8,
  },
  {
    name: 'steel',
    id: 9,
  },
  {
    name: 'fire',
    id: 10,
  },
  {
    name: 'water',
    id: 11,
  },
  {
    name: 'grass',
    id: 12,
  },
  {
    name: 'electric',
    id: 13,
  },
  {
    name: 'psychic',
    id: 14,
  },
  {
    name: 'ice',
    id: 15,
  },
  {
    name: 'dragon',
    id: 16,
  },
  {
    name: 'dark',
    id: 17,
  },
  {
    name: 'fairy',
    id: 18,
  },
  {
    name: 'unknown',
    id: 10001,
  },
  {
    name: 'shadow',
    id: 10002,
  },
];
