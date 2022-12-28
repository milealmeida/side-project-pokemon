import Image from 'next/image';
import Link from 'next/link';
import { Content, Links, Text, Wrapper, Container } from './styles';

export function Footer() {
  return (
    <Wrapper>
      <Container>
        <Content>
          <Text>Direitos de imagem para Nintendo & The Pokémon Company</Text>
          <Text>
            Dados pegos da API -{' '}
            <Link href="https://pokeapi.co/" target="_blank">
              pokeapi.co
            </Link>
          </Text>
          <Text>
            Figma utilizado do{' '}
            <Link
              href="https://www.linkedin.com/in/carlosdancr/"
              target="_blank"
            >
              Carlos Daniel
            </Link>
          </Text>
        </Content>

        <Links>
          <Link href="https://www.linkedin.com/in/milealmeida/" target="_blank">
            <Image
              src="/img/svg/linkedin.svg"
              alt="Logo LinkedIn"
              width={48}
              height={48}
            />
          </Link>
          <Link href="https://github.com/milealmeida" target="_blank">
            <Image
              src="/img/svg/github.svg"
              alt="Logo Github"
              width={48}
              height={48}
            />
          </Link>
        </Links>
      </Container>
    </Wrapper>
  );
}
