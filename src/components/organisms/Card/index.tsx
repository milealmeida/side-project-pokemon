import Image, { StaticImageData } from 'next/image';
import { Type } from '../../atoms/Type';
import {
  Container,
  Details,
  Info,
  Name,
  Number,
  Types,
  Wrapper,
} from './styles';

import weightIcon from '../../../../public/img/svg/weight.svg';
import ruler from '../../../../public/img/svg/ruler.svg';
import bolt from '../../../../public/img/svg/bolt.svg';

export type CardProps = {
  src: StaticImageData;
  number: string;
  name: string;
  type: string;
  weight: string;
  height: string;
  bgColor: string;
};

export function Card({
  src,
  number,
  name,
  type,
  weight,
  height,
  bgColor,
}: CardProps) {
  return (
    <Wrapper bgColor={bgColor}>
      <Image
        className="pokemon"
        src={src}
        alt={name}
        width={256}
        height={256}
      />
      <Number>{number}</Number>
      <Name>{name}</Name>

      <Types>
        <Type type={type} />
      </Types>

      <Container>
        <Info>
          <strong>
            <Image
              src={weightIcon}
              alt="Ícone de uma balança"
              width={24}
              height={24}
            />
            {weight} kg
          </strong>
          Peso
        </Info>

        <Info>
          <strong>
            <Image
              src={ruler}
              alt="Ícone de uma régua"
              width={24}
              height={24}
            />
            {height} m
          </strong>
          Altura
        </Info>
      </Container>

      <Details bgColor={bgColor}>
        <Image src={bolt} alt="Íconde de um raio" width={24} height={24} />
        Mais Detalhes
      </Details>
    </Wrapper>
  );
}
