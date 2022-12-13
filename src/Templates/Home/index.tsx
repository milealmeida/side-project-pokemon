import Image from 'next/image';
import { Header } from '../../components';
import {
  Wrapper,
  Container,
  Content,
  Number,
  Types,
  Type,
  Title,
  Text,
  Button,
  Box,
  Divider,
  Teste1,
  Teste2,
} from './styles';

import fire from '../../../public/img/svg/fire.svg';
import flying from '../../../public/img/svg/flying.svg';
import bolt from '../../../public/img/svg/bolt.svg';

import charizard from '../../../public/img/charizard.png';

export function HomeTemplate() {
  return (
    <Wrapper>
      <Header />
      <Container>
        <Content>
          <Number>#006</Number>
          <Types>
            <Type color="#FF9900">
              <Image src={fire} alt="Ícone de fogo" width={16} height={16} />
              Fire
            </Type>
            <Type color="#89BDFF">
              <Image src={flying} alt="Ícone de asas" width={16} height={16} />
              Flying
            </Type>
          </Types>
          <Title>CHARIZARD</Title>
          <Text>
            Charizard se assemelha a um grande tradicional dragão europeu.
            Apesar da semelhança, Charizard é explicitamente um Pokémon dos
            tipos Fogo e Voador, e não um tipo Dragão, exceto em sua forma
            &quot;Mega Charizard X&quot;; No entanto, ele pode aprender ataques
            do tipo Dragão.
          </Text>
          <Button type="button">
            <Image src={bolt} alt="Ícone de raio" width={24} height={24} />
            Mais Detalhes
          </Button>
        </Content>

        <Divider>
          <Teste1 />
          <Image src={fire} alt="Ícone de fogo" width={56} height={56} />
          <Teste2 />
        </Divider>

        <Box>
          <Image src={charizard} alt="Charizard" width={488} height={528} />
        </Box>
      </Container>
    </Wrapper>
  );
}
