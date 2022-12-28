import Image from 'next/image';
import { PokemonTypes, PokemonV2Type } from 'types/pokemonTypes';
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
  src: number;
  number: number;
  name: string;
  types: PokemonV2Type;
  weight: number | null | undefined;
  height: number | null | undefined;
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
  const numberFormatted =
    number ?? (parseInt(number, 10) + 1000).toString().slice(1);
  const weightFormatted = weight && weight / 10;
  const heightFormatted = height && height / 10;

  return (
    <Wrapper>
      <Blur bgColor={bgColor} />

      <Image
        className="pokemon"
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${src}.png`}
        alt={name}
        width={256}
        height={256}
      />
      <Content>
        <Number>#{numberFormatted}</Number>
        <Name>{name}</Name>

        <Types>
          {types.slice(0, 2).map(type => (
            <Type
              key={type.pokemon_v2_type.id}
              type={type.pokemon_v2_type.name as PokemonTypes}
            />
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
              {weightFormatted} kg
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
              {heightFormatted} m
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
