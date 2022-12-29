import { PokemonTypes } from 'types';

export const getFormattedPokemonType = (type: PokemonTypes) => {
  const pokemonTypes = {
    flying: {
      color: '#89BDFF',
      src: '/img/svg/flying.svg',
      alt: 'Ícone de asas',
      name: 'Flying',
    },

    bug: {
      color: '#7BCF00',
      src: '/img/svg/bug.svg',
      alt: 'Ícone de um inseto',
      name: 'Bug',
    },

    dark: {
      color: '#5A566A',
      src: '/img/svg/dark.svg',
      alt: 'Ícone de lua',
      name: 'Dark',
    },

    fire: {
      color: '#FF9900',
      src: '/img/svg/fire.svg',
      alt: 'Ícone de fogo',
      name: 'Fire',
    },

    dragon: {
      color: '#0076FF',
      src: '/img/svg/dragon.svg',
      alt: 'Ícone de um dragão',
      name: 'Dragon',
    },

    eletric: {
      color: '#FFDE00',
      src: '/img/svg/eletric.svg',
      alt: 'Ícone de raio',
      name: 'Eletric',
    },

    grass: {
      color: '#1CD80E',
      src: '/img/svg/grass.svg',
      alt: 'Ícone de uma folha',
      name: 'Grass',
    },

    poison: {
      color: '#F149FF',
      src: '/img/svg/poison.svg',
      alt: 'Ícone de veneno',
      name: 'Poison',
    },

    water: {
      color: '#14A8FF',
      src: '/img/svg/water.svg',
      alt: "Ícone de uma gota d'água",
      name: 'Water',
    },

    normal: {
      color: '#9fa39d',
      src: '/img/svg/normal.svg',
      alt: 'Ícone de um círculo',
      name: 'Normal',
    },

    fighting: {
      color: '#ff215b',
      src: '/img/svg/fighting.svg',
      alt: 'Ícone de uma luva de box',
      name: 'Fighting',
    },

    ground: {
      color: '#ff6b0d',
      src: '/img/svg/ground.svg',
      alt: 'Ícone de uma montanha',
      name: 'Ground',
    },

    rock: {
      color: '#d8bc5a',
      src: '/img/svg/rock.svg',
      alt: 'Ícone de uma pedra',
      name: 'Rock',
    },

    ghost: {
      color: '#4e6aff',
      src: '/img/svg/ghost.svg',
      alt: 'Ícone de um fantasma',
      name: 'Ghost',
    },

    steel: {
      color: '#23a1bd',
      src: '/img/svg/steel.svg',
      alt: 'Ícone de uma porca',
      name: 'Steel',
    },

    electric: {
      color: '#ffde00',
      src: '/img/svg/electric.svg',
      alt: 'Ícone de raio',
      name: 'Electric',
    },

    psychic: {
      color: '#ff6c64',
      src: '/img/svg/psychic.svg',
      alt: 'Ícone de uma espiral',
      name: 'Psychic',
    },

    ice: {
      color: '#2ee4c6',
      src: '/img/svg/ice.svg',
      alt: 'Ícone de gelo',
      name: 'Ice',
    },

    fairy: {
      color: '#ff76ff',
      src: '/img/svg/fairy.svg',
      alt: 'Ícone de fairy',
      name: 'Fairy',
    },

    shadow: {
      color: '#414069',
      src: '/img/svg/dark.svg',
      alt: 'Ícone de lua',
      name: 'shadow',
    },
  };

  return pokemonTypes[type];
};
