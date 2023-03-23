import Image from 'next/image';

import { Card } from 'components';

import { usePokemon } from 'context/pokemonsContext';

import { PokemonTypes, PokemonV2Type } from 'types';

import { getFormattedPokemonType } from 'utils/getFormattedPokemonType';

import { NotFound } from './styles';

export function Cards() {
  const { pokemonCtx } = usePokemon();

  const data = pokemonCtx?.data?.pokemon_v2_pokemon;

  return (
    <>
      {data && data?.length < 1 ? (
        <NotFound>
          <Image
            src="/img/pikachu-sad.png"
            alt="Pikachu triste"
            width={32}
            height={32}
          />
          Ops, pokémon não encontrado!
        </NotFound>
      ) : (
        data?.map(pokemon => {
          const pokemonTypes = pokemon.pokemon_v2_pokemontypes[0]
            .pokemon_v2_type?.name as PokemonTypes;

          const { color } = getFormattedPokemonType(pokemonTypes);

          return (
            <Card
              key={pokemon.id}
              bgColor={color}
              src={pokemon.id}
              number={pokemon.id}
              name={pokemon.name}
              types={pokemon.pokemon_v2_pokemontypes as PokemonV2Type}
              weight={pokemon.weight}
              height={pokemon.height}
            />
          );
        })
      )}
    </>
  );
}
