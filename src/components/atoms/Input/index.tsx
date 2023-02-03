import { ChangeEvent, useContext, useState } from 'react';
import Image from 'next/image';
import { gql } from '@apollo/client';
import { createApolloClient } from 'graphql/apollo-client';

import { PokemonContext } from 'context/pokemonsContext';
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

  const { dispatch } = useContext(PokemonContext);

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

  if (value && value?.length > 2) {
    handlePokemonName(value);
  }

  return (
    <Wrapper>
      <Input placeholder="Pesquisar Pokémon" type="text" onChange={onChange} />
      <Container>
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
