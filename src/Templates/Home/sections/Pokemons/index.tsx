import { Card, SearchBar } from 'components';
import { PokemonsProps, PokemonTypes, PokemonV2Type } from 'types';
import { getFormattedPokemonType } from 'utils/getFormattedPokemonType';
import { Container, Wrapper } from './styles';

export function Pokemons({ pokemons }: PokemonsProps) {
  return (
    <Wrapper>
      <SearchBar />

      <Container>
        {!pokemons.loading &&
          pokemons.data?.pokemon_v2_pokemon.slice(0, 9).map(pokemon => {
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
          })}
      </Container>
    </Wrapper>
  );
}
