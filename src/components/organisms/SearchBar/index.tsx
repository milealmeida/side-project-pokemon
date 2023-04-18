import { MutableRefObject, useRef } from 'react';
import Image from 'next/image';
import { createApolloClient } from 'graphql/apollo-client';

import { PokemonTypes } from 'types';
import { PokemonContextActionTypes, usePokemon } from 'context/pokemonsContext';
import { GET_POKEMONS, PAGE_SIZE } from 'queries';

import { Type } from '../../atoms/Type';
import { InputComponent } from '../../atoms/Input';
import { types } from './types';

import {
  Box,
  Container,
  Divider,
  LeftArrow,
  Home,
  RightArrow,
  Title,
  Types,
  Wrapper,
} from './styles';

export function SearchBar() {
  const { dispatch } = usePokemon();

  const apolloClient = createApolloClient();

  const carousel = useRef() as MutableRefObject<HTMLDivElement>;

  const handlePage = async () => {
    try {
      dispatch({
        type: PokemonContextActionTypes.SET_LOADING,
        payload: true,
      });

      const pokemonsData = await apolloClient.query({
        query: GET_POKEMONS,
        variables: {
          limit: PAGE_SIZE,
          offset: 0,
        },
      });

      dispatch({
        type: PokemonContextActionTypes.SET_POKEMON,
        payload: pokemonsData,
      });
    } catch {
      throw new Error('Ops! parece que algo deu errado, tente novamente.');
    }
  };

  const handleLeftClick = () => {
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };

  const handleRightClick = () => {
    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };

  return (
    <Wrapper>
      <Home onClick={handlePage}>
        <Image
          src="/img/svg/home.svg"
          alt="Ícone de uma casa"
          width={24}
          height={24}
        />
        Início
      </Home>
      <Title>Pesquisar por tipos</Title>
      <Container>
        <Box>
          <LeftArrow onClick={handleLeftClick}>
            <Image
              src="/img/svg/left-arrow.svg"
              alt="Ícone de uma seta apontada para esquerda"
              width={32}
              height={32}
            />
          </LeftArrow>

          <Types ref={carousel}>
            {types.map(({ id, type }) => (
              <Type key={id} type={type as PokemonTypes} />
            ))}
          </Types>

          <RightArrow onClick={handleRightClick}>
            <Image
              src="/img/svg/right-arrow.svg"
              alt="Ícone de uma seta apontada para direita"
              width={32}
              height={32}
            />
          </RightArrow>
        </Box>

        <InputComponent />
      </Container>

      <Divider />
    </Wrapper>
  );
}
