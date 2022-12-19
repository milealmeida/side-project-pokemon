export const handleTypes = (type: string) => {
  const flying = {
    color: '#89BDFF',
    src: '/img/svg/flying.svg',
    alt: 'Ícone de asas',
    name: 'Flying',
  };

  const bug = {
    color: '#7BCF00',
    src: '/img/svg/bug.svg',
    alt: 'Ícone de um inseto',
    name: 'Bug',
  };

  const dark = {
    color: '#5A566A',
    src: '/img/svg/dark.svg',
    alt: 'Ícone de lua',
    name: 'Dark',
  };

  const fire = {
    color: '#FF9900',
    src: '/img/svg/fire.svg',
    alt: 'Ícone de fogo',
    name: 'Fire',
  };

  const dragon = {
    color: '#0076FF',
    src: '/img/svg/dragon.svg',
    alt: 'Ícone de um dragão',
    name: 'Dragon',
  };

  const eletric = {
    color: '#FFDE00',
    src: '/img/svg/eletric.svg',
    alt: 'Ícone de raio',
    name: 'Eletric',
  };

  const grass = {
    color: '#1CD80E',
    src: '/img/svg/grass.svg',
    alt: 'Ícone de uma folha',
    name: 'Grass',
  };

  const poison = {
    color: '#F149FF',
    src: '/img/svg/poison.svg',
    alt: 'Ícone de veneno',
    name: 'Poison',
  };

  const water = {
    color: '#14A8FF',
    src: '/img/svg/water.svg',
    alt: "Ícone de uma gota d'água",
    name: 'Water',
  };

  switch (type) {
    case 'flying':
      return flying;
    case 'bug':
      return bug;
    case 'dark':
      return dark;
    case 'fire':
      return fire;
    case 'dragon':
      return dragon;
    case 'eletric':
      return eletric;
    case 'grass':
      return grass;
    case 'poison':
      return poison;
    default:
      return water;
  }
};
