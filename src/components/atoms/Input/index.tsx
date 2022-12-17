import Image from 'next/image';
import { Container, Input, Wrapper } from './styles';

import search from '../../../../public/img/svg/search.svg';

export function InputComponent() {
  return (
    <Wrapper>
      <Input placeholder="Pesquisar Pokémon" type="text" />
      <Container>
        <Image src={search} alt="Ícone de uma lupa" width={24} height={24} />
      </Container>
    </Wrapper>
  );
}
