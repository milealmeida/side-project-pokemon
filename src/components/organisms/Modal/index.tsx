import { Type } from 'components/atoms/Type';
import Image from 'next/image';
import { Container, Wrapper } from './styles';

export function Modal() {
  return (
    <Wrapper>
      <Container>
        <div>
          <Image
            src="/img/charizard.png"
            alt="Charizard"
            width={200}
            height={400}
          />

          <span>#006</span>
          <h1>Charizard</h1>

          <div>
            <Type type="flying" />
            <Type type="fire" />
          </div>

          <div>
            <Image
              src="/img/svg/weight.svg"
              alt="Balança"
              width={10}
              height={10}
            />
            <div>90.5 kg</div>
            <span>Peso</span>
          </div>

          <div>
            <Image
              src="/img/svg/height.svg"
              alt="Balança"
              width={10}
              height={10}
            />
            <div>1.7 m</div>
            <span>Altura</span>
          </div>
        </div>

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
