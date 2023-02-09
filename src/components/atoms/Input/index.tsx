import { ChangeEvent, useState } from 'react';
import Image from 'next/image';
import { createApolloClient } from 'graphql/apollo-client';

import { usePokemon } from 'context/pokemonsContext';
import { GET_POKEMONS_BY_NAME } from 'queries';

import { Container, Input, Wrapper } from './styles';

export function InputComponent() {
  const [value, setValue] = useState<string>();

  const apolloClient = createApolloClient();

  const { dispatch } = usePokemon();

  const handlePokemonName = async (name: string) => {
    const response = await apolloClient.query({
      query: GET_POKEMONS_BY_NAME,
      variables: {
        name: `%${name}%`,
      },
    });

    dispatch({
      type: 'SET_POKEMONS',
      payload: response,
    });
  };

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;

    setValue(newValue);
  };

  const handleClick = () => {
    if (value) {
      handlePokemonName(value);
    }
  };

  return (
    <Wrapper>
      <Input placeholder="Pesquisar Pokémon" type="text" onChange={onChange} />

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
