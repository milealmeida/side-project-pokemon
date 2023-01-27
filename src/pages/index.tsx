import { gql } from '@apollo/client';
import { PokeApIqueryQueryResult } from 'generated/graphql';
import { initializeApollo } from 'graphql/apollo-client';

import { HomeTemplate } from 'Templates/Home';

type HomeProps = {
  pokemonsData: PokeApIqueryQueryResult;
};

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

export default function Home({ pokemonsData }: HomeProps) {
  return <HomeTemplate pokemons={pokemonsData} />;
}

export async function getServerSideProps() {
  const apolloClient = initializeApollo();

  const pokemonsData = await apolloClient.query({
    query: GET_POKEMONS,
    variables: {
      limit: 9,
      offset: 0,
    },
  });

  return {
    props: {
      pokemonsData,
      initialApolloState: apolloClient.cache.extract(),
    },
  };
}
