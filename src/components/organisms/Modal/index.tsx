import { useEffect, useState } from 'react';
import Image from 'next/image';

import { Type } from 'components/atoms/Type';

import { PokemonTypes, PokemonV2Type } from 'types';

import { createApolloClient } from 'graphql/apollo-client';

import { GET_POKEMONS_STATS } from 'queries';

import { Loading } from 'components/atoms/Loading';
import { getFormattedPokemonType } from 'utils/getFormattedPokemonType';
import { useEventListener } from 'hooks/useEventListener';
import { statsNames } from './content';

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
  Ellipsis,
  Ellipsi,
} from './styles';

type ModalProps = {
  id: number;
  src: string;
  number: string | 0;
  name: string;
  types: PokemonV2Type;
  weight?: number | null;
  height?: number | null;
  openModal: boolean;
  closeModal: () => void;
};

export function Modal({
  id,
  src,
  number,
  name,
  types,
  weight,
  height,
  openModal,
  closeModal,
}: ModalProps) {
  const [loading, setLoading] = useState(false);
  const [pokemon, setPokemon] = useState([
    {
      pokemon_v2_pokemonstats: [
        {
          stat_id: 0,
          base_stat: 0,
        },
      ],
    },
  ]);

  const apolloClient = createApolloClient();

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      closeModal();
    }
  };

  useEventListener('keydown', handleKeyDown);

  const handlePokemon = async () => {
    try {
      setLoading(true);

      const response = await apolloClient.query({
        query: GET_POKEMONS_STATS,
        variables: {
          id,
        },
      });

      const data = response.data.pokemon_v2_pokemon;

      setPokemon(data);
      setLoading(false);
    } catch {
      throw new Error('Ops! parece que algo deu errado, tente novamente.');
    }
  };

  const stats = pokemon[0].pokemon_v2_pokemonstats;
  const pokemonTypes = types[0].pokemon_v2_type.name as PokemonTypes;

  const { color } = getFormattedPokemonType(pokemonTypes);

  const statsUpdated = stats.map(objectStats => {
    const findStateNameById = statsNames.find(
      objectStatsName => objectStatsName.id === objectStats.stat_id,
    );

    if (findStateNameById) {
      const { stat_name } = findStateNameById;

      return { ...objectStats, stat_name };
    }

    return { ...objectStats, stat_name: 'HP' };
  });

  useEffect(() => {
    handlePokemon();
  }, []);

  return (
    <Wrapper className={openModal ? 'show' : ''}>
      <Container>
        <Card>
          <Img>
            <Image src={src} alt={name} fill style={{ objectFit: 'contain' }} />
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

          <Ellipsis>
            <Ellipsi color={color} />
          </Ellipsis>
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

            <div onClick={closeModal} role="button" tabIndex={0}>
              <Image
                src="/img/svg/close.svg"
                alt="Ícone de X"
                width={40}
                height={40}
              />
            </div>
          </StatsHeader>

          {loading ? (
            <Loading />
          ) : (
            <Stats>
              {statsUpdated.map(stat => (
                <Statistic key={stat.stat_id}>
                  <span>{stat.stat_name}</span>
                  <strong>{stat.base_stat}</strong>

                  <Bars>
                    <Bar percent={stat.base_stat} className="percent" />
                  </Bars>
                </Statistic>
              ))}
            </Stats>
          )}
        </div>
      </Container>
    </Wrapper>
  );
}
