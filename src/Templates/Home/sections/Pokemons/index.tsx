import { Card, SearchBar } from '../../../../components';
import { Container, Wrapper } from './styles';

import charmander from '../../../../../public/img/charmander.png';
import bulbasaur from '../../../../../public/img/bulbasaur.png';
import squirtle from '../../../../../public/img/squirtle.png';

export function Pokemons() {
  return (
    <Wrapper>
      <SearchBar />

      <Container>
        <Card
          bgColor="#1CD80E"
          src={bulbasaur}
          number="#001"
          name="Bulbasaur"
          type="grass"
          weight="6.9"
          height="0.7"
        />
        <Card
          bgColor="#1CD80E"
          src={bulbasaur}
          number="#001"
          name="Bulbasaur"
          type="grass"
          weight="6.9"
          height="0.7"
        />
        <Card
          bgColor="#1CD80E"
          src={bulbasaur}
          number="#001"
          name="Bulbasaur"
          type="grass"
          weight="6.9"
          height="0.7"
        />
      </Container>

      <Container>
        <Card
          bgColor="#ff9900"
          src={charmander}
          number="#004"
          name="Charmander"
          type="fire"
          weight="8.5"
          height="0.6"
        />
        <Card
          bgColor="#ff9900"
          src={charmander}
          number="#004"
          name="Charmander"
          type="fire"
          weight="8.5"
          height="0.6"
        />
        <Card
          bgColor="#ff9900"
          src={charmander}
          number="#004"
          name="Charmander"
          type="fire"
          weight="8.5"
          height="0.6"
        />
      </Container>

      <Container>
        <Card
          bgColor="#14A8FF"
          src={squirtle}
          number="#007"
          name="Squirtle"
          type="water"
          weight="9"
          height="0.5"
        />
        <Card
          bgColor="#14A8FF"
          src={squirtle}
          number="#007"
          name="Squirtle"
          type="water"
          weight="9"
          height="0.5"
        />
        <Card
          bgColor="#14A8FF"
          src={squirtle}
          number="#007"
          name="Squirtle"
          type="water"
          weight="9"
          height="0.5"
        />
      </Container>
    </Wrapper>
  );
}
