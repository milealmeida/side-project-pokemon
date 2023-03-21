import { useEffect, useState } from 'react';
import Image from 'next/image';

import { Type } from 'components/atoms/Type';

import { PokemonTypes, PokemonV2Type } from 'types';

import { createApolloClient } from 'graphql/apollo-client';

import { GET_POKEMONS_STATS } from 'queries';

// import { stats } from './content';

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

type ModalProps = {
  id: number;
  src: string;
  number: number;
  name: string;
  types: PokemonV2Type;
  weight: number | null | undefined;
  height: number | null | undefined;
};

export function Modal({
  id,
  src,
  number,
  name,
  types,
  weight,
  height,
}: ModalProps) {
  const [close, setClose] = useState(true);
  const [pokemon, setPokemon] = useState([
    {
      pokemon_v2_pokemonstats: [
        {
          stat_id: number,
          base_stat: number,
        },
      ],
    },
  ]);

  const handleCloseModal = () => {
    setClose(false);
  };

  const apolloClient = createApolloClient();

  const handlePokemon = async () => {
    try {
      const response = await apolloClient.query({
        query: GET_POKEMONS_STATS,
        variables: {
          id,
        },
      });

      const data = response.data.pokemon_v2_pokemon;

      setPokemon(data);
    } catch {
      throw new Error('Ops! parece que algo deu errado, tente novamente.');
    }
  };

  const stats = pokemon[0].pokemon_v2_pokemonstats;

  useEffect(() => {
    handlePokemon();
  }, []);

  return (
    <>
      {close && (
        <Wrapper>
          <Container>
            <Card>
              <Img>
                <Image
                  src={src}
                  alt={name}
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </Img>

              <Number>#{number}</Number>
              <Title>{name}</Title>

              <Types>
                {types.slice(0, 2).map(type => (
                  <Type
                    key={type.pokemon_v2_type.id}
                    type={type.pokemon_v2_type.name as PokemonTypes}
                  />
                ))}
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
                    {weight} kg
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
                    {height} m
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
                {stats.map(stat => (
                  <Statistic key={stat.stat_id}>
                    <span>{stat.stat_id}</span>
                    <strong>{stat.base_stat}</strong>

                    <Bars>
                      <Bar percent={stat.base_stat} className="percent" />
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
