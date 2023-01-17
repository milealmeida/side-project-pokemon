import { Ocean, Wrapper, Wave } from './styles';

export function Waves() {
  return (
    <Wrapper>
      <Ocean>
        <Wave data-testid="wave" className="wave" />
        <Wave className="wave" />
        <Wave className="wave" />
        <Wave className="wave" />
      </Ocean>
    </Wrapper>
  );
}
