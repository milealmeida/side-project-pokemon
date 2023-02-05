import { ChangeEvent, useState } from 'react';
import Image from 'next/image';
import { gql } from '@apollo/client';
import { createApolloClient } from 'graphql/apollo-client';

import { usePokemon } from 'context/pokemonsContext';

import { Container, Input, Wrapper } from './styles';

export const GET_POKEMONS = gql`
  query pokeAPIquery($name: String!) {
    pokemon_v2_pokemon(where: { name: { _like: $name } }) {
      name
      id
      weight
      height
      pokemon_v2_pokemontypes {
        pokemon_v2_type {
          name
          id
        }
      }
    }
  }
`;

export function InputComponent() {
  const [value, setValue] = useState<string>();

  const apolloClient = createApolloClient();

  const { dispatch } = usePokemon();

  async function handlePokemonName(name: string) {
    const response = await apolloClient.query({
      query: GET_POKEMONS,
      variables: {
        name: `%${name}%`,
      },
    });

    dispatch({
      type: 'SET_POKEMONS',
      payload: response,
    });
  }

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
