import { useState } from 'react';
import Image from 'next/image';

import { Type } from 'components/atoms/Type';

import {
  Bar,
  Bars,
  Box,
  Card,
  Container,
  Content,
  Divider,
  Img,
  Info,
  Number,
  Separator,
  Statistic,
  Stats,
  StatsHeader,
  Title,
  Types,
  Wrapper,
} from './styles';
import { stats } from './content';

export function Modal() {
  const [close, setClose] = useState(true);

  const handleCloseModal = () => {
    setClose(false);
  };

  return (
    <>
      {close && (
        <Wrapper>
          <Container>
            <Card>
              <Img>
                <Image
                  src="/img/charizard.png"
                  alt="Charizard"
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </Img>

              <Number>#006</Number>
              <Title>Charizard</Title>

              <Types>
                <Type type="flying" />
                <Type type="fire" />
              </Types>

              <Info>
                <Box>
                  <Content>
                    <Image
                      src="/img/svg/weight.svg"
                      alt="Balança"
                      width={20}
                      height={20}
                    />
                    90.5 kg
                  </Content>
                  <p>Peso</p>
                </Box>

                <Box>
                  <Content>
                    <Image
                      src="/img/svg/ruler.svg"
                      alt="Balança"
                      width={20}
                      height={20}
                    />
                    1.7 m
                  </Content>
                  <p>Altura</p>
                </Box>
              </Info>
            </Card>

            <Divider>
              <Separator />

              <Image
                src="/img/svg/pokeball.svg"
                alt="Ícone de Pokebola"
                width={56}
                height={56}
              />
              <Separator />
            </Divider>

            <div>
              <StatsHeader>
                <h2>Stats</h2>

                <div onClick={handleCloseModal} role="button" tabIndex={0}>
                  <Image
                    src="/img/svg/close.svg"
                    alt="Ícone de X"
                    width={40}
                    height={40}
                  />
                </div>
              </StatsHeader>

              <Stats>
                {stats.map(item => (
                  <Statistic key={item.id}>
                    <span>{item.name}</span>
                    <strong>{item.percent}</strong>

                    <Bars>
                      <Bar percent={item.percent} className="percent" />
                    </Bars>
                  </Statistic>
                ))}
              </Stats>
            </div>
          </Container>
        </Wrapper>
      )}
    </>
  );
}
