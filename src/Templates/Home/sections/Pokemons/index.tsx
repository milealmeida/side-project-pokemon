import { Card, SearchBar } from 'components';
import { PokemonsProps, PokemonTypes, PokemonV2Type } from 'types';
import { getFormattedPokemonType } from 'utils/getFormattedPokemonType';
import { useState } from 'react';
import { GET_POKEMONS } from 'pages';
import { createApolloClient } from 'graphql/apollo-client';
import { Container, Wrapper } from './styles';

const PAGE_SIZE = 9;

export function Pokemons({ pokemons }: PokemonsProps) {
  const [page, setPage] = useState(0);
  const [renderPokemons, setRenderPokemons] = useState<any>(pokemons);

  const apolloClient = createApolloClient();

  async function handlePage(teste: number) {
    const response = await apolloClient.query({
      query: GET_POKEMONS,
      variables: {
        limit: PAGE_SIZE,
        offset: teste * PAGE_SIZE,
      },
    });

    setRenderPokemons(response);
  }

  function prevPage() {
    if (page > 0) {
      setPage(prevState => {
        const newPage = prevState - 1;
        handlePage(newPage);

        return newPage;
      });
    }
  }

  function nextPage() {
    if (page < 129) {
      setPage(prevState => {
        const newPage = prevState + 1;
        handlePage(newPage);

        return newPage;
      });
    }
  }

  return (
    <Wrapper>
      <SearchBar />

      <button type="button" disabled={!page} onClick={prevPage}>
        Prev
      </button>
      <span style={{ color: 'white' }}>Page {page + 1}</span>
      <button type="button" disabled={!page} onClick={nextPage}>
        Next
      </button>

      <Container>
        {renderPokemons.loading === false &&
          renderPokemons?.data.pokemon_v2_pokemon.map((pokemon: any) => {
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
    </Wrapper>
  );
}
