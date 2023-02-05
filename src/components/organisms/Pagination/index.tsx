/* eslint-disable react/jsx-no-bind */
import { v4 as uuidv4 } from 'uuid';

import { DOTS, usePagination } from 'hooks/usePagination';

import { useEffect, useState } from 'react';
import { createApolloClient } from 'graphql/apollo-client';
import { GET_POKEMONS } from 'pages';
import { PokemonsProps } from 'types';
import { usePokemon } from 'context/pokemonsContext';
import { Button, Wrapper } from './styles';

const PAGE_SIZE = 9;

export function Pagination({ pokemons }: PokemonsProps) {
  const [page, setPage] = useState(0);

  const totalCount = 128 * 9;

  const paginationRange = usePagination({
    totalCount,
    currentPage: page,
  });

  const { dispatch } = usePokemon();

  const apolloClient = createApolloClient();

  async function handlePage(pagePosition: number) {
    const response = await apolloClient.query({
      query: GET_POKEMONS,
      variables: {
        limit: PAGE_SIZE,
        offset: pagePosition * PAGE_SIZE,
      },
    });

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
      <Button disabled={!page} onClick={prevPage}>
        &lt;
      </Button>

      {paginationRange &&
        paginationRange.map((pageNumber: any) => {
          if (pageNumber === DOTS) {
            return <Button key={uuidv4()}>{pageNumber}</Button>;
          }

          return (
            <Button
              className={pageNumber === page ? 'selected' : ''}
              key={pageNumber + 1}
              onClick={() => {
                handleSetPage(pageNumber);
              }}
            >
              {pageNumber}
            </Button>
          );
        })}

      <Button disabled={page > 127} onClick={nextPage}>
        &gt;
      </Button>
    </Wrapper>
  );
}
