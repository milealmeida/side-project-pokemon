/* eslint-disable react/no-array-index-key */
/* eslint-disable consistent-return */
import { useContext, useEffect, useState } from 'react';

import { Card, SearchBar } from 'components';
import { PokemonsProps, PokemonTypes, PokemonV2Type } from 'types';
import { getFormattedPokemonType } from 'utils/getFormattedPokemonType';

import { GET_POKEMONS } from 'pages';

import { createApolloClient } from 'graphql/apollo-client';
import { PokeApIqueryQueryResult } from 'generated/graphql';
import { DOTS, usePagination } from 'hooks/usePagination';
import { v4 as uuidv4 } from 'uuid';
import { PokemonContext } from 'context/pokemonsContext';
import { Container, Wrapper } from './styles';

const PAGE_SIZE = 9;

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
  const [page, setPage] = useState(0);
  const [renderPokemons, setRenderPokemons] = useState<
    PokemonDataProps | PokeApIqueryQueryResult
  >(pokemons);

  const { pokemons: pokemonCtx, dispatch } = useContext(PokemonContext);

  const loading = renderPokemons?.loading;
  const data = renderPokemons.data?.pokemon_v2_pokemon;

  const apolloClient = createApolloClient();

  const totalCount = 128 * 9;

  const paginationRange = usePagination({
    totalCount,
    currentPage: page,
  });

  async function handlePage(pagePosition: number) {
    const response = await apolloClient.query({
      query: GET_POKEMONS,
      variables: {
        limit: PAGE_SIZE,
        offset: pagePosition * PAGE_SIZE,
      },
    });

    // setRenderPokemons(response);

    dispatch({
      type: 'SET_POKEMONS',
      payload: response,
    });
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

  function handleSetPage(pageTeste: any) {
    setPage(() => {
      handlePage(pageTeste);

      return pageTeste;
    });
  }

  useEffect(() => {
    dispatch({
      type: 'SET_POKEMONS',
      payload: pokemons,
    });
  }, [dispatch, pokemons]);

  return (
    <Wrapper>
      <SearchBar />

      <button type="button" disabled={!page} onClick={prevPage}>
        Prev
      </button>

      {paginationRange &&
        paginationRange.map((pageNumber: any) => {
          if (pageNumber === DOTS) {
            return (
              <button key={uuidv4()} type="button">
                {pageNumber}
              </button>
            );
          }

          return (
            <button
              key={pageNumber + 1}
              type="button"
              onClick={() => {
                handleSetPage(pageNumber);
              }}
            >
              {pageNumber}
            </button>
          );
        })}

      <button type="button" disabled={page > 127} onClick={nextPage}>
        Next
      </button>

      {/* <Container>
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
      </Container> */}
      <Container>
        {!loading &&
          pokemonCtx?.data?.pokemon_v2_pokemon?.map(pokemon => {
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
