import Image from 'next/image';
import { useState } from 'react';

import { PokemonTypes, PokemonV2Type } from 'types';
import { Type } from '../../atoms/Type';
import { Modal } from '../Modal';

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
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const sumNumber = number + 1000;

  const numberFormatted = number && sumNumber.toString().slice(1);
  const weightFormatted = weight && weight / 10;
  const heightFormatted = height && height / 10;

  const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${src}.png`;

  function checkIfImgExists() {
    const http = new XMLHttpRequest();
    http.open('HEAD', url, false);
    http.send();
    if (http.status !== 404) return url;
    return '/img/who.png';
  }

  const img = checkIfImgExists();

  return (
    <Wrapper>
      {openModal && (
        <Modal
          id={number}
          src={img}
          height={heightFormatted}
          weight={weightFormatted}
          name={name}
          number={numberFormatted}
          types={types}
        />
      )}

      <Blur bgColor={bgColor} />

      <Image
        className={img === url ? 'pokemon' : 'who'}
        src={img}
        alt={name}
        width={img === url ? 256 : 200}
        height={img === url ? 256 : 200}
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

        <Details bgColor={bgColor} onClick={handleOpenModal}>
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
