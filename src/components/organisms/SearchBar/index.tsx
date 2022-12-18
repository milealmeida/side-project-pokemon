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

import home from '../../../../public/img/svg/home.svg';
import leftArrow from '../../../../public/img/svg/left-arrow.svg';
import rightArrow from '../../../../public/img/svg/right-arrow.svg';

import { InputComponent } from '../../atoms/Input';

export function SearchBar() {
  return (
    <Wrapper>
      <Link href="/">
        <Image src={home} alt="Ícone de uma casa" width={24} height={24} />
        Início
      </Link>
      <Title>Pesquisar por tipos</Title>
      <Container>
        <Box>
          <LeftArrow>
            <Image
              src={leftArrow}
              alt="Ícone de uma seta apontada para esquerda"
              width={32}
              height={32}
            />
          </LeftArrow>
          <Types>
            <Type type="fire" />
            <Type type="flying" />
            <Type type="bug" />
            <Type type="dark" />
            <Type type="dragon" />
            <Type type="eletric" />
            <Type type="grass" />
            <Type type="poison" />
            <Type type="water" />
          </Types>
          <RightArrow>
            <Image
              src={rightArrow}
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
