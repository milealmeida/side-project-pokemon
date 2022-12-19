import Image from 'next/image';
import { Type } from '../../atoms/Type';
import {
  Box,
  Container,
  Divider,
  LeftArrow,
  Link,
  RightArrow,
  Title,
  Types,
  Wrapper,
} from './styles';

import { InputComponent } from '../../atoms/Input';

export function SearchBar() {
  return (
    <Wrapper>
      <Link href="/">
        <Image
          src="/img/svg/home.svg"
          alt="Ícone de uma casa"
          width={24}
          height={24}
        />
        Início
      </Link>
      <Title>Pesquisar por tipos</Title>
      <Container>
        <Box>
          <LeftArrow>
            <Image
              src="/img/svg/left-arrow.svg"
              alt="Ícone de uma seta apontada para esquerda"
              width={32}
              height={32}
            />
          </LeftArrow>
          <Types>
            <Type
              type="Fire"
              color="#FF9900"
              src="/img/svg/fire.svg"
              alt="fogo"
            />
            <Type
              type="Flying"
              color="#89BDFF"
              src="/img/svg/flying.svg"
              alt="asas"
            />
            <Type
              type="Bug"
              color="#7BCF00"
              src="/img/svg/bug.svg"
              alt="inseto"
            />
            <Type
              type="Dark"
              color="#5A566A"
              src="/img/svg/dark.svg"
              alt="lua"
            />
            <Type
              type="Dragon"
              color="#0076FF"
              src="/img/svg/dragon.svg"
              alt="dragão"
            />
            <Type
              type="Eletric"
              color="#FFDE00"
              src="/img/svg/eletric.svg"
              alt="raio"
            />
            <Type
              type="Grass"
              color="#1CD80E"
              src="/img/svg/grass.svg"
              alt="folha"
            />
            <Type
              type="Poison"
              color="#F149FF"
              src="/img/svg/poison.svg"
              alt="veneno"
            />
            <Type
              type="Water"
              color="#14A8FF"
              src="/img/svg/water.svg"
              alt="gota d'água"
            />
          </Types>
          <RightArrow>
            <Image
              src="/img/svg/right-arrow.svg"
              alt="Ícone de uma seta apontada para direita"
              width={32}
              height={32}
            />
          </RightArrow>
        </Box>
        <InputComponent />
      </Container>

      <Divider />
    </Wrapper>
  );
}
