import { Type } from 'components/atoms/Type';
import Image from 'next/image';
import {
  Box,
  Card,
  Container,
  Content,
  Img,
  Info,
  Number,
  Title,
  Types,
  Wrapper,
} from './styles';

export function Modal() {
  return (
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

        <div>
          <div>
            <h2>Stats</h2>
          </div>

          <div>
            <div>
              <span>HP</span>
              <strong>78</strong>
            </div>
            <div>
              <span>Attack</span>
              <strong>84</strong>
            </div>
            <div>
              <span>Defense</span>
              <strong>78</strong>
            </div>
            <div>
              <span>Sp. Atk</span>
              <strong>109</strong>
            </div>
            <div>
              <span>Sp. Def</span>
              <strong>85</strong>
            </div>
            <div>
              <span>Speed</span>
              <strong>100</strong>
            </div>
          </div>
        </div>
      </Container>
    </Wrapper>
  );
}
