export type PkmTypesEnum =
  | 'flying'
  | 'bug'
  | 'dark'
  | 'fire'
  | 'dragon'
  | 'eletric'
  | 'grass'
  | 'poison'
  | 'water';

export const getFormattedPkmType = (type: PkmTypesEnum) => {
  const pkmTypes = {
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
  };

  return pkmTypes[type];
};
