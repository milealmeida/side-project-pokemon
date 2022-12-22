import Image from 'next/image';
import { Header, Type, Button } from 'components';
import {
  Wrapper,
  Container,
  Content,
  Number,
  Types,
  Title,
  Text,
  Divider,
  DividerUp,
  DividerDown,
  Box,
} from './styles';

export function Hero() {
  return (
    <Wrapper>
      <Header />
      <Container>
        <Content>
          <Number>#006</Number>
          <Types>
            <Type type="fire" />
            <Type type="flying" />
          </Types>
          <Title>CHARIZARD</Title>
          <Text>
            Charizard se assemelha a um grande tradicional dragão europeu.
            Apesar da semelhança, Charizard é explicitamente um Pokémon dos
            tipos Fogo e Voador, e não um tipo Dragão, exceto em sua forma
            &quot;Mega Charizard X&quot;; No entanto, ele pode aprender ataques
            do tipo Dragão.
          </Text>

          <Button text="Mais Detalhes" />
        </Content>

        <Divider>
          <DividerUp />
          <Image
            src="/img/svg/fire.svg"
            alt="Ícone de fogo"
            width={56}
            height={56}
          />
          <DividerDown />
        </Divider>

        <Box>
          <Image
            src="/img/charizard.png"
            alt="Charizard"
            width={488}
            height={528}
          />
        </Box>
      </Container>
    </Wrapper>
  );
}
