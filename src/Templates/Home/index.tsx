import { Footer } from 'components';
import { PokemonsProps } from 'types';
import { Hero, Pokemons } from './sections';

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
