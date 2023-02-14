import { Footer, Modal } from 'components';
import { PokemonsProps } from 'types';
import { Hero, Pokemons } from './sections';
import { Wrapper } from './styled';

type HomeProps = Pick<PokemonsProps, 'pokemons'>;

export function HomeTemplate({ pokemons }: HomeProps) {
  return (
    <Wrapper>
      <Modal />
      <Hero />
      <Pokemons pokemons={pokemons} />
      <Footer />
    </Wrapper>
  );
}
