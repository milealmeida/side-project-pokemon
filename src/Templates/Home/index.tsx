import { Footer } from 'components';
import { Hero, Pokemons } from './sections';

type HomeProps = {
  pokemons: any;
};

export function HomeTemplate({ pokemons }: HomeProps) {
  return (
    <>
      <Hero />
      <Pokemons pokemons={pokemons} />
      <Footer />
    </>
  );
}
