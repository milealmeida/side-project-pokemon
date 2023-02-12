import { Ellipsis, Wrapper } from './styles';

export function Loading() {
  return (
    <Wrapper>
      <Ellipsis className="one" />
      <Ellipsis className="two" />
      <Ellipsis className="three" />
      <Ellipsis className="four" />
    </Wrapper>
  );
}
