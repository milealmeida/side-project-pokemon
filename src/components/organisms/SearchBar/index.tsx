import Image from 'next/image';

import { PokemonTypes } from 'types';
import { usePokemon } from 'context/pokemonsContext';
import { createApolloClient } from 'graphql/apollo-client';
import { GET_POKEMONS } from 'pages';
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

  const handlePage = async () => {
    const pokemonsData = await apolloClient.query({
      query: GET_POKEMONS,
      variables: {
        limit: 9,
        offset: 0,
      },
    });

    dispatch({
      type: 'SET_POKEMONS',
      payload: pokemonsData,
    });
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
          <LeftArrow>
            <Image
              src="/img/svg/left-arrow.svg"
              alt="Ícone de uma seta apontada para esquerda"
              width={32}
              height={32}
            />
          </LeftArrow>

          <Types>
            {types.map(({ id, type }) => (
              <Type key={id} type={type as PokemonTypes} />
            ))}
          </Types>

          <RightArrow>
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
