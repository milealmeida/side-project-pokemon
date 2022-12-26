import { Card, SearchBar } from 'components';
import { Container, Wrapper } from './styles';

type PokemonsProps = {
  pokemons: any;
};

export function Pokemons({ pokemons }: PokemonsProps) {
  console.log(
    pokemons.pokemon_v2_pokemon.map(
      (pokemon: any) => pokemon.pokemon_v2_pokemontypes[0].pokemon_v2_type.name,
    ),
  );

  return (
    <Wrapper>
      <SearchBar />

      <Container>
        {pokemons.pokemon_v2_pokemon.slice(0, 9).map((pokemon: any) => (
          <Card
            key={pokemon.id}
            bgColor="#1CD80E"
            src={pokemon.id}
            number={`#${pokemon.id}`}
            name={pokemon.name}
            types={['grass', 'poison']}
            weight={pokemon.weight}
            height={pokemon.height}
          />
        ))}
      </Container>
    </Wrapper>
  );
}
