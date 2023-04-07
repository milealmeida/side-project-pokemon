import Image from 'next/image';
import { createApolloClient } from 'graphql/apollo-client';

import { PokemonTypes } from 'types';
import { getFormattedPokemonType } from 'utils/getFormattedPokemonType';
import { PokemonContextActionTypes, usePokemon } from 'context/pokemonsContext';
import { GET_POKEMONS_BY_TYPE, PAGE_SIZE } from 'queries';

import { Wrapper } from './styles';

type TypeProps = {
  type: PokemonTypes;
};

export function Type({ type }: TypeProps) {
  const { color, src, alt, name } = getFormattedPokemonType(type);

  const apolloClient = createApolloClient();

  const { dispatch } = usePokemon();

  const handlePokemonType = async (pokemonType: string) => {
    try {
      dispatch({
        type: PokemonContextActionTypes.SET_LOADING,
        payload: true,
      });

      const response = await apolloClient.query({
        query: GET_POKEMONS_BY_TYPE,
        variables: {
          type: pokemonType,
          limit: PAGE_SIZE,
          offset: PAGE_SIZE,
        },
      });

      dispatch({
        type: PokemonContextActionTypes.SET_POKEMON,
        payload: response,
      });
    } catch {
      throw new Error('Ops! parece que algo deu errado, tente novamente.');
    }
  };

  const handleClick = () => {
    const typePokemon = name.charAt(0).toLowerCase() + name.slice(1);
    handlePokemonType(typePokemon);
  };

  return (
    <Wrapper color={color} onClick={handleClick}>
      <Image src={src} alt={alt} width={16} height={16} />
      {name}
    </Wrapper>
  );
}
