import { Footer } from 'components';
import { Hero, Pokemons } from './sections';

export function HomeTemplate() {
  return (
    <>
      <Hero />
      <Pokemons />
      <Footer />
    </>
  );
}
