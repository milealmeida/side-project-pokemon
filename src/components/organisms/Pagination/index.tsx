import { useEffect, useState } from 'react';
import { createApolloClient } from 'graphql/apollo-client';
import { v4 as uuidv4 } from 'uuid';

import { DOTS, usePagination } from 'hooks/usePagination';
import { PokemonsProps } from 'types';
import { usePokemon } from 'context/pokemonsContext';

import { GET_POKEMONS, PAGE_SIZE } from 'queries';
import { Button, Wrapper } from './styles';

export function Pagination({ pokemons }: PokemonsProps) {
  const [page, setPage] = useState(0);

  const totalCount = 128 * PAGE_SIZE;

  const paginationRange = usePagination({
    totalCount,
    currentPage: page,
  });

  const { dispatch } = usePokemon();

  const apolloClient = createApolloClient();

  const handlePage = async (pagePosition: number) => {
    try {
      dispatch({
        type: 'SET_LOADING',
        payload: true,
      });

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
    } catch {
      throw new Error('Ops! parece que algo deu errado, tente novamente.');
    }
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
      type: 'SET_LOADING',
      payload: true,
    });

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
