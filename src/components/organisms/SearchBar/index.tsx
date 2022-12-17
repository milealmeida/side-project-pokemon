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

import flying from '../../../../public/img/svg/flying.svg';
import fire from '../../../../public/img/svg/fire.svg';
import bug from '../../../../public/img/svg/bug.svg';
import dark from '../../../../public/img/svg/dark.svg';
import dragon from '../../../../public/img/svg/dragon.svg';
import eletric from '../../../../public/img/svg/eletric.svg';
import grass from '../../../../public/img/svg/grass.svg';
import poison from '../../../../public/img/svg/poison.svg';
import water from '../../../../public/img/svg/water.svg';
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
            <Type type="Fire" color="#FF9900" src={fire} alt="fogo" />
            <Type type="Flying" color="#89BDFF" src={flying} alt="asas" />
            <Type type="Bug" color="#7BCF00" src={bug} alt="inseto" />
            <Type type="Dark" color="#5A566A" src={dark} alt="lua" />
            <Type type="Dragon" color="#0076FF" src={dragon} alt="dragão" />
            <Type type="Eletric" color="#FFDE00" src={eletric} alt="raio" />
            <Type type="Grass" color="#1CD80E" src={grass} alt="folha" />
            <Type type="Poison" color="#F149FF" src={poison} alt="veneno" />
            <Type type="Water" color="#14A8FF" src={water} alt="gota d'água" />
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
