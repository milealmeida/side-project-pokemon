import { Footer } from 'components';
import { Hero, Pokemons } from './sections';
import { PokemonsProps } from './sections/Pokemons';

type HomeProps = Pick<PokemonsProps, 'pokemons'>;

export function HomeTemplate({ pokemons }: HomeProps) {
  return (
    <>
      <Hero />
      <Pokemons pokemons={pokemons} />
      <Footer />
    </>
  );
}
