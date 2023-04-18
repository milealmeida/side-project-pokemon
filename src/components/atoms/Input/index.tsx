import { ChangeEvent, KeyboardEvent, useState } from 'react';
import Image from 'next/image';
import { createApolloClient } from 'graphql/apollo-client';

import { PokemonContextActionTypes, usePokemon } from 'context/pokemonsContext';
import { GET_POKEMONS_BY_NAME } from 'queries';

import { Container, Input, Wrapper } from './styles';

export function InputComponent() {
  const [value, setValue] = useState<string>();

  const apolloClient = createApolloClient();

  const { dispatch } = usePokemon();

  const handlePokemonName = async (name: string) => {
    try {
      dispatch({
        type: PokemonContextActionTypes.SET_LOADING,
        payload: true,
      });

      const response = await apolloClient.query({
        query: GET_POKEMONS_BY_NAME,
        variables: {
          name: `%${name}%`,
        },
      });

      dispatch({
        type: PokemonContextActionTypes.SET_POKEMON,
        payload: response,
      });

      setValue('');
    } catch {
      throw new Error('Ops! parece que algo deu errado, tente novamente.');
    }
  };

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;

    setValue(newValue);
  };

  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      if (value) {
        handlePokemonName(value);
      }
    }
  };

  const handleClick = () => {
    if (value) {
      handlePokemonName(value);
    }
  };

  return (
    <Wrapper>
      <Input
        placeholder="Pesquisar Pokémon"
        type="text"
        onChange={onChange}
        onKeyDown={handleKeyPress}
        value={value}
      />

      <Container onClick={handleClick}>
        <Image
          src="/img/svg/search.svg"
          alt="Ícone de uma lupa"
          width={24}
          height={24}
        />
      </Container>
    </Wrapper>
  );
}
