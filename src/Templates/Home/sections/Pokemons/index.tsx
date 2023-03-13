import { Card, Pagination, SearchBar, Loading } from 'components';
import { PokemonsProps, PokemonTypes, PokemonV2Type } from 'types';
import { getFormattedPokemonType } from 'utils/getFormattedPokemonType';
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
        {loadingPokemonCtx || !data || loading ? (
          <Loading />
        ) : (
          data?.map(pokemon => {
            const pokemonTypes = pokemon.pokemon_v2_pokemontypes[0]
              .pokemon_v2_type?.name as PokemonTypes;

            const { color } = getFormattedPokemonType(pokemonTypes);

            return (
              <Card
                key={pokemon.id}
                bgColor={color}
                src={pokemon.id}
                number={pokemon.id}
                name={pokemon.name}
                types={pokemon.pokemon_v2_pokemontypes as PokemonV2Type}
                weight={pokemon.weight}
                height={pokemon.height}
              />
            );
          })
        )}
      </Container>

      <Pagination pokemons={pokemons} />
    </Wrapper>
  );
}
