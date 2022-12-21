import { Card, SearchBar } from 'components';
import { Container, Wrapper } from './styles';

export function Pokemons() {
  return (
    <Wrapper>
      <SearchBar />

      <Container>
        <Card
          bgColor="#1CD80E"
          src="/img/bulbasaur.png"
          number="#001"
          name="Bulbasaur"
          types={['grass', 'poison']}
          weight="6.9"
          height="0.7"
        />
        <Card
          bgColor="#1CD80E"
          src="/img/bulbasaur.png"
          number="#001"
          name="Bulbasaur"
          types={['grass']}
          weight="6.9"
          height="0.7"
        />
        <Card
          bgColor="#1CD80E"
          src="/img/bulbasaur.png"
          number="#001"
          name="Bulbasaur"
          types={['grass', 'poison']}
          weight="6.9"
          height="0.7"
        />
      </Container>

      <Container>
        <Card
          bgColor="#ff9900"
          src="/img/charmander.png"
          number="#004"
          name="Charmander"
          types={['fire']}
          weight="8.5"
          height="0.6"
        />
        <Card
          bgColor="#ff9900"
          src="/img/charmander.png"
          number="#004"
          name="Charmander"
          types={['fire', 'flying']}
          weight="8.5"
          height="0.6"
        />
        <Card
          bgColor="#ff9900"
          src="/img/charmander.png"
          number="#004"
          name="Charmander"
          types={['fire']}
          weight="8.5"
          height="0.6"
        />
      </Container>

      <Container>
        <Card
          bgColor="#14A8FF"
          src="/img/squirtle.png"
          number="#007"
          name="Squirtle"
          types={['water', 'bug']}
          weight="9"
          height="0.5"
        />
        <Card
          bgColor="#14A8FF"
          src="/img/squirtle.png"
          number="#007"
          name="Squirtle"
          types={['water']}
          weight="9"
          height="0.5"
        />
        <Card
          bgColor="#14A8FF"
          src="/img/squirtle.png"
          number="#007"
          name="Squirtle"
          types={['water']}
          weight="9"
          height="0.5"
        />
      </Container>
    </Wrapper>
  );
}
