import Image from 'next/image';

import { Header } from 'components';

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
  Divider,
  DividerUp,
  DividerDown,
} from './styles';

export function HomeTemplate() {
  return (
    <Wrapper>
      <Header />
      <Container>
        <Content>
          <Number>#006</Number>
          <Types>
            <Type color="#FF9900">
              <Image
                src="/img/svg/fire.svg"
                alt="Ícone de fogo"
                width={16}
                height={16}
              />
              Fire
            </Type>
            <Type color="#89BDFF">
              <Image
                src="/img/svg/flying.svg"
                alt="Ícone de asas"
                width={16}
                height={16}
              />
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

          <Button>
            <Image
              src="/img/svg/bolt.svg"
              alt="Ícone de raio"
              width={24}
              height={24}
            />
            Mais Detalhes
          </Button>
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

        <div>
          <Image
            src="/img/charizard.png"
            alt="Charizard"
            width={488}
            height={528}
          />
        </div>
      </Container>
    </Wrapper>
  );
}
