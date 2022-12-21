import Image from 'next/image';
import { PokemonTypes } from 'types/pokemonTypes';
// import { PokemonTypes } from 'types/pokemonTypes';
import { Type } from '../../atoms/Type';
import {
  Container,
  Details,
  Info,
  Name,
  Number,
  Types,
  Wrapper,
  Blur,
  Content,
} from './styles';

export type CardProps = {
  src: string;
  number: string;
  name: string;
  types: PokemonTypes[];
  weight: string;
  height: string;
  bgColor: string;
};

export function Card({
  src,
  number,
  name,
  types,
  weight,
  height,
  bgColor,
}: CardProps) {
  return (
    <Wrapper>
      <Blur bgColor={bgColor} />

      <Image
        className="pokemon"
        src={src}
        alt={name}
        width={256}
        height={256}
      />
      <Content>
        <Number>{number}</Number>
        <Name>{name}</Name>

        <Types>
          {types.slice(0, 2).map(type => (
            <Type type={type} />
          ))}
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
      </Content>
    </Wrapper>
  );
}
