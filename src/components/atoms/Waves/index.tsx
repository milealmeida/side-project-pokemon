import { Ocean, Wave } from './styles';

export function Waves() {
  return (
    <Ocean>
      <Wave data-testid="wave" className="wave" />
      <Wave className="wave" />
      <Wave className="wave" />
      <Wave className="wave" />
    </Ocean>
  );
}
