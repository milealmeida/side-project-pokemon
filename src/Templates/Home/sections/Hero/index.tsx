import Image from 'next/image';
import { Header, Type } from '../../../../components';
import {
  Wrapper,
  Container,
  Content,
  Number,
  Types,
  Title,
  Text,
  Button,
  Box,
  Divider,
  DividerUp,
  DividerDown,
} from './styles';

import fire from '../../../../../public/img/svg/fire.svg';
import flying from '../../../../../public/img/svg/flying.svg';
import bolt from '../../../../../public/img/svg/bolt.svg';

import charizard from '../../../../../public/img/charizard.png';

export function Hero() {
  return (
    <Wrapper>
      <Header />
      <Container>
        <Content>
          <Number>#006</Number>
          <Types>
            <Type type="Fire" color="#FF9900" src={fire} alt="fogo" />
            <Type type="Flying" color="#89BDFF" src={flying} alt="asas" />
          </Types>
          <Title>CHARIZARD</Title>
          <Text>
            Charizard se assemelha a um grande tradicional dragão europeu.
            Apesar da semelhança, Charizard é explicitamente um Pokémon dos
            tipos Fogo e Voador, e não um tipo Dragão, exceto em sua forma
            &quot;Mega Charizard X&quot;; No entanto, ele pode aprender ataques
            do tipo Dragão.
          </Text>

          <Button>
            <Image src={bolt} alt="Ícone de raio" width={24} height={24} />
            Mais Detalhes
          </Button>
        </Content>

        <Divider>
          <DividerUp />
          <Image src={fire} alt="Ícone de fogo" width={56} height={56} />
          <DividerDown />
        </Divider>

        <Box>
          <Image src={charizard} alt="Charizard" width={488} height={528} />
        </Box>
      </Container>
    </Wrapper>
  );
}
