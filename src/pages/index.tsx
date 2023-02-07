import { PokeApIqueryQueryResult } from 'generated/graphql';
import { initializeApollo } from 'graphql/apollo-client';
import { GET_POKEMONS, PAGE_SIZE } from 'queries';

import { HomeTemplate } from 'Templates/Home';

type HomeProps = {
  pokemonsData: PokeApIqueryQueryResult;
};

export default function Home({ pokemonsData }: HomeProps) {
  return <HomeTemplate pokemons={pokemonsData} />;
}

export async function getServerSideProps() {
  const apolloClient = initializeApollo();

  const pokemonsData = await apolloClient.query({
    query: GET_POKEMONS,
    variables: {
      limit: PAGE_SIZE,
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
