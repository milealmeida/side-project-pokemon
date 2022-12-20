import Image from 'next/image';
import { Container, Input, Wrapper } from './styles';

export function InputComponent() {
  return (
    <Wrapper>
      <Input placeholder="Pesquisar Pokémon" type="text" />
      <Container>
        <Image
          src="/img/svg/search.svg"
          alt="Ícone de uma lupa"
          width={24}
          height={24}
        />
      </Container>
    </Wrapper>
  );
}
