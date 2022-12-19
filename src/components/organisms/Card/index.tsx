import Image from 'next/image';
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

export type CardProps = {
  src: string;
  number: string;
  name: string;
  type: string;
  type2?: string;
  weight: string;
  height: string;
  bgColor: string;
};

export function Card({
  src,
  number,
  name,
  type,
  type2,
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
        {type2 && <Type type={type2} />}
      </Types>

      <Container>
        <Info>
          <strong>
            <Image
              src="/img/svg/weight.svg"
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
              src="/img/svg/ruler.svg"
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
        <Image
          src="/img/svg/bolt.svg"
          alt="Íconde de um raio"
          width={24}
          height={24}
        />
        Mais Detalhes
      </Details>
    </Wrapper>
  );
}
