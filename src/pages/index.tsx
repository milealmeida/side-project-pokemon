import { gql } from '@apollo/client';
import { PokeApIqueryQueryResult } from 'generated/graphql';
import { initializeApollo } from 'graphql/apollo-client';

import { HomeTemplate } from 'Templates/Home';

type HomeProps = {
  pokemonsData: PokeApIqueryQueryResult;
};

const GET_POKEMONS = gql`
  query pokeAPIquery {
    pokemon_v2_pokemon(limit: 9, offset: 9) {
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

  const pokemonsData = await apolloClient.query({ query: GET_POKEMONS });

  return {
    props: {
      pokemonsData,
      initialApolloState: apolloClient.cache.extract(),
    },
  };
}
