import { Pagination, SearchBar, Loading, Cards } from 'components';

import { PokemonsProps } from 'types';

import { usePokemon } from 'context/pokemonsContext';

import { Container, Wrapper } from './styles';

export function Pokemons({ pokemons }: PokemonsProps) {
  const { pokemonCtx, loading } = usePokemon();

  const loadingPokemonCtx = pokemonCtx?.loading;
  const data = pokemonCtx?.data?.pokemon_v2_pokemon;

  return (
    <Wrapper>
      <SearchBar />

      <Container>
        {loadingPokemonCtx || !data || loading ? <Loading /> : <Cards />}
      </Container>

      <Pagination pokemons={pokemons} />
    </Wrapper>
  );
}
