import { useEffect, useState } from 'react';
import { createApolloClient } from 'graphql/apollo-client';
import { v4 as uuidv4 } from 'uuid';

import { DOTS, usePagination } from 'hooks/usePagination';
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

  const handlePage = async (pagePosition: number) => {
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
  };

  const prevPage = () => {
    if (page > 0) {
      setPage(prevState => {
        const newPage = prevState - 1;
        handlePage(newPage);

        return newPage;
      });
    }
  };

  const nextPage = () => {
    if (page < 129) {
      setPage(prevState => {
        const newPage = prevState + 1;
        handlePage(newPage);

        return newPage;
      });
    }
  };

  const handleSetPage = (setPageNumber: number) => {
    setPage(() => {
      handlePage(setPageNumber);

      return setPageNumber;
    });
  };

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
        paginationRange.map((pageNumber: number | string) => {
          if (pageNumber === DOTS) {
            return <Button key={uuidv4()}>{pageNumber}</Button>;
          }

          return (
            <Button
              className={pageNumber === page ? 'selected' : ''}
              key={uuidv4()}
              onClick={() => {
                if (typeof pageNumber === 'number') {
                  handleSetPage(pageNumber);
                }
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
