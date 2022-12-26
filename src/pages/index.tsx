import { gql } from '@apollo/client';
import { initializeApollo } from 'graphql/apollo-client';

import { HomeTemplate } from 'Templates/Home';

const GET_POKEMONS = gql`
  query samplePokeAPIquery {
    pokemon_v2_pokemon {
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

export default function Home({ data }: any) {
  const pokemons = data;

  return <HomeTemplate pokemons={pokemons} />;
}

export async function getServerSideProps() {
  const apolloClient = initializeApollo();

  const { data } = await apolloClient.query({ query: GET_POKEMONS });

  return {
    props: {
      data,
      initialApolloState: apolloClient.cache.extract(),
    },
  };
}
